import puppeteer from 'puppeteer';

(async () => {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    console.log('browser');

    const page = await browser.newPage();
    console.log('page ok')

    await page.goto('https://google.com/')
    console.log('site ok')
    // Set screen size
    await page.setViewport({width: 1080, height: 1024});

    //Cookie ok
    const cookieOKselector = '#L2AGLb'
    await page.waitForSelector(cookieOKselector)
    await page.click(cookieOKselector)

    //Type in searchfield
    await page.type('.gLFyf', 'puppeteer')

    //take screeshot
    await page.screenshot({
        path: 'screenshot.png'
    })
    console.log('img ok')
  
  
  })().catch(err => {
    console.log(err.message)
  });