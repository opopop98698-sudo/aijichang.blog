import fs from 'node:fs';
import path from 'node:path';

const rootDir = process.cwd();
const dataDir = path.join(rootDir, 'data', 'public');

console.log('🔍 [validate:data] 开始脱敏公开数据集完整性与数据字典校验...');

const requiredFiles = [
  'brands.json',
  'plans.json',
  'offers.json',
  'links.json',
  'observations.json',
  'platforms.json',
  'products.json',
  'tasks.json',
  'regions.json',
  'changeLog.json'
];

let hasErrors = false;
const data = {};

for (const file of requiredFiles) {
  const filePath = path.join(dataDir, file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ 缺失关键数据文件: ${file}`);
    hasErrors = true;
    continue;
  }
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    data[file] = JSON.parse(raw);
    console.log(`✅ ${file.padEnd(20)} JSON 格式合法，记录数: ${Array.isArray(data[file]) ? data[file].length : Object.keys(data[file]).length}`);
  } catch (err) {
    console.error(`❌ 解析失败: ${file} - ${err.message}`);
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error('❌ 数据文件基础校验未通过！');
  process.exit(1);
}

// Check Referential Integrity
console.log('\n🔗 正在校验跨实体引用完整性与字段约束...');

const brandIds = new Set(data['brands.json'].map(b => b.id));
const linkIds = new Set(data['links.json'].map(l => l.id));
const platformIds = new Set(data['platforms.json'].map(p => p.id));

// 1. Brands validation
for (const b of data['brands.json']) {
  if (!b.id || !b.name || !b.lineType || typeof b.startingPriceMonthly !== 'number') {
    console.error(`❌ 品牌数据异常: [${b.id}] 缺少必填字段`);
    hasErrors = true;
  }
  if (b.linkId && !linkIds.has(b.linkId)) {
    console.error(`❌ 品牌 [${b.id}] 引用的 linkId [${b.linkId}] 不存在于 links.json 中`);
    hasErrors = true;
  }
}

// 2. Plans validation
for (const p of data['plans.json']) {
  if (!p.id || !p.name || typeof p.actualPayment !== 'number' || typeof p.effectiveMonthlyCost !== 'number') {
    console.error(`❌ 套餐数据异常: [${p.id}] 价格字段缺失或非数字`);
    hasErrors = true;
  }
  // Check if plan belongs to a valid brand
  const matchedBrand = Array.from(brandIds).find(bId => p.id.startsWith(bId));
  if (!matchedBrand) {
    console.warn(`⚠️ 套餐 [${p.id}] 未能精准前缀匹配已收录的 12 家品牌`);
  }
}

// 3. Offers validation
for (const o of data['offers.json']) {
  if (!o.id || !o.couponCode || !brandIds.has(o.brandId)) {
    console.error(`❌ 优惠码数据异常: [${o.id}] brandId [${o.brandId}] 不存在`);
    hasErrors = true;
  }
}

// 4. Observations validation
for (const obs of data['observations.json']) {
  if (!obs.id || !brandIds.has(obs.brandId)) {
    console.error(`❌ 评测观测数据异常: [${obs.id}] brandId [${obs.brandId}] 不存在`);
    hasErrors = true;
  }
  if (!platformIds.has(obs.platformId)) {
    console.warn(`⚠️ 评测观测 [${obs.id}] 目标平台 [${obs.platformId}] 未在 platforms.json 中`);
  }
  const outcome = obs.result || obs.status;
  if (!['success', 'partial', 'failure'].includes(outcome)) {
    console.error(`❌ 评测观测 [${obs.id}] 状态 [${outcome}] 非法，必须为 success/partial/failure`);
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error('\n❌ 引用完整性校验失败，请修复数据！');
  process.exit(1);
}

console.log('🎉 [validate:data] 数据字典与跨表引用校验全部通过！\n');
