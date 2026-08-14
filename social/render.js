const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const templatesDir = path.join(__dirname, 'templates');
const exportsDir = path.join(__dirname, 'exports');
fs.mkdirSync(exportsDir, { recursive: true });

const targets = [
  { file: 'flow-square.html', out: 'flow-square.png', width: 1080, height: 1080 },
  { file: 'flow-banner.html', out: 'flow-banner.png', width: 1200, height: 630 },
  { file: 'blueprint-square.html', out: 'blueprint-square.png', width: 1080, height: 1080 },
  { file: 'blueprint-banner.html', out: 'blueprint-banner.png', width: 1200, height: 630 },
  { file: 'ductile-square.html', out: 'ductile-square.png', width: 1080, height: 1080 },
  { file: 'ductile-banner.html', out: 'ductile-banner.png', width: 1200, height: 630 },
];

(async () => {
  const browser = await chromium.launch();

  for (const t of targets) {
    const page = await browser.newPage({ viewport: { width: t.width, height: t.height } });
    const filePath = 'file:///' + path.resolve(templatesDir, t.file).split('\\').join('/');
    await page.goto(filePath);
    await page.waitForTimeout(150);
    const outPath = path.join(exportsDir, t.out);
    await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: t.width, height: t.height } });
    await page.close();

    const size = fs.statSync(outPath).size;
    console.log(`${t.out}: ${size} bytes`);
  }

  await browser.close();
})();
