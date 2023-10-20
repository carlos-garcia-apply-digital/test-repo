describe('Web Browser Access', () => {
    before('Skip tutorial', async() => {
        await $('//*[@text="SKIP"]').click();
    })
    it('Access external link anf verify content in the browser', async() => {
        // click nav icon
        await $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]').click();

        //Click FB link
        await $('//*[@text="Like us on Facebook"]').click();

        //get current context
        console.log(await driver.getContext());
        
        await driver.pause(5000);
        //get all the contexts
        console.log(await driver.getContexts());

        //switch to webview chrome context
        await driver.switchContext('WEBVIEW_chrome')

        //assert the cover image is displayed
        await expect(await $("//*[@id='login_popup_cta_form']")).toBeDisplayed();

        //switch back to app
        await driver.switchContext('NATIVE_APP');
        await driver.back();

        await $('//*[@text="Notes"]').click();
        await expect($('//*[@text="Add note"]')).toBeDisplayed();
    })
})