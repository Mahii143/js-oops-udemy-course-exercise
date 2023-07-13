// canEat canWalk canSwim
// person - canEat, canWalk
// goldfish - canEat, canSwim
function mixin(Obj, ...sources) {
    Object.assign(Obj.prototype, ...sources);
}

let canEat = {
    eat: function() {
        console.log('eating...');
    }
};
let canWalk = {
    walk: function() {
        console.log('walking...');
    }
};
let canSwim = {
    swim: function() {
        console.log('swimming...');
    }
};

function Person() {
    this.hunger = 5;
}

function GoldFish() {
    this.hunger = 5;
}

// explicit assigning
// Object.assign(Person.prototype, canEat, canWalk); 
// Object.assign(GoldFish.prototype, canEat, canSwim);

mixin(Person, canEat, canWalk);
mixin(GoldFish, canEat, canSwim);


const person = new Person();
const goldfish = new GoldFish();

console.log(person);
console.log(goldfish);