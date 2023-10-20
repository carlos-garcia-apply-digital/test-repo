describe('iOS Webview', () => {
    it('Working with dynamic webview', async() => {
        await $('~Webview').click();

        // await driver.getContext();

        // await driver.pause(10000);
        // await driver.getContexts();
        // await driver.pause(10000);
        // await driver.getContexts();
        // await driver.pause(10000);
        // await driver.getContexts();

        //wait until you get multiple context
        await driver.waitUntil(async() => {
            const contexts = await driver.getContexts();
            return contexts.length > 1;
        }, {timeout: 60000, timeoutMsg: "Timed out waiting for another context"});

        const contexts = await driver.getContexts();

        await driver.switchContext(contexts[1]);

        const subtitleText = await $('.hero__subtitle');
        await expect(subtitleText).toHaveTextContaining('automation');

        // switch back to the native app
        await driver.switchContext('NATIVE_APP');
        await $('~Home').click();

        const webdriverText = await $('//*[@name="WEBDRIVER"]');
        await expect(webdriverText).toBeDisplayed();
    })
})