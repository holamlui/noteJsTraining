const foodStore = require('./server.js');
const http = require('http');

http.createServer(function(req,res){
	console.log("Test!");
}).listen(7654);

