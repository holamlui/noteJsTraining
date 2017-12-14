let http = require('http');
let _ = require('lodash');
let[host,port]=['localhost',9999];

http.createServer((req,res)=>{
	res.writeHead(200,{
		'Content-Type':'text/plain'
	});
	res.end('Hello Node.js');
}).listen(port);
host=_.isInteger(port)?'localhost:9999':'';
console.log(`Web Server is running at ${host}`);