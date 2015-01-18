var fs = require('fs')
var pathModule = require('path')


module.exports = function (directoryName, fileExtension, callback) {

	fs.readdir(directoryName, function (error, list) {
		if (error) return callback(error);
		var filteredList = list.filter(function (name) {
			return pathModule.extname(name) === '.' + fileExtension;
		});
		callback(null, filteredList)
	});








//Solution
// var fs = require('fs')
// var path = require('path')

// module.exports = function (dir, filterStr, callback) {

//   fs.readdir(dir, function (err, list) {
//     if (err)
//       return callback(err)

//     list = list.filter(function (file) {
//       return path.extname(file) === '.' + filterStr
//     })

//     callback(null, list)
//   })
// }