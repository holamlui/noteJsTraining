const fs = require('fs');
console.log('start reading file ...');
fs.readFile('hello.txt','utf-8',(err,content)=>{
    if(err){
        console.log('error when reading file');
        return console.log(err);
    }
    console.log(`Content is "${content}"`);
});
console.log('end reading file');