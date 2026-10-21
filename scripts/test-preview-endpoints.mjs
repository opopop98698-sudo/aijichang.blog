const urls = [
  'http://localhost:4173/',
  'http://localhost:4173/brands/',
  'http://localhost:4173/brands/lightspeed/',
  'http://localhost:4173/brands/flycat/',
  'http://localhost:4173/brands/breezenet/',
  'http://localhost:4173/reviews/lightspeed/',
  'http://localhost:4173/search/',
  'http://localhost:4173/pagefind/pagefind.js',
  'http://localhost:4173/sitemap.xml',
  'http://localhost:4173/robots.txt',
  'http://localhost:4173/speedtests/' + encodeURIComponent('光速云-节点测速实测.png'),
  'http://localhost:4173/unlocks/lightspeed/photo_2026-08-19_12-13-01.jpg'
];

async function check() {
  for (const u of urls) {
    try {
      const res = await fetch(u);
      console.log(`[${res.status}] ${u} (Length: ${res.headers.get('content-length') || 'chunked'})`);
    } catch (e) {
      console.error(`[ERR] ${u}: ${e.message}`);
    }
  }
}
check();
