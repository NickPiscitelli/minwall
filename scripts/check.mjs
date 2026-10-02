// CI sanity checks for the single-file app: script compiles, externals are pinned, required markup exists.
import { readFileSync } from 'node:fs';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const fail = (msg) => { console.error('✗ ' + msg); process.exitCode = 1; };
const ok = (msg) => console.log('✓ ' + msg);

const app = html.match(/<script id="app">([\s\S]*?)<\/script>/);
if (!app) fail('inline <script id="app"> not found');
else {
  try { new Function(app[1]); ok(`app script compiles (${(app[1].length / 1024).toFixed(0)} KB)`); }
  catch (e) { fail('app script syntax error: ' + e.message); }
}

const srcs = [...html.matchAll(/<script[^>]+src="([^"]+)"/g)].map(m => m[1]);
for (const src of srcs) {
  if (!/^https:\/\/cdn\.jsdelivr\.net\/npm\/[\w-]+@\d+\.\d+\.\d+\//.test(src)) fail('external script is not a pinned jsDelivr URL: ' + src);
  else ok('pinned dependency ' + src.split('/npm/')[1].split('/')[0]);
}

for (const id of ['cv', 'panel', 'scrub', 'play', 'saveVid', 'savePng', 'busy', 'toast']) {
  if (!html.includes(`id="${id}"`)) fail(`missing element #${id}`);
}
if (!/<title>[^<]+<\/title>/.test(html)) fail('missing <title>');
if (!html.includes('og:image')) fail('missing og:image meta');
if (!process.exitCode) ok('required elements and meta present');
