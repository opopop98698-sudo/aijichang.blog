import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const distDir = path.join(rootDir, 'site', '.vitepress', 'dist');

console.log('🧐 [audit:dist] 开始构建产物全方位离线与合规审计...\n');

if (!fs.existsSync(distDir)) {
  console.error(`❌ 构建产物目录不存在: ${distDir}`);
  process.exit(1);
}

let auditErrors = 0;
let auditWarnings = 0;

// 1. Audit Key HTML Entry Points
console.log('📄 1. 核心 HTML 页面完整性校验:');
const requiredPages = [
  'index.html',
  'recommend/index.html',
  'ai/index.html',
  'streaming/index.html',
  'free/index.html',
  'regions/index.html',
  'guides/index.html',
  'tests/index.html',
  'deals/index.html',
  'brands/index.html',
  'brands/lightspeed/index.html',
  'brands/wgetcloud/index.html',
  'brands/flycat/index.html',
  'brands/breezenet/index.html',
  'brands/twilight/index.html',
  'reviews/index.html',
  'reviews/lightspeed/index.html',
  'clients/index.html',
  'tools/index.html',
  'search/index.html',
  'about/index.html',
  'authors/index.html',
  'authors/lin-yue/index.html',
  'methodology/index.html',
  'disclosure/index.html',
  'privacy/index.html',
  'corrections/index.html',
  '404.html'
];

for (const relPage of requiredPages) {
  const full = path.join(distDir, relPage);
  if (fs.existsSync(full)) {
    const size = fs.statSync(full).size;
    console.log(`  ✅ 存在: ${relPage.padEnd(30)} 大小: ${(size / 1024).toFixed(1)} KB`);
  } else {
    console.error(`  ❌ 缺失核心 HTML: ${relPage}`);
    auditErrors++;
  }
}

// 2. Audit Pagefind Search Index Assets
console.log('\n🔎 2. Pagefind 全文检索离线索引校验:');
const pagefindDir = path.join(distDir, 'pagefind');
if (fs.existsSync(pagefindDir)) {
  const pfFiles = fs.readdirSync(pagefindDir);
  console.log(`  ✅ Pagefind 目录就位，收录 ${pfFiles.length} 个索引及 UI 资源`);

  const essentialPf = ['pagefind.js', 'pagefind-ui.js', 'pagefind-ui.css'];
  for (const f of essentialPf) {
    if (fs.existsSync(path.join(pagefindDir, f))) {
      console.log(`    ✅ ${f} 就绪`);
    } else {
      console.error(`    ❌ 缺失 Pagefind 关键文件: ${f}`);
      auditErrors++;
    }
  }
} else {
  console.error('  ❌ 未找到 pagefind 索引目录，请先运行 pagefind 命令！');
  auditErrors++;
}

// 3. Audit Apache .htaccess & Security Config
console.log('\n🛡️ 3. Apache .htaccess 与安全标头离线核验:');
const htaccessPath = path.join(distDir, '.htaccess');
if (fs.existsSync(htaccessPath)) {
  const htContent = fs.readFileSync(htaccessPath, 'utf8');
  const checks = [
    { name: 'DirectoryIndex index.html', passed: htContent.includes('DirectoryIndex index.html') },
    { name: 'RewriteEngine On (CleanUrls)', passed: htContent.includes('RewriteEngine On') },
    { name: 'ErrorDocument 404 /404.html', passed: htContent.includes('ErrorDocument 404 /404.html') },
    { name: 'WASM MIME 支持 (AddType application/wasm .wasm)', passed: htContent.includes('AddType application/wasm .wasm') },
    { name: '安全标头 (X-Content-Type-Options / X-Frame-Options)', passed: htContent.includes('X-Content-Type-Options') }
  ];

  for (const c of checks) {
    if (c.passed) {
      console.log(`  ✅ 规则生效: ${c.name}`);
    } else {
      console.error(`  ❌ 缺失关键规则: ${c.name}`);
      auditErrors++;
    }
  }
} else {
  console.error('  ❌ 未在 dist 根目录检测到 .htaccess！');
  auditErrors++;
}

