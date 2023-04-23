const Page = require('../calculator/page')


describe.only('Test one', () => {
    it('enter amount 324', async () => {
        await browser.url('https://yahoo.com')

        const findEl = await $('.billAmount')
        await findEl.click()
        await sendValue('324')

        const click15 = await $('.btn15')
        await click15.click()

        browser.pause(5000)

    })
})