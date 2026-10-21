# aijichang.blog Apache 纯静态生产环境部署与运维手册 (APACHE_DEPLOY.md)

本手册专为 **aijichang.blog（AI机场）** 的运维工程师与站长编写，指导如何在 Linux 生产服务器（Ubuntu / Debian / CentOS / Rocky Linux）上使用 Apache 2.4+ 托管本站的 VitePress 纯静态编译产物。

---

## 1. 生产环境基础环境与前置模块需求

- **Web 服务器**：Apache HTTP Server (httpd) v2.4.41 或更高版本
- **架构模式**：纯静态托管（Zero-Node.js Backend Runtime，零后端进程依赖）
- **核心依赖模块**（必须开启）：
  - `mod_rewrite`：用于支持 VitePress cleanUrls 伪静态重写与 301 规范化跳转；
  - `mod_headers`：用于设置生产级安全响应头（X-Content-Type-Options、CSP等）与强缓存控制；
  - `mod_mime`：用于注册 `.wasm`（Pagefind 必要）、`.webp`、`.json` 等多媒体类型的标准 Content-Type；
  - `mod_deflate`：开启全站 Gzip 文本压缩，降低网络带宽开销；
  - `mod_expires`：基于资源类型的客户端缓存生命周期控制；
  - `mod_ssl`：开启 HTTPS / TLS 加密通道。

---

## 2. 服务器目录规划与权限部署

建议在服务器上采用如下标准化目录结构：

```
/var/www/aijichang.blog/
├── deploy/
│   └── apache/
│       ├── .htaccess
│       └── aijichang.blog.conf
└── site/
    └── .vitepress/
        └── dist/                 <-- 实际 DocumentRoot 指向此处
            ├── index.html
            ├── .htaccess          <-- 由 finalize:dist 自动同步
            ├── robots.txt         <-- 由 finalize:dist 自动生成
            ├── sitemap.xml        <-- VitePress 原生生成
            ├── pagefind/          <-- 纯静态检索索引目录
            ├── logos/             <-- 品牌高清矢量与 WebP 徽标
            ├── assets/            <-- 哈希指纹 CSS 与 JS 切片
            └── ... (各栏目 HTML 目录)
```

### 部署与文件同步命令
```bash
# 1. 确保目录属主正确 (以 www-data 为例)
sudo chown -R www-data:www-data /var/www/aijichang.blog/site/.vitepress/dist

# 2. 设置目录与文件安全权限
sudo find /var/www/aijichang.blog/site/.vitepress/dist -type d -exec chmod 755 {} \;
sudo find /var/www/aijichang.blog/site/.vitepress/dist -type f -exec chmod 644 {} \;

# 3. 确保 .htaccess 可读生效
sudo chmod 644 /var/www/aijichang.blog/site/.vitepress/dist/.htaccess
```

---

## 3. Apache 虚拟主机配置落地实操

### Ubuntu / Debian 环境：
```bash
# 1. 启用必需的 Apache 核心模块
sudo a2enmod rewrite headers mime deflate expires ssl

# 2. 拷贝虚拟主机配置文件
sudo cp /var/www/aijichang.blog/deploy/apache/aijichang.blog.conf /etc/apache2/sites-available/aijichang.blog.conf

# 3. 申请并配置 Let's Encrypt 免费 SSL 证书
sudo apt-get update && sudo apt-get install -y certbot python3-certbot-apache
sudo certbot certonly --apache -d aijichang.blog -d www.aijichang.blog

# 4. 激活站点并测试配置语法
sudo a2ensite aijichang.blog.conf
sudo apache2ctl configtest

# 5. 优雅重启 Apache 服务
sudo systemctl reload apache2
```

### CentOS / RHEL / Rocky Linux 环境：
```bash
# 1. 安装 mod_ssl
sudo dnf install -y mod_ssl certbot python3-certbot-apache

# 2. 拷贝配置文件至 conf.d
sudo cp /var/www/aijichang.blog/deploy/apache/aijichang.blog.conf /etc/httpd/conf.d/aijichang.blog.conf

# 3. 检查配置并重载
sudo httpd -t
sudo systemctl reload httpd
```

---

## 4. 生产环境上线验证检查清单（Checklist）

上线后，运维人员应使用 `curl` 命令行工具进行以下 5 项关键核验：

### 1. 验证 HTTP 强制跳转 HTTPS
```bash
curl -I http://aijichang.blog/
# 预期返回: HTTP/1.1 301 Moved Permanently -> Location: https://aijichang.blog/
```

### 2. 验证 CleanUrls 路由映射与 404 兜底
```bash
# 测试目录型 URL
curl -I https://aijichang.blog/recommend/
# 预期返回: HTTP/1.1 200 OK (Content-Type: text/html; charset=UTF-8)

# 测试不存在的路径
curl -I https://aijichang.blog/non-existing-page-test
# 预期返回: HTTP/1.1 404 Not Found (由 404.html 承接)
```

### 3. 验证 Pagefind WASM 文件 MIME 类型
```bash
curl -I https://aijichang.blog/pagefind/wasm.pagefind
# 核心指标: Content-Type 必须为 application/wasm
```

### 4. 验证安全响应头加固
```bash
curl -I https://aijichang.blog/
# 必须包含以下安全标头:
# X-Content-Type-Options: nosniff
# X-Frame-Options: SAMEORIGIN
# Referrer-Policy: strict-origin-when-cross-origin
# Strict-Transport-Security: max-age=15768000; includeSubDomains; preload
```

### 5. 验证静态资源缓存策略
```bash
# 检查 CSS/JS 哈希切片
curl -I https://aijichang.blog/assets/app.xxxx.js
# 预期: Cache-Control: max-age=31536000, public, immutable

# 检查 HTML 页面
curl -I https://aijichang.blog/
# 预期: Cache-Control: no-cache, no-store, must-revalidate
```

---

## 5. 持续交付与日常更新发布流水线

当工作区有新的测试数据入库或文章更新时，运维人员仅需在项目根目录运行单条命令：

```bash
# 本地或 CI/CD 构建流水线
npm run build
```

该命令将自动按序执行：
1. `prepare:content`：检查内容映射与 Logo 静态资产；
2. `validate:data`：严格校验公开脱敏数据字典与引用一致性；
3. `validate:content`：审计 9 大主入口 7,000~15,000 字深度门槛与链接规范；
4. `build:vitepress`：编译 VitePress 静态 HTML/CSS/JS 与原生 Sitemap；
5. `finalize:dist`：同步 `.htaccess`、生成 `robots.txt`、补全必要静态交付物；
6. `build:search`：运行 Pagefind 生成 WASM 离线检索索引；
7. `audit:dist`：执行全站离线审计，确保零死链、零 404、配置完全合规。

构建完毕后，将 `site/.vitepress/dist` 内的文件通过 `rsync` 增量同步至生产服务器目录即可，真正实现**零停机时间（Zero Downtime）**发布。
