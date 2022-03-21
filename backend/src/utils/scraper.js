const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless:false, slowMo:250});
  const page = await browser.newPage();
  await page.setCookie({
    'name':'li_at',
    'value':'AQEDATqcbSkD_2f3AAABf6u8O5kAAAF_z8i_mU0APXNQ2TKLR8B7uO6ofxO6x8PiwZTO3ECGbSx7U_j42sXeNxEyHocWiDBITq_nOBtXDfpnpUrVVCnxaJC4mUG8Fp_EBhBMGpkxUgh0VBW0ch_M9IWL',
    'domain':'.www.linkedin.com'
  })
  const { width, height } = require("screenz");
  await page.setViewport( { 'width' : width, 'height' : height } );
  await page.goto('https://linkedin.com');

  await page.waitForTimeout(2000);

  // await page.click("#global-nav-search > div > button");
  // await page.waitForTimeout(2000);


  const newInputValue = "stealth";
  await page.focus('#global-nav-typeahead > input');
  await page.evaluate(val => document.querySelector('#global-nav-typeahead > input').value = val, newInputValue);
  await page.waitForTimeout(2000);

  page.keyboard.press('Enter');
  await page.waitForTimeout(3000);

  await page.click("#search-reusables__filters-bar > ul > li:nth-child(1) > button");
  await page.waitForTimeout(3000);
  await page.click("#search-reusables__filters-bar > ul > li:nth-child(4)");
  await page.waitForTimeout(2000);

  await page.click('#geoUrn-101620260')
  await page.waitForTimeout(2000);
  
  await page.click("button[data-test-reusables-filter-apply-button='true']");




  // await page.waitForSelector('.reusable-search-filters-buttons display-flex justify-flex-end mt3 ph2')

  // const selectors = await page.$$('.reusable-search-filters-buttons display-flex justify-flex-end mt3 ph2')
  // await selectors[1].click()
  
  // await browser.close();
})();



