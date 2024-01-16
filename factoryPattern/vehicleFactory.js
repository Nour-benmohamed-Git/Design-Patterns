//Encapsulation: The VehicleFactory encapsulates the logic of creating different types of vehicles. If we need to add a new type of vehicle or change how vehicles are created, we only need to modify the factory.
const Car = require('./car');
const Truck = require('./truck');
class VehicleFactory {
  createVehicle(type, model, color, specialFeature) {
    switch (type) {
      case "Car":
        return new Car(model, color, specialFeature);
      case "Truck":
        return new Truck(model, color, specialFeature);
      default:
        throw new Error("Vehicle type not supported");
    }
  }
}
module.exports = VehicleFactory;
