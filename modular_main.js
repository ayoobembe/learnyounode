var m_s = require('./modular_support')
var directoryName = process.argv[2]
var fileExtension = process.argv[3]

function consoleLog (error, arrayList) {
	if (error) throw error;
	arrayList.forEach(function(name) { console.log(name); });
} 

m_s(directoryName, fileExtension, consoleLog);











//Solution:
// var filterFn = require('./solution_filter.js')
// var dir = process.argv[2]
// var filterStr = process.argv[3]

// filterFn(dir, filterStr, function (err, list) {
//   if (err)
//     return console.error('There was an error:', err)

//   list.forEach(function (file) {
//     console.log(file)
//   })
// })