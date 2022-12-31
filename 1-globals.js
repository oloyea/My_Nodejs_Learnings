// Globals

// __dirname - path to the current directory
//! console.log(__dirname);
// __filename - file name
//! console.log(__filename)
// require  - function to use modules
//! console.log(require);
// module  - info about current module (file)
//! console.log(module);
// process - info about env where the program is being executed
//! console.log(process);

// test code
setInterval(() => {
  console.log("hello, Wolrd");
}, 1000);

// test code
const amount = 12;
if (amount < 10) {
  console.log("amount too low");
} else {
  console.log(__dirname);
}
