class Vehicle {
  constructor(model, color, type) {
    this.model = model;
    this.color = color;
    this.type = type;
  }

  display() {
    console.log(`This is a ${this.color} ${this.model} ${this.type}.`);
  }
}
module.exports = Vehicle;
