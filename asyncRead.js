var fs = require('fs');
var path = process.argv[2];
// var lines = 0;

fs.readFile(path, function callBack(err, buffToStringFile) {
	if (err) throw err;
	console.log( buffToStringFile.toString().split('\n').length - 1 ) ;
});

// console.log(lines);