/**
 * @constructor_function for object @Cirle
 * @param {number} radius  
 */
function Circle(radius) {
  let defaultLocation = { x: 0, y: 0 };
  this.radius = radius;
}

/**
 * adding getter and setter for defaultlocation private field
 */
Object.defineProperty(Circle, 'defaultLocation', {
  get: function () {
    return defaultLocation;
  },
  set: function (values) {
    if (!values.x || !values.y) {
      throw new Error("Invalid values");
    }
    defaultLocation = values;
  },
});

/**
 * logs only draw
 */
Circle.prototype.draw = function () {
  console.log("Draw");
};
