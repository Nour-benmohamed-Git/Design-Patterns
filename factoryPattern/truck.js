const Vehicle = require("./vehicle");

class Truck extends Vehicle {
  constructor(model, color, payloadCapacity) {
    super(model, color, "Truck");
    this.payloadCapacity = payloadCapacity;
  }

  loadCargo() {
    console.log(
      `Loading cargo with a capacity of ${this.payloadCapacity} pounds.`
    );
  }
}
module.exports = Truck;
