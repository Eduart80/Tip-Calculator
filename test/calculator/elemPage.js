const Page = require("./page")


class elements extends Page {
    //bill entry
    get entryField() {
        return $('#billAmount')
    }
    // button 15%
    get fifteen() {
        return $('#btn15')
    }
    // button 17.5%
    get seventeen() {
        return $('#btn17')
    }
    // button 20%
    get twenty() {
        return $('#btn20')
    }
    // custom tip
    get costum() {
        return $('#customTip')
    }
    //button calculate
    get calc() {
        return $('#btncalculate')
    }
    // tip amoun %
    get tipAmount() {
        return $('#tipAmount')
    }
    // total to pay
    get total() {
        return $('#total')
    }
    // clear button
    get clearBtn() {
        return $('#btnclear')
    }
    // web url
    open() {
        return super.open()
    }
}
module.exports = new elements()