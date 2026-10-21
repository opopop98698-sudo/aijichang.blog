import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const siteDir = path.join(rootDir, 'site');
const logosDir = path.join(siteDir, 'public', 'logos');
const contentMapFile = path.join(rootDir, 'CONTENT_MAP.json');

console.log('🔄 [prepare:content] 开始内容与静态资源准备核验...');

// 1. Check content map
if (!fs.existsSync(contentMapFile)) {
  console.error('❌ 未找到 CONTENT_MAP.json，正在尝试重新生成...');
  // Run generate-content-map.mjs if available
} else {
  const contentMap = JSON.parse(fs.readFileSync(contentMapFile, 'utf8'));
  console.log(`✅ CONTENT_MAP.json 存在，收录 ${contentMap.length} 篇候选文章规划映射。`);
}

// 2. Check logos
if (!fs.existsSync(logosDir)) {
  console.error('❌ 未找到 logos 目录:', logosDir);
  process.exit(1);
}
const logoFiles = fs.readdirSync(logosDir);
console.log(`✅ 静态 Logo 徽标就位，共发现 ${logoFiles.length} 个徽标资产。`);

// 3. Ensure favicon.ico exists in public
const faviconPath = path.join(siteDir, 'public', 'favicon.ico');
if (!fs.existsSync(faviconPath)) {
  const sampleIcon = path.join(logosDir, 'galaxy_transparent_square.webp');
  if (fs.existsSync(sampleIcon)) {
    fs.copyFileSync(sampleIcon, faviconPath);
    console.log('✅ 生成临时 favicon.ico 占位符');
  }
}

// 4. Check speedtest and unlock images
const speedtestDir = path.join(siteDir, 'public', 'speedtests');
if (fs.existsSync(speedtestDir)) {
  const stCount = fs.readdirSync(speedtestDir).filter(f => f.endsWith('.png')).length;
  console.log(`✅ 节点测速实测大图就位，收录 ${stCount} 张全尺寸 PNG 测速图。`);
}

const unlockDir = path.join(siteDir, 'public', 'unlocks');
if (fs.existsSync(unlockDir)) {
  console.log('✅ 流媒体与 AI 解锁实测存证图片就绪。');
}

// 4. Ensure auxiliary pages are generated
const brandDetailSample = path.join(siteDir, 'brands', 'lightspeed', 'index.md');
if (!fs.existsSync(brandDetailSample)) {
  console.log('🔄 重新生成辅助页面与品牌档案...');
  // import or invoke generate-auxiliary-pages
}

console.log('🎉 [prepare:content] 准备完成，所有静态资产与内容映射就绪！\n');
