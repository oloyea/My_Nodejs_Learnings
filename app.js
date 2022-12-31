// Modules - Encapsulated code (only share minimum)
// Every file in node is a module, so they available by default.

//from names.js
const { ade, jass } = require("./2-names");

//from utils.js
const sayHi = require("./3-utils");

//from alternative_syntax.js
const data = require("./4-export_syntax");

console.log(data);
// console.log(names);

sayHi(ade);
sayHi(jass);
sayHi();

// newNames = names.ade.toLowerCase();
// console.log(newNames);
