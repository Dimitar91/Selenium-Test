const { Builder, By, Key, util } = require("selenium-webdriver");
const BROWSER = "firefox"
async function examle() {
    let driver = await new Builder().forBrowser(BROWSER).build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("agile manifesto ", Key.RETURN);
}
examle();