// 4. Audit Sitemap & Robots
console.log('\n🗺️ 4. Sitemap 与 SEO 规范校验:');
const sitemapPath = path.join(distDir, 'sitemap.xml');
if (fs.existsSync(sitemapPath)) {
  const sm = fs.readFileSync(sitemapPath, 'utf8');
  const locCount = (sm.match(/<loc>/g) || []).length;
  console.log(`  ✅ sitemap.xml 存在，包含 ${locCount} 个索引链接`);
  if (!sm.includes('https://aijichang.blog')) {
    console.warn('  ⚠️ sitemap.xml 未包含规范主域 https://aijichang.blog');
    auditWarnings++;
  }
} else {
  console.error('  ❌ 缺失 sitemap.xml！');
  auditErrors++;
}

const robotsPath = path.join(distDir, 'robots.txt');
if (fs.existsSync(robotsPath)) {
  console.log('  ✅ robots.txt 就位');
} else {
  console.error('  ❌ 缺失 robots.txt！');
  auditErrors++;
}

// 5. Scan for local 404 resource references in HTML
console.log('\n🔍 5. HTML 本地资源引用无死链校验:');
function getHtmlFiles(dir) {
  const list = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name !== 'pagefind') list.push(...getHtmlFiles(full));
    } else if (e.name.endsWith('.html')) {
      list.push(full);
    }
  }
  return list;
}

const htmlFiles = getHtmlFiles(distDir);
let checkedAssets = 0;
let missingAssets = 0;

for (const htmlFile of htmlFiles) {
  const content = fs.readFileSync(htmlFile, 'utf8');
  // Look for href="/..." and src="/..."
  const assetRegex = /(?:href|src)=["'](\/[^"'>\s#?]+)["']/g;
  let m;
  while ((m = assetRegex.exec(content)) !== null) {
    const assetUrl = m[1];
    if (assetUrl === '/' || assetUrl.startsWith('/#')) continue;
    checkedAssets++;

    // Local file check in dist (decode URI component to handle Chinese filenames)
    let decodedAssetUrl = assetUrl;
    try {
      decodedAssetUrl = decodeURIComponent(assetUrl);
    } catch (e) {
      // ignore
    }
    let localAssetPath = path.join(distDir, decodedAssetUrl.replace(/^\//, ''));
    if (!fs.existsSync(localAssetPath)) {
      // It might be a directory URL ending in /
      if (fs.existsSync(path.join(localAssetPath, 'index.html'))) {
        continue;
      }
      // It might be cleanUrl (e.g. /recommend -> /recommend.html or /recommend/index.html)
      if (fs.existsSync(`${localAssetPath}.html`) || fs.existsSync(path.join(localAssetPath, 'index.html'))) {
        continue;
      }
      // Might be pagefind dynamic assets
      if (assetUrl.startsWith('/pagefind/')) {
        continue;
      }
      console.warn(`  ⚠️ 疑似未找到静态资源: ${assetUrl} (in ${path.relative(distDir, htmlFile)})`);
      missingAssets++;
    }
  }
}

console.log(`  ✅ 静态资源引用核验完毕: 扫描 ${checkedAssets} 处资源引用，异常: ${missingAssets}`);

console.log('\n====================================================');
if (auditErrors === 0) {
  console.log(`🎉 [audit:dist] 产物审计全部通过！(错误: 0, 预警: ${auditWarnings + missingAssets})`);
  console.log('🚀 站点已具备生产环境发布交付就绪标准！');
} else {
  console.error(`❌ [audit:dist] 审计未通过！发现 ${auditErrors} 处严重错误，请排查修正。`);
  process.exit(1);
}
console.log('====================================================\n');
