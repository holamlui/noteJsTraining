var mv = require('mv');
const fs = require('fs');

fs.rename('./hello.txt','./hello2.txt',(err,content)=>{
  if(err){
        console.log('error when moving file');
        return console.log(err);
    }
});
console.log('finish moving file');