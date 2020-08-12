const fs = require('fs');


let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};
fs.readFile('./hii.txt', 'utf-8', readDataCallback);