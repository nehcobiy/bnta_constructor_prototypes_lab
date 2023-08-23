const Dealership = function (name, capacity, instockCars) {
  this.name = name;
  this.capacity = capacity;
  this.instockCars = instockCars;
};

Dealership.prototype.getNumOfInstockCars = function () {
  return this.instockCars.length;
};

Dealership.prototype.addCarToStock = function (car) {
  if (this.getNumOfInstockCars() >= this.capacity) {
    return "full capacity, unable to add car";
  } else {
    this.instockCars.push(car);
  }
};

Dealership.prototype.getInstockCarManus = function () {
  return this.instockCars.map((car) => {
    return car.manufacturer;
  });
};

Dealership.prototype.getCarsOfSpecificManu = function (manu) {
  const cars = [];
  this.instockCars.forEach((car) => {
    if (car.manufacturer === manu) {
      cars.push(car);
    }
  });
  return cars;
};

Dealership.prototype.totalValue = function () {
  const total = this.instockCars.reduce((value, car) => value + car.price, 0);
  return total;
};

Dealership.prototype.sellCar = function (customer, car) {
  const index = this.instockCars.indexOf(car);
  if (customer.buyCar(car) != "you can't afford this") {
    this.instockCars.splice(index, 1);
    return this.instockCars;
  } else {
    return "payment declined";
  }
};

module.exports = Dealership;
