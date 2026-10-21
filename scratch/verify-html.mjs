import fs from 'node:fs';

const htmlHome = fs.readFileSync('site/.vitepress/dist/index.html', 'utf8');
const canHome = htmlHome.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
console.log('Homepage Canonical:', canHome ? canHome[1] : 'MISSING');
console.log('Homepage WebSite Schema:', htmlHome.includes('"@type":"WebSite"'));
console.log('Homepage SearchAction:', htmlHome.includes('"@type":"SearchAction"'));

const htmlReview = fs.readFileSync('site/.vitepress/dist/reviews/index.html', 'utf8');
const canReview = htmlReview.match(/<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
console.log('\n/reviews/ Canonical:', canReview ? canReview[1] : 'MISSING');
console.log('/reviews/ BreadcrumbList:', htmlReview.includes('"@type":"BreadcrumbList"'));
