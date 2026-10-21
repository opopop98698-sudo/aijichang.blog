import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'site', '.vitepress', 'dist');
const apacheDeployDir = path.join(rootDir, 'deploy', 'apache');

console.log('🚀 [finalize:dist] 开始同步 Apache 部署配置与静态最终资产...');

if (!fs.existsSync(distDir)) {
  console.error(`❌ 未找到构建产物目录: ${distDir}，请先执行 vitepress build！`);
  process.exit(1);
}

// 1. Copy .htaccess to dist
const htaccessSrc = path.join(apacheDeployDir, '.htaccess');
const htaccessDest = path.join(distDir, '.htaccess');
if (fs.existsSync(htaccessSrc)) {
  fs.copyFileSync(htaccessSrc, htaccessDest);
  console.log('✅ 已同步 Apache .htaccess 路由规则与安全标头到 dist 根目录');
} else {
  console.warn('⚠️ 未找到 deploy/apache/.htaccess 文件');
}

// 2. Generate robots.txt
const robotsSrc = path.join(rootDir, 'site', 'public', 'robots.txt');
const robotsDest = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsSrc)) {
  fs.copyFileSync(robotsSrc, robotsDest);
  console.log('✅ 已同步 site/public/robots.txt 规范文件到 dist 根目录');
} else {
  const robotsContent = `# ==============================================================================
# aijichang.blog - Robots Exclusion Protocol
# ==============================================================================

User-agent: Googlebot
Allow: /
Disallow: /pagefind/
Disallow: /*?*

User-agent: Bingbot
Allow: /
Disallow: /pagefind/
Disallow: /*?*

User-agent: Baiduspider
Allow: /
Disallow: /pagefind/
Disallow: /*?*

User-agent: yisouspider
Allow: /
Disallow: /pagefind/
Disallow: /*?*

User-agent: *
Allow: /
Disallow: /pagefind/
Disallow: /*?*

# 站点地图引用
Sitemap: https://aijichang.blog/sitemap.xml
`;
  fs.writeFileSync(robotsDest, robotsContent, 'utf8');
  console.log('✅ 已生成 robots.txt 规范文件');
}

// 3. Verify sitemap.xml
const sitemapPath = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  const urlMatches = sitemapContent.match(/<loc>/g);
  console.log(`✅ VitePress 原生 sitemap.xml 校验通过，收录 URL 条数: ${urlMatches ? urlMatches.length : 0}`);
} else {
  console.warn('⚠️ 未检测到 sitemap.xml，请核查 VitePress sitemap 配置');
}

// 4. Verify favicon and logos
const faviconSrc = path.join(rootDir, 'site', 'public', 'favicon.ico');
const faviconDest = path.join(distDir, 'favicon.ico');
if (fs.existsSync(faviconSrc)) {
  fs.copyFileSync(faviconSrc, faviconDest);
  console.log('✅ 已同步 favicon.ico 到 dist 根目录');
}

const logoDir = path.join(distDir, 'logos');
if (fs.existsSync(logoDir)) {
  const logos = fs.readdirSync(logoDir);
  console.log(`✅ 静态徽标同步完备，dist/logos 内收录 ${logos.length} 个图标`);
}

const speedtestDir = path.join(distDir, 'speedtests');
if (fs.existsSync(speedtestDir)) {
  const st = fs.readdirSync(speedtestDir);
  console.log(`✅ 节点测速大图同步完备，dist/speedtests 内收录 ${st.length} 张实测图`);
}

const unlockDir = path.join(distDir, 'unlocks');
if (fs.existsSync(unlockDir)) {
  console.log('✅ 实测解锁图目录同步完备');
}

console.log('🎉 [finalize:dist] 静态交付件同步与部署准备全部完成！\n');
