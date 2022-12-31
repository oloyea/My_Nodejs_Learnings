const path = require("path");

// .sep()
console.log(path.sep);

// .join()
const filePath = path.join("/content", "/subfolder", "test.txt");
console.log(filePath); // output: /content/subfolder/test.txt

// To get the text in the above path.
const base = path.basename(filePath);
console.log(base); // output: /content/subfolder/test.txt test.txt

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
