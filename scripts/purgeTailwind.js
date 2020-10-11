const { PurgeCSS } = require('purgecss');
const fs = require('fs');
const clientStats = require('../artifacts/client-stats.json');

async function purgeTailwindMainCss() {
  process.chdir('./scripts');
  const { assetsByChunkName } = clientStats;
  const mainCssFile = assetsByChunkName['main'].find(files =>
    files.endsWith('.css')
  );

  if (!mainCssFile) {
    console.warn('[purgeTailwind] No main css file found');
    return;
  }

  const purgeCSSResult = await new PurgeCSS().purge({
    content: ['../dist/**/*.html'],
    css: [`../dist/${mainCssFile}`],
    defaultExtractor: content => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
  });

  const [purgedMainCss] = purgeCSSResult;

  if (purgedMainCss) {
    fs.writeFile(`../dist/${mainCssFile}`, purgedMainCss.css, err => {
      if (err) {
        console.error("Couldn't create main file");
      }
    });
  }
}

purgeTailwindMainCss();
