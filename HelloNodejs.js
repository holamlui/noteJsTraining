let http = require('http');
let _ = require('lodash');
let[host,port]=['localhost',1336];

http.createServer((req,res)=>{
	res.writeHead(200,{
		'Content-Type':'text/plain'
	});
	res.end('Hello world!!!!');
}).listen(port);
host=_.isInteger(port)?'localhost:1336':'';
console.log(`Web Server is running at ${host}`);