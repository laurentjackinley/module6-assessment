
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
})

test('The draw button show the list', async () => {
    await driver.findElement(By.id('draw')).click()
    const choicesSPart = await driver.findElement(By.id('choices'))
    const displayed = await choicesSPart.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
})

test('Show that Add-duo works', async () => {
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.css('.bot-btn')).click()
    const addPart = await driver.findElement(By.id('player-duo'))
    const displayed = await addPart.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(5000)
})

