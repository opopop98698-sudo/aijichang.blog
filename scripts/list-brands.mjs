import fs from 'node:fs';
const brands = JSON.parse(fs.readFileSync('data/public/brands.json', 'utf8'));
console.log('Total Brands:', brands.length);
brands.forEach((b, i) => {
  const s = b.speedtestImage ? '[⚡测速实测图]' : '            ';
  const u = b.unlockImages ? '[🔓实测解锁图]' : '            ';
  console.log(`${(i+1).toString().padStart(2)}. ${b.id.padEnd(14)} ${b.name.padEnd(10)} ${s} ${u} ¥${b.startingPriceMonthly.toFixed(2)}/月  ${b.categoryTag}`);
});
