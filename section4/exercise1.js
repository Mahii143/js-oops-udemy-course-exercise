function extent(Child, Parent) {
    Child.prototype = new Parent();
    Child.prototype.constructor = Child;
}
function HtmlElement() {
    this.click = function () {
        console.log('clicked...');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focused...');
}


function HtmlSelectElement(array = []) {
    this.items = array;
    this.addItem = function (value) {
        this.items.push(value);
    }
    this.removeItem = function (value) {
        this.items = this.items.filter(n => n !== value);
    }
}

// HtmlSelectElement.prototype = new HtmlElement();
// HtmlSelectElement.prototype.constructor = HtmlSelectElement;

extent(HtmlSelectElement, HtmlElement);
