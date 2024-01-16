const Vehicle = require("./vehicle");

class Car extends Vehicle {
  constructor(model, color, brand) {
    super(model, color, "Car");
    this.brand = brand;
  }
  drive() {
    console.log(`Driving my ${this.brand} car!`);
  }
}
module.exports = Car;
