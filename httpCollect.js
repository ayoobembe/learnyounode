var http = require('http')
const bl = require('bl')
var url = process.argv[2]

http.get(url, function (response) {

	response.pipe(bl(function (error, data) {
		if (error) return error;
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}));

});



//question: what kind of object is response?
//		does it emit streams? Or is it a stream?