// fs-module
const { readFileSync, writeFileSync } = require("fs");

// read files
const firstFile = readFileSync("./content/first.txt", "utf-8");
const secondFile = readFileSync("./content/second.txt", "utf-8");
console.log(firstFile, secondFile);

//write files (overides the whatever content in the file if file exists!). In order to append you will need to add a 3rd object parameter (flag: 'a)
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${firstFile}, ${secondFile}`,
  { flag: "a" } // flag is to append
);
