const Car = require("./Car");
const Dealership = require("./Dealership");
const Customer = require("./Customer");

let ford;
let bmw;
let tesla;
let dealership;

beforeEach(() => {
  ford = new Car("Ford", 5000, "Petrol");
  bmw = new Car("BMW", 14000, "Diesel");
  tesla = new Car("Tesla", 20000, "Electric");
  dealership = new Dealership("car shop", 4, [ford, bmw, tesla]);
  customer = new Customer("lisa", 10000);
});

describe("Car", () => {
  test("can access properties", () => {
    expect(ford.manufacturer).toBe("Ford");
    expect(ford.price).toBe(5000);
    expect(ford.engineType).toBe("Petrol");
  });
});

describe("Dealership", () => {
  test("correct length of instock cars", () => {
    expect(dealership.getNumOfInstockCars()).toBe(3);
  });

  test("add car to stock", () => {
    mini = new Car("Mini", 8000, "Petrol");
    dealership.addCarToStock(mini);
    expect(dealership.instockCars.includes(mini)).toBe(true);
  });

  test("get car manufacturers", () => {
    expect(dealership.getInstockCarManus()).toEqual(["Ford", "BMW", "Tesla"]);
  });

  test("get cars of a specific manufacturer", () => {
    anotherFord = new Car("Ford", 8000, "Petrol");
    dealership.addCarToStock(anotherFord);
    expect(dealership.getCarsOfSpecificManu("Ford")).toEqual([
      ford,
      anotherFord,
    ]);
  });

  test("total car value", () => {
    expect(dealership.totalValue()).toBe(39000);
  });

  test("unable to add car when full", () => {
    mini1 = new Car("Mini", 8000, "Petrol");
    mini2 = new Car("Mini", 8000, "Diesel");
    dealership.addCarToStock(mini1);
    expect(dealership.addCarToStock(mini2)).toBe(
      "full capacity, unable to add car"
    );
  });

  test("enough money to buy car", () => {
    dealership.sellCar(customer, ford);
    expect(customer.wallet).toBe(5000);
    expect(customer.car).toEqual(ford);
    console.log(dealership.instockCars);
    expect(dealership.instockCars).toEqual([bmw, tesla]);
  });

  test("not enough money to buy car", () => {
    expect(dealership.sellCar(customer, tesla)).toEqual("payment declined");
  });
});
