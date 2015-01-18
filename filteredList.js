var fs = require('fs')
var pathModule = require('path')
var directoryName = process.argv[2]
var fileExtension = process.argv[3]

fs.readdir(directoryName, function (error, list) {
	if (error) throw error;
	var filteredList = list.filter(function (name) {
		return pathModule.extname(name) === '.' + fileExtension;
	});
	filteredList.forEach(function(name) { console.log(name); });
});


