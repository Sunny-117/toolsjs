Element.prototype.eleIndex = function () {
    var index = 0,
        node = this;
    while (node = node.previousSibling) {
        if (node.nodeType == 1) {
            index++;
        }
    }
    return index;
}