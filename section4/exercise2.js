function extend(Child, Parent) {
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
HtmlElement.prototype.render = function () {
}

function HtmlSelectElement(items = []) {
    this.items = items;
    this.addItem = function (value) {
        this.items.push(value);
    }
    this.removeItem = function (value) {
        this.items.splice(this.items.indexOf(value), 1);
    }
}

function HtmlImgElement(src = undefined) {
    this.src = src;
}

extend(HtmlSelectElement, HtmlElement);
extend(HtmlImgElement, HtmlElement);

HtmlSelectElement.prototype.render = function() {
    return '<select>' + this.items.map(item => `<option value="${item}">` + item + '</option>').join('') + '</select>';
}
HtmlImgElement.prototype.render = function() {
    return `<img src='${this.src}' alt=''/>`;
}

let elements = '';
const root = document.getElementById('root');
const ul = new HtmlSelectElement([1,2,3,4,5]);
elements += ul.render();

const img = new HtmlImgElement('https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_02_thum-1.jpg');
elements += img.render();

root.innerHTML = elements;
