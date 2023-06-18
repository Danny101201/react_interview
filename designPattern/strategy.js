
const Shipping = function(){
  this.company = ''
}
Shipping.prototype = {
  setStrategy: function (company){
    this.company = company
  },
  calculate:function (package){
    this.company.calculate(package)
  }
}

const UPS = function () {
  this.calculate = function (package) {
    // calculations...
    return "$45.95";
  }
};

const USPS = function () {
  this.calculate = function (package) {
    // calculations...
    return "$39.40";
  }
};

const Fedex = function () {
  this.calculate = function (package) {
    // calculations...
    return "$43.20";
  }
}
function demo (){
  const package = { from: "76712", to: "10012", weigth: "lkg" };
  let ups = new UPS();
  let usps = new USPS();
  let fedex = new Fedex();
  let shipping = new Shipping();

  shipping.setStrategy(ups);
  console.log("UPS Strategy: " + shipping.calculate(package));
  shipping.setStrategy(usps);
  console.log("USPS Strategy: " + shipping.calculate(package));
  shipping.setStrategy(fedex);
  console.log("Fedex Strategy: " + shipping.calculate(package));

}
