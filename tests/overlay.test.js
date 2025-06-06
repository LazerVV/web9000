const puppeteer = require('puppeteer');
const path = require('path');
const delay = ms => new Promise(r => setTimeout(r, ms));
(async () => {
  const browser = await puppeteer.launch({headless:true, args:['--no-sandbox','--disable-setuid-sandbox']});
  const page = await browser.newPage();
  const filePath = 'file://' + path.resolve(__dirname, '..', 'index.html');
  await page.goto(filePath);
  await page.click('.new-post');
  await page.waitForSelector('#submissionForm', {visible: true});
  await page.click('.header h1');
  await delay(500);
  const display1 = await page.$eval('#submissionForm', el => getComputedStyle(el).display);
  if(display1 !== 'none') {
    await browser.close();
    throw new Error('submission form should hide when empty');
  }
  await page.click('.new-post');
  await page.type('#mdText', 'a');
  await page.click('.header h1');
  await delay(500);
  const overlayVisible1 = await page.$eval('#discardOverlay', el => getComputedStyle(el).display !== 'none');
  if(!overlayVisible1) {
    await browser.close();
    throw new Error('discard overlay did not show');
  }
  const buttons1 = await page.$$('#discardOverlay button');
  await buttons1[1].click();
  await page.waitForSelector('#discardOverlay', {hidden: true});
  const stillVisible = await page.$eval('#submissionForm', el => getComputedStyle(el).display !== 'none');
  if(!stillVisible) {
    await browser.close();
    throw new Error('form should stay visible when canceling discard');
  }
  await page.click('.header h1');
  await delay(500);
  const overlayVisible2 = await page.$eval('#discardOverlay', el => getComputedStyle(el).display !== 'none');
  if(!overlayVisible2) {
    await browser.close();
    throw new Error('discard overlay did not show on second attempt');
  }
  const buttons2 = await page.$$('#discardOverlay button');
  await buttons2[0].click();
  await page.waitForSelector('#discardOverlay', {hidden: true});
  const hidden = await page.$eval('#submissionForm', el => getComputedStyle(el).display === 'none');
  if(!hidden) {
    await browser.close();
    throw new Error('form should hide when confirming discard');
  }
  await browser.close();
  console.log('overlay test passed');
})();
