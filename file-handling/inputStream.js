const readline = require('readline');
const fs = require('fs');


const myInterface = readline.createInterface({
  input: fs.createReadStream('hii.txt')
});



myInterface.on('line',(data) => {
  console.log(`Item: ${data}`);
});