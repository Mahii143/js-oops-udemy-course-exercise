class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    draw() {
        console.log('draw');
    }
    static parse(str) {
        const { radius } = JSON.parse(str);
        return new Circle(radius);
    }
}

const c1 = Circle.parse('{"radius":1}');
console.log(c1);


//Private properties using Symbols
const _size = Symbol();

class Square {
    constructor(size) {
        this[_size] = size;
    }
}

const sq = new Square(100);
console.log(sq[_size]);
console.log(sq);
console.log(Object.getOwnPropertySymbols(sq));


const _angles = new WeakMap();
const _draw = new WeakMap();
const _draw2 = new WeakMap();

class Polygon {
    constructor(angles) {
        _angles.set(this, angles);

        _draw.set(this, () => {
            console.log('Draw polygon using arrow function', this);
        });

        _draw2.set(this, function() {
            console.log('Draw polygon using normal function', this);
        });
    }
    getAngles() {
        return _angles.get(this);
    }
    draw() {
        _draw.get(this)();
        _draw2.get(this)();
    }

}
const poly = new Polygon(100);
poly.draw();
console.log(poly.getAngles());