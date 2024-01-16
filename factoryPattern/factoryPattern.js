const VehicleFactory = require('./vehicleFactory');

const vehicleFactory = new VehicleFactory();
const myCar = vehicleFactory.createVehicle("Car", "Kia", "black");
myCar.display();
const myTruck = vehicleFactory.createVehicle("Truck", "mercedes", "black");
myTruck.display();
