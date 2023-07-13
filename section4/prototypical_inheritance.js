function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape(color) {
    this.color = color;
}
Shape.prototype.duplicate = function () {
    console.log("duplicate");
};

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}
extend(Circle, Shape);
Circle.prototype.draw = function () {
    console.log("draw");
};

function Square(size) {
    this.size = size;
}
extend(Square, Shape);
const c1 = new Circle(10, "red");
console.log(c1);


Square.prototype.duplicate = function() {
    console.log('square duplicate');
}
Circle.prototype.duplicate = function() {
    console.log('circle duplicate');
}

const shapes = [
    new Circle(),
    new Square()
];

for(let shape of shapes) {
    shape.duplicate();
}