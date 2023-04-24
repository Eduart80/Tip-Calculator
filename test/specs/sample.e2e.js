const { expect } = require('chai')
const ElemPage = require('../calculator/elemPage')


describe('Test one', () => {
    beforeEach(async () => {
        //await ElemPage.open()
        await browser.url('https://eduart80.github.io/Tip-Calculator/')
        await browser.pause(2000)
    })
    it('enter amount 324 with 15%', async () => {
        const findEl = await ElemPage.entryField
        await findEl.click()
        await findEl.setValue('324')
        const click15 = await ElemPage.fifteen
        await click15.click()

        const tipAm = await ElemPage.tipAmount
        expect(await tipAm.getText()).to.be.eq('$48.60')
    })
    it('enter amount 509 with 17.5%', async() => {
        const findEl = await ElemPage.entryField
        await findEl.click()
        await findEl.setValue('509')
        const btn17 = await ElemPage.seventeen
        await btn17.click()
        
        const tipTotal = await ElemPage.total
        expect(await tipTotal.getText()).to.be.eq('$598.08')
    })
    it('enter amount 123 with 20%', async() => {
        const findEl = await ElemPage.entryField
        await findEl.click()
        await findEl.setValue('123')
        const btn17 = await ElemPage.twenty
        await btn17.click()
        
        const tipTotal = await ElemPage.total
        expect(await tipTotal.getText()).to.be.eq('$147.60')
    })
    it('enter amount 456 with costum of 9%', async() => {
        const findEl = await ElemPage.entryField
        await findEl.click()
        await findEl.setValue('456')
        const enterCostum = await ElemPage.costum
        await enterCostum.click()
        await enterCostum.setValue('9')
        const calc = await ElemPage.calc
        await calc.click()
        
        const tipTotal = await ElemPage.total
        expect(await tipTotal.getText()).to.be.eq('$497.04')
    })
})
