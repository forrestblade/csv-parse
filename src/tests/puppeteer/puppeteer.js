const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:8080')
  await page.screenshot({ path: 'initialState.png' })

  const title = await page.$eval('p', e => e.innerHTML)
  title === 'React Seed' && console.log('test passed')

  console.log(await page.$$eval('.counter', e => e.innerHTML))

  async function incrementButton () {
    await page.$eval('button.increment', button => button.click())
    await page.screenshot({ path: 'increment.png' })
  }

  async function decrementButton () {
    await page.$eval('button.decrement', button => button.click())
    await page.screenshot({ path: 'decrement.png' })
  }

  await incrementButton()
  await decrementButton()
  await decrementButton()
  await browser.close()
})()
