var fs = require('fs');

fs.readFile(process.argv[2],newlines);

function newlines(error, infile){
    if(error) console.log("There was an error opening this file.")
    else console.log(infile.toString().split('\n').length - 1)
}