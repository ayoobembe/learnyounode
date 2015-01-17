var fs = require('fs');
var path = process.argv[2];
var fileExt = process.argv[3];
var files = [];

function filterByExt (callback) {
	fs.readdir(path, function (err, list) {
		files = list.filter(endsWith);
		callback(files);
	});
}

//callback function
function logToTerminal (array) {
	for ( var i = 0; i < array.length; i++ ){
		console.log(array[i]);
	}
}

//filtering function
function endsWith (text) {
	return (text.slice(-Math.abs(fileExt.length+1)) == ('.' + fileExt));
}

filterByExt(logToTerminal);



