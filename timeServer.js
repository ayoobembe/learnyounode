var net = require('net')
var port = process.argv[2]

var tcpServer = net.createServer(function (socket) {
	console.log('Server created');

	socket.on('data', function (data) {
		console.log('Data received?');
		date = new Date()
		socket.write(
			'I am: ' + date.getFullYear() + '-' +
			date.getMonth() + '-' +
			date.getDate() + '-' +
			" " +
			date.getHours() + '-' + date.getMinutes() + '\n'
			)
	});


	socket.on('end', function() {
		console.log('ended');
	});

});

tcpServer.listen(port, function() {
	console.log('server listening at '+ port)

});

///Apparently client not included in tutorial.
//azzholes