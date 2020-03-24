var math = require("./math.js");

var operation = process.argv[2];

var numOne = parseInt(process.argv[3]);
var numTwo = parseInt(process.argv[4]);

switch (operation) {
    case "sum":
        console.log(math.sum(numOne, numTwo));
        break;
    case "difference":
        console.log(math.difference(numOne, numTwo));
        break;
    case "product":
        console.log(math.product(numOne, numTwo));
        break;
    case "quotient":
        console.log(math.quotient(numOne, numTwo));
        break;
    default:
        console.log("No such a function!");
}