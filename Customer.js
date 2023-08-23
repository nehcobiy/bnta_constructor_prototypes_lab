const Customer = function (name, wallet) {
  this.name = name;
  this.wallet = wallet;
  this.car = null;
};

Customer.prototype.buyCar = function (car) {
  if (this.wallet >= car.price) {
    this.wallet -= car.price;
    this.car = car;
  } else {
    return "you can't afford this";
  }
};

module.exports = Customer;
