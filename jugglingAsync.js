//Main Challenge is: counting async requests

var http = require('http')
const bl = require('bl')
var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]
var urls = [url1, url2, url3];

function runServers (callback) {
 	count = 3;
	results = [undefined, undefined, undefined]

	urls.forEach( function( url) {
		http.get(url, function (response) {
			response.pipe(bl(function (error, data) {
				if (error) return error;
				data = data.toString();
				results[urls.indexOf(url)] = data;
				count--;
				if (count <= 0) callback(results);
			}));
		});
	})
}

function logResults(results) {
	results.forEach(function (result) {
		console.log(result);
	});
}


runServers(logResults);


//AWESOME!! But go over this again later!