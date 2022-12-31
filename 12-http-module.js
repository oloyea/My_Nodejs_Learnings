const http = require("http");

// const method = http.METHODS;
// console.log(method);

const server = http.createServer((req, res) => {
  console.log(req);
  res.write("welcome to our home page");
  res.end();
});

server.listen(5000);
