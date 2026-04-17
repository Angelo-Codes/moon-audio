const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.mp3':  'audio/mpeg',
  '.mp4':  'video/mp4',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.svg':  'image/svg+xml',
  '.webmanifest': 'application/manifest+json',
};

http.createServer((req, res) => {
  let urlPath = req.url.split('?')[0];
  
  // Default to index page for known routes
  const routes = ['/', '/web-extension-addon/real-time-demo', '/web-extension-addon', '/plans-and-pricing', '/company/about', '/company/contact'];
  if (routes.includes(urlPath) || routes.includes(urlPath + '/')) {
    if (urlPath === '/' ) {
      urlPath = '/web-extension-addon/real-time-demo/index.html';
    } else {
      urlPath = urlPath.replace(/\/$/, '') + '/index.html';
    }
  }

  let filePath = path.join(ROOT, urlPath);

  // Try adding index.html if directory
  if (!path.extname(filePath)) {
    filePath += '/index.html';
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found: ' + urlPath);
      return;
    }
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => {
});
