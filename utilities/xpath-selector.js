const { Selector } = require('testcafe');

const getElementsByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null);
    const items = [];

    let item = iterator.iterateNext();

    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }

    return items;
});

const XPathSelector = (xpath) => {
    return Selector(getElementsByXPath(xpath));
}

module.exports = {
    XPathSelector
}
