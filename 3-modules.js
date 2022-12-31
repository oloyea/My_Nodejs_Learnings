// Modules - Encapsulated code (only share minimum)
// Every file in node is a module, so they available by default.

//from names.js
const { ade, jass } = require("./2-names");

//from utils.js
const sayHi = require("./4-utils");

//from alternative_syntax.js
const data = require("./5-export_syntax");

//from gotcha
require("./6-gotcha"); // output: the sum is: 25 - This is because this was invoked as a function in gotcha.js no need for export or assigning to a variable.

// console.log(data);
// console.log(names);

// sayHi(ade);
// sayHi(jass);
// sayHi();

// newNames = names.ade.toLowerCase();
// console.log(newNames);
