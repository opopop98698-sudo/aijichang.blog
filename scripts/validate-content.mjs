import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const siteDir = path.join(rootDir, 'site');

console.log('📝 [validate:content] 开始 9 大主入口字数、标题与链接规范校验...\n');

const HUBS = [
  { name: '首页 (/)', path: 'index.md', expectedH1: 'AI机场' },
  { name: '机场推荐 (/recommend/)', path: 'recommend/index.md', expectedH1: '机场推荐' },
  { name: 'AI机场 (/ai/)', path: 'ai/index.md', expectedH1: 'AI机场' },
  { name: '流媒体机场 (/streaming/)', path: 'streaming/index.md', expectedH1: '流媒体机场' },
  { name: '免费机场 (/free/)', path: 'free/index.md', expectedH1: '免费机场' },
  { name: '节点地区 (/regions/)', path: 'regions/index.md', expectedH1: '机场节点地区' },
  { name: 'AI使用指南 (/guides/)', path: 'guides/index.md', expectedH1: 'AI使用指南' },
  { name: '解锁实测 (/tests/)', path: 'tests/index.md', expectedH1: 'AI与流媒体解锁实测' },
  { name: '优惠情报 (/deals/)', path: 'deals/index.md', expectedH1: '机场优惠情报' }
];

let hasErrors = false;

// Helper to count pure Chinese characters
function countChinese(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Strip frontmatter
  let text = content.replace(/^---[\s\S]*?---\s*/, '');
  // Strip code blocks
  text = text.replace(/```[\s\S]*?```/g, '');
  // Strip inline code
  text = text.replace(/`[^`]+`/g, '');
  // Strip markdown images and links formatting, keeping link text
  text = text.replace(/!\[.*?\]\(.*?\)/g, '');
  text = text.replace(/\[(.*?)\]\(.*?\)/g, '$1');
  // Strip HTML / Vue tags
  text = text.replace(/<\/?[a-zA-Z][^>]*>/g, '');
  // Strip remaining URLs
  text = text.replace(/https?:\/\/[^\s)]+/g, '');

  const chineseMatches = text.match(/[\u4e00-\u9fa5]/g);
  return {
    rawLength: content.length,
    chineseCount: chineseMatches ? chineseMatches.length : 0,
    text
  };
}

console.log('----------------------------------------------------');
console.log(' 9 大主入口中文字符数严格核查 (7,000 ~ 15,000 字)');
console.log('----------------------------------------------------');

for (const hub of HUBS) {
  const fullPath = path.join(siteDir, hub.path);
  if (!fs.existsSync(fullPath)) {
    console.error(`❌ 文件缺失: ${hub.name} -> ${hub.path}`);
    hasErrors = true;
    continue;
  }

  const { chineseCount } = countChinese(fullPath);
  const isCompliant = chineseCount >= 7000 && chineseCount <= 15000;

  if (isCompliant) {
    console.log(`✅ 达标 | ${hub.name.padEnd(20)} | 中文汉字: ${chineseCount.toString().padStart(5)} 字`);
  } else {
    console.error(`❌ 不达标 | ${hub.name.padEnd(20)} | 中文汉字: ${chineseCount.toString().padStart(5)} 字 (需 7000~15000)`);
    hasErrors = true;
  }

  // Check H1
  const content = fs.readFileSync(fullPath, 'utf8');
  const h1Match = content.match(/^#\s+(.+)$/m);
  if (!h1Match) {
    console.error(`❌ 未找到 # 一级标题: ${hub.name}`);
    hasErrors = true;
  } else if (!h1Match[1].includes(hub.expectedH1)) {
    console.warn(`⚠️ H1 建议规范核对: ${hub.name} -> "${h1Match[1]}" (预期包含 "${hub.expectedH1}")`);
  }
}

console.log('----------------------------------------------------\n');

// 2. Validate internal links in all markdown files
console.log('🔗 正在校验站内超链接连通性...');

function getAllMarkdownFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name !== '.vitepress' && entry.name !== 'public') {
        files.push(...getAllMarkdownFiles(full));
      }
    } else if (entry.name.endsWith('.md')) {
      files.push(full);
    }
  }
  return files;
}

const allMdFiles = getAllMarkdownFiles(siteDir);
let checkedLinksCount = 0;
let brokenLinksCount = 0;

for (const file of allMdFiles) {
  const content = fs.readFileSync(file, 'utf8');

  // 1. Check Images ![alt](url)
  const imgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
  let imgMatch;
  while ((imgMatch = imgRegex.exec(content)) !== null) {
    const src = imgMatch[2].trim();
    if (src.startsWith('http://') || src.startsWith('https://')) continue;
    if (src.startsWith('/')) {
      const publicPath = path.join(siteDir, 'public', src.replace(/^\//, ''));
      if (!fs.existsSync(publicPath)) {
        console.warn(`⚠️ 疑似图片资产缺失: ${src} in ${path.relative(rootDir, file)}`);
        brokenLinksCount++;
      }
    }
  }

  // 2. Check Hyperlinks (not preceded by !)
  // Replace all image tags first to avoid matching image alt text
  const textWithoutImages = content.replace(/!\[[^\]]*\]\([^)]+\)/g, '');
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  while ((match = linkRegex.exec(textWithoutImages)) !== null) {
    const href = match[2].trim();
    // Ignore external or anchors only
    if (href.startsWith('http://') || href.startsWith('https://')) {
      continue;
    }
    if (href.startsWith('#')) continue;

    checkedLinksCount++;
    // Internal link check
    let target = href.split('#')[0];
    if (!target) continue;

    let targetFsPath;
    if (target.startsWith('/')) {
      if (target.endsWith('/')) {
        targetFsPath = path.join(siteDir, target, 'index.md');
      } else if (target.endsWith('.html')) {
        targetFsPath = path.join(siteDir, target.replace(/\.html$/, '.md'));
      } else {
        const asDir = path.join(siteDir, target, 'index.md');
        const asFile = path.join(siteDir, `${target}.md`);
        targetFsPath = fs.existsSync(asDir) ? asDir : asFile;
      }
    } else {
      const currentDir = path.dirname(file);
      targetFsPath = path.resolve(currentDir, target);
      if (fs.existsSync(targetFsPath) && fs.statSync(targetFsPath).isDirectory()) {
        targetFsPath = path.join(targetFsPath, 'index.md');
      }
    }

    if (!fs.existsSync(targetFsPath)) {
      console.warn(`⚠️ 疑似站内悬挂链接: [${match[1]}](${href}) in ${path.relative(rootDir, file)}`);
      brokenLinksCount++;
    }
  }
}

console.log(`✅ 站内链接校验完成: 检查了 ${checkedLinksCount} 个内部链接，悬挂预警: ${brokenLinksCount} 个`);

if (hasErrors) {
  console.error('\n❌ 内容与字数核验存在未通过项，请对照修复！');
  process.exit(1);
}

console.log('\n🎉 [validate:content] 9 大主入口深度字数与规范校验全部通过！\n');
