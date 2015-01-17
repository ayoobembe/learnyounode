var fs = require('fs')

var buffFile = fs.readFileSync(process.argv[2])
var lines = buffFile.toString().split('\n').length - 1

console.log(lines)