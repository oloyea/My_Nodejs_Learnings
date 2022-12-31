// -------------------------------------------------------------------------

// Export alternatives
module.exports.items = ["item1", "item2"];

const person = {
  name: "Sleem",
  age: "36",
  job: "Software Engineer",
};

// Another one
module.exports.thatPerson = person;

const greetings = (name) => {
  console.log(`Hello there ${name}`);
};

// Another one
module.exports = greetings;

//local
const secret = "SECRET";

// Share
const ade = "Ade";
const jass = " Music";
const sport = " football";
console.log(module);

// One way to export, when there is more than one
module.exports = { ade, jass };
