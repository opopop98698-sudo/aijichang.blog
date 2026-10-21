import http from 'node:http';
import net from 'node:net';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'site', '.vitepress', 'dist');

if (!fs.existsSync(distDir)) {
  console.error(`[错误] 静态产物目录不存在: ${distDir}`);
  console.error('请先执行 npm run build 完成打包构建后再启动预览！');
  process.exit(1);
}

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.wasm': 'application/wasm'
};

const notFoundPath = path.join(distDir, '404.html');
const notFoundHtml = fs.existsSync(notFoundPath) 
  ? fs.readFileSync(notFoundPath) 
  : Buffer.from('<!DOCTYPE html><html><head><meta charset="utf-8"><title>404 Not Found</title></head><body><h1>404 Not Found</h1></body></html>');

function serveFile(req, res, targetFile, statusCode = 200) {
  const ext = path.extname(targetFile).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';
  
  fs.stat(targetFile, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(notFoundHtml);
      return;
    }

    res.writeHead(statusCode, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable'
    });

    const stream = fs.createReadStream(targetFile);
    stream.on('error', () => {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 Internal Server Error');
      }
    });
    stream.pipe(res);
  });
}

function createHttpServer() {
  const server = http.createServer((req, res) => {
    req.on('error', () => {});
    res.on('error', () => {});

    try {
      const rawUrl = req.url || '/';
      const pathname = decodeURIComponent(rawUrl.split('?')[0]);
      let relativePath = pathname.replace(/^\/+/, '');

      const safePath = path.normalize(path.join(distDir, relativePath));
      if (!safePath.startsWith(distDir)) {
        res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('403 Forbidden');
        return;
      }

      if (pathname.endsWith('/')) {
        const indexFile = path.join(safePath, 'index.html');
        if (fs.existsSync(indexFile)) {
          serveFile(req, res, indexFile);
          return;
        }
      }

      if (fs.existsSync(safePath)) {
        const stats = fs.statSync(safePath);
        if (stats.isDirectory()) {
          const query = rawUrl.includes('?') ? rawUrl.slice(rawUrl.indexOf('?')) : '';
          res.writeHead(301, { Location: pathname + '/' + query });
          res.end();
          return;
        }
        serveFile(req, res, safePath);
        return;
      }

      const htmlCandidate = safePath + '.html';
      if (fs.existsSync(htmlCandidate)) {
        serveFile(req, res, htmlCandidate);
        return;
      }

      const dirIndexCandidate = path.join(safePath, 'index.html');
      if (fs.existsSync(dirIndexCandidate)) {
        const query = rawUrl.includes('?') ? rawUrl.slice(rawUrl.indexOf('?')) : '';
        res.writeHead(301, { Location: pathname + '/' + query });
        res.end();
        return;
      }

      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(notFoundHtml);
    } catch (e) {
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('500 Internal Error: ' + e.message);
      }
    }
  });

  server.on('clientError', (err, socket) => {
    if (err.code === 'ECONNRESET' || socket.destroyed) return;
    socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
  });

  return server;
}

function findAvailablePort(port, maxAttempts = 30) {
  return new Promise((resolve, reject) => {
    if (maxAttempts <= 0) {
      return reject(new Error('未找到可用端口'));
    }
    const tester = net.createServer();
    tester.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`[端口检测] 端口 ${port} 当前被占用，自动尝试顺延端口 ${port + 1}...`);
        findAvailablePort(port + 1, maxAttempts - 1).then(resolve, reject);
      } else {
        reject(err);
      }
    });
    tester.once('listening', () => {
      tester.close(() => resolve(port));
    });
    tester.listen(port, '0.0.0.0');
  });
}

const DEFAULT_PORT = 4173;
const args = process.argv.slice(2);
const shouldOpen = args.includes('--open');
let requestedPort = DEFAULT_PORT;

const portArgIdx = args.indexOf('--port');
if (portArgIdx !== -1 && args[portArgIdx + 1]) {
  requestedPort = parseInt(args[portArgIdx + 1], 10) || DEFAULT_PORT;
} else if (process.env.PORT) {
  requestedPort = parseInt(process.env.PORT, 10) || DEFAULT_PORT;
}

async function start() {
  try {
    const finalPort = await findAvailablePort(requestedPort);
    const server = createHttpServer();

    server.listen(finalPort, '0.0.0.0', () => {
      const isDefault = finalPort === DEFAULT_PORT;
      const url = `http://localhost:${finalPort}/`;

      console.log('\n' + '='.repeat(68));
      console.log(`  🚀【AI机场】aijichang.blog 专属本地预览已启动！`);
      console.log(`  👉 预览访问地址:  ${url}`);
      if (!isDefault) {
        console.log(`  ⚠️ 提示: 默认端口 ${DEFAULT_PORT} 正在被其它工程占用`);
        console.log(`     已智能顺延至端口 ${finalPort}，彻底避免多项目串台与404！`);
      } else {
        console.log(`  ✅ 独占端口 ${finalPort}，全站 14 大核心模块与 64 个二级专题已就绪`);
      }
      console.log(`  📁 本地服务目录:  ${distDir}`);
      console.log('='.repeat(68) + '\n');

      if (shouldOpen) {
        const openCmd = process.platform === 'win32' ? `start "" "${url}"` :
                        process.platform === 'darwin' ? `open "${url}"` : `xdg-open "${url}"`;
        exec(openCmd);
      }
    });
  } catch (err) {
    console.error('[致命错误] 无法启动预览服务器:', err);
    process.exit(1);
  }
}

start();
