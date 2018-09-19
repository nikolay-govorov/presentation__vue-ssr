const fs = require('fs');
const util = require('util');
const puppeteer = require('puppeteer');

const page = puppeteer;

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    const content = await util.promisify(fs.readFile)('index.html');

    await page.content(content);
    await page.pdf({ path: 'presentation.pdf' });

    browser.close();
})();

