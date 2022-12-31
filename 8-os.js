//Built-in modules
const os = require("os");

// info about current user
// const user = os.userInfo();
// console.log(user);

//method returns the system uptime in seconds
// console.log(`The system's uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  user: os.userInfo(),
  osUptime: os.uptime(),
  osTemp: os.tmpdir(),
};

console.log(currentOS);
