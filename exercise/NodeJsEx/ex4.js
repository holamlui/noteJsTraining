const foodStore = require('NJ_DOM_FS');

// •	Return all food item detail by GET method
// •	Search food item by name by POST method
http.createServer(function(req,res){
	if(req.url == '/allFood'){
        console.log("List all Food");
	}else if(req.url == '/searchFood'){
        console.log("search for Food");
    }else{
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<form action="allFood" method="get">');
	res.write('<input type="sumbit">');
	res.write('</form>');
    res.write('<br>')
    res.write('<form action="searchFood" method="post">');
	res.write('<input type ="text" name="foodName"><br>');
	res.write('<input type="sumbit">');
	res.write('</form>');
	return res.end();
	}
}).listen(8999);