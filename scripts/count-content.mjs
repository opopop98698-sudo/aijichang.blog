import fs from 'fs';
import path from 'path';

// Clean text: strip frontmatter, code blocks, html tags, vue components, repetitive markdown symbols
export function cleanChineseContent(rawMarkdown) {
  let text = rawMarkdown;

  // 1. Remove frontmatter
  text = text.replace(/^---[\s\S]*?---/, '');

  // 2. Remove fenced code blocks
  text = text.replace(/```[\s\S]*?```/g, '');

  // 3. Remove inline code
  text = text.replace(/`[^`]+`/g, '');

  // 4. Remove Vue components / HTML tags (only valid tag names)
  text = text.replace(/<\/?[a-zA-Z][^>]*>/g, '');

  // 5. Remove markdown links [text](url) -> keep text
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');

  // 6. Remove markdown image tags ![alt](url)
  text = text.replace(/!\[[^\]]*\]\([^)]+\)/g, '');

  // 7. Remove markdown headers, list bullets, blockquotes
  text = text.replace(/^[#>\-*+\d.]+\s+/gm, '');

  // 8. Count valid Chinese characters (Unicode \u4e00-\u9fa5)
  const chineseMatches = text.match(/[\u4e00-\u9fa5]/g);
  const chineseCount = chineseMatches ? chineseMatches.length : 0;

  // Total non-whitespace characters
  const nonWsMatches = text.match(/\S/g);
  const totalNonWsCount = nonWsMatches ? nonWsMatches.length : 0;

  return {
    chineseCount,
    totalNonWsCount,
    rawLength: rawMarkdown.length
  };
}

const targetFiles = [
  { name: '首页 (/)', path: 'site/index.md' },
  { name: '机场推荐 (/recommend/)', path: 'site/recommend/index.md' },
  { name: 'AI机场 (/ai/)', path: 'site/ai/index.md' },
  { name: '流媒体机场 (/streaming/)', path: 'site/streaming/index.md' },
  { name: '免费机场 (/free/)', path: 'site/free/index.md' },
  { name: '节点地区 (/regions/)', path: 'site/regions/index.md' },
  { name: 'AI使用指南 (/guides/)', path: 'site/guides/index.md' },
  { name: '解锁实测 (/tests/)', path: 'site/tests/index.md' },
  { name: '优惠情报 (/deals/)', path: 'site/deals/index.md' }
];

console.log('====================================================');
console.log(' aijichang.blog 9大主入口中文正文字符统计核验');
console.log(' 统计规则：排除代码、组件、HTML标签、链接URL与格式标记');
console.log(' 目标深度：每篇有效中文字符 7,000 ~ 15,000 字');
console.log('====================================================');

let allPass = true;

targetFiles.forEach(tf => {
  const fullPath = path.resolve(tf.path);
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ [未找到文件] ${tf.name}: ${tf.path}`);
    allPass = false;
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const res = cleanChineseContent(content);
  const status = res.chineseCount >= 7000 ? '✅ 达标' : '⚠️ 需补充深度';
  if (res.chineseCount < 7000) allPass = false;

  console.log(`${status} | ${tf.name.padEnd(20)} | 中文正文: ${res.chineseCount.toString().padStart(6)} 字 | 纯文本: ${res.totalNonWsCount.toString().padStart(6)} 字符 | 文件原始: ${res.rawLength.toString().padStart(6)} 字节`);
});

console.log('====================================================');
if (allPass) {
  console.log('🎉 所有已检查的 9 大主入口均已达成 7,000~15,000 字深度要求！');
} else {
  console.log('💡 提示：部分页面尚未生成或字数不足 7000 中文字符，请继续推进编写。');
}
