var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();

var segments = str.split('\n');
console.log(segments.length - 1);