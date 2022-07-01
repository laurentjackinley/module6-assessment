
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
    const drawBtn = await driver.findElement(By.id('choices'))
    await drawBtn.click()
    await driver.sleep(10000)
})

test('Show that Add-duo works', async () => {
    const addBtn = await driver.findElement(By.id('player-duo'))
    await addBtn.click()
    await driver.sleep(5000)
})