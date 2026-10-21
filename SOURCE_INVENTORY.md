# aijichang.blog｜原始资料清单（SOURCE_INVENTORY）

> **存证日期**：2026-10-21
> **归档位置**：`sources/private/`
> **执行准则**：所有页面展示的数据必须能反查到本清单中的确切来源条目（`sourceRef`）。缺失字段必须如实标注，不编造、不臆测。

---

## 一、输入资料文件清单

### 1. `SRC-14-BRANDS`
- **文件存证**：`sources/private/14个机场品牌清单.txt`
- **SHA-256**：`ded2665b22368b624c057bf9f204709a9a2643118684ac980d6aace9b46a411b`
- **原始体积**：33,437 字节
- **包含品牌条目**：14 个
  1. WgetCloud（邀请制专线服务商）
  2. 白月光（低价多档位服务商）
  3. FlyingBird（飞鸟云）
  4. CyberGuard（高防专线服务商）
  5. 龙猫云
  6. FATCAT（肥猫云）
  7. TNTCloud
  8. 青云梯
  9. 山水云
  10. 灵动云
  11. 浪网
  12. EdgeNova
  13. 萤火虫
  14. sslar
- **核心数据字段**：基础协议、节点涉及地区、历史套餐明细（季付/月付/年付/流量周期）、历史测速统计值（统计延迟、统计下载、测试日期 2026-05-02）、AI 与流媒体历史解锁状态（标注了部分节点或测试时点）。

---

### 2. `SRC-28-BRANDS`
- **文件存证**：`sources/private/28个机场品牌清单.txt`
- **SHA-256**：`b1930a88619da8a89fc2441f94d5eafd2357e5c9915f8cdd3b4fab4d32938dc0`
- **原始体积**：46,795 字节
- **包含品牌条目**：28 个
  1. 光速云（LightSpeed）
  2. 飞猫云（feimao）
  3. 微风网络（weifeng）
  4. 暮光加速（muguang）
  5. 大佬云（dalaoyun）
  6. 星岛梦（xingdaomeng）
  7. 二猫云（ermao）
  8. 无忧链接（wuyou）
  9. 唯兔云（weitu / V2云）
  10. Firefly（firefly / 飞为）
  11. 宇宙云（yuzhou）
  12. U1S1（u1s1 / 有一说一）
  13. 灵猫网络（lingmao）
  14. 极连云（jilian）
  15. 光年梯（guangnian）
  16. 一翻云（yifan）
  17. SOGO 云（sogo）
  18. 可信云（kexin）
  19. 速界（sujie）
  20. 闪跃（shanyue）
  21. 全球云（quanqiu）
  22. 闪电鼠（shandianshu）
  23. 云界线（yunjiexian）
  24. 榴莲云（liulianyun）
  25. 神行加速（shenxing）
  26. 环球梯（huanqiuti）
  27. 隐形人（yinxingren）
  28. 梯子云（tiziyun）
- **核心数据字段**：运营年份、入门价格、优惠码、线路类型（IEPL专线/隧道/BGP）、支持协议、节点覆盖范围、套餐表格（价格/周期/流量）、测速记录（2026-10-19 原文记录）、流媒体与 AI 声明支持情况、AFF 注册链接。

---

### 3. `SRC-AFF-PREFIX`
- **文件存证**：`sources/private/24个站点的aff替换前缀.txt`
- **SHA-256**：`9c922c6b03f45b41bc77aab36ecf47699a708850214659cd71a18fb6451ea73a`
- **原始体积**：1,281 字节
- **用途**：记录 24 个机场品牌合规推广入口域名前缀映射，供统一生成外部跳转链接并附加 `rel="nofollow sponsored noopener"`。

---

### 4. `SRC-LOGOS`
- **文件存证**：`site/public/logos/`
- **包含资产**：30 个 WebP/PNG 高清透明品牌标识图，例如 `1fly_logo.webp`、`2mao_logo.webp`、`galaxy_transparent_square.webp`、`光速云主图.png` 等。
- **用途**：简白前台品牌卡片、对比大表、单品牌报告展示。

---

### 5. `SRC-OFFICIAL-DOCS`（官方参考文档库）
依据任务书附录二，归档核验官方技术与服务规则：
- **OpenAI 官方文档**：`help.openai.com` ChatGPT 支持国家与地区；`developers.openai.com` API 地区与爬虫规范（OAI-SearchBot / GPTBot）。
- **Anthropic 官方文档**：`support.claude.com` Claude 网页支持国家；`docs.anthropic.com` Claude API 地区白名单。
- **Google 官方文档**：`support.google.com` Gemini 应用登录账户资格；`ai.google.dev` Gemini API & Google AI Studio 支持地区。
- **Netflix 官方帮助**：`help.netflix.com/en/node/114701` VPN 与代理播放受限条款；`node/125344` 片目跨区版权。
- **Disney+ 官方帮助**：`help.disneyplus.com/article/disneyplus-error-73` 位置识别错误（Error 73）与排查。
- **TikTok 官方支持**：`support.tiktok.com` 地区识别与社区准则。
- **VitePress 官方文档**：`vitepress.dev` 1.6+ 静态 HTML 构建、Native Sitemap、Data Loaders。
- **Pagefind 官方文档**：`pagefind.app` 1.5+ 构建后静态索引、Multilingual 多语言分词与 UI 规范。
- **Apache 官方文档**：`httpd.apache.org` mod_dir、mod_rewrite、ErrorDocument 与 .htaccess 生产配置。
