'use strict';

const fs = require('fs');
//console.log(process.argv)
let inFile = process.argv[2];
const readFilePromise = new Promise((resolve,reject)=>{
  fs.readFile(inFile,{encoding: 'utf8'}, (err, content)=>{
    if(err){
      reject(err);
    }
    resolve(content);
  });
});
readFilePromise.then(data => {
  let lines = data.split('\n');
  lines.pop()
  lines.forEach(function(line){
    console.log('hello,' +line+'!');
  });
  .catch(err => {
  console.log('there was an error');
  console.log(err)
  });
});

//fs.readFile(inFile, { encoding: 'utf8' }, function(error, content) {
//  if (error) {
//    console.error(error);
//  }
//
//  // 'Billy\nJames\nNick\n' --> ['Billy', 'James', 'Nick']
//
//  let lines = content.split('\n');
//
//  // clean up the array by removing the empty line
//  lines.pop();
//
//  lines.forEach(function(line) {
//    console.log('Hello, ' + line + '!');
//  });
//});
