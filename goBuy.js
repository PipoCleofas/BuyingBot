const puppeteer = require('puppeteer');

async function run (){

  const browser = await puppeteer.launch({ headless: false }); 
  const page = await browser.newPage();

  await page.goto('https://fill.dev/form/credit-card-simple');

  await page.setViewport({ width: 1080, height: 1024 });

  const selector = 'input[id="cc-name"]'
  await page.waitForSelector(selector);

  await page.type(selector, '09610181202');

  await page.select('select[id="cc-type"]', 'visa')
  
  await page.type('input[id="cc-number"]','5489916689619647')

  await page.type('input[id="cc-csc"]','361')

  await page.select('select[id="cc-exp-month"]', '3')

  await page.select('select[id="cc-exp-month"]', '3')

  await page.select('select[id="cc-exp-year"]', '2028')

  await page.click('button[class="btn btn-primary"]')

  //await page.close()
}

run()


