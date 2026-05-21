import { copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distDir = join(__dirname, '..', 'dist');

const routes = [
  '/music',
  '/beat-store',
  '/shop',
  '/contact',
];

const indexHtml = readFileSync(join(distDir, 'index.html'), 'utf-8');

routes.forEach(route => {
  const dirPath = join(distDir, route.slice(1));
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
  writeFileSync(join(dirPath, 'index.html'), indexHtml);
  console.log(`Created ${route}/index.html`);
});

console.log('Static routes generated successfully!');
