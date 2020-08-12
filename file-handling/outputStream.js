const fs = require('fs')

const fileStream = fs.createWriteStream('output.txt');

fileStream.write('This is the first line!\n'); 
fileStream.write('This is the second line!');
fileStream.end();