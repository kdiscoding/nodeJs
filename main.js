// var prompt = require('prompt-sync')();
// const age = prompt(`please enter your age: `);
// if(age<=18){
//     console.log("yeahhh you are safe!!!");
// }
// else {
//     console.log("you are fucked up bro!!!");
// }
// function callback(){
//     console.log('adding is done ');
// }
// const add = function(a,b,callback){
//      let result = a+b;
//      console.log('result:',result);// main fun work complete
//      callback();
// }

// add(7,3,() => console.log('adding is done'));

// let fs = require('fs');
// let os = require('os');

// let user = os.userInfo();
// let user2 = os.hostname();
// let user3 = os.platform();
// let user4 = os.loadavg();
// let user5 = os.networkInterfaces();
// let user6 = os.tmpdir();
// console.log(user);
// console.log(user2);
// console.log(user4);
// console.log(user6);

                    // file system
//fs.appendFile('greeting.txt','Hi '+ user.username + '!\n', ()=>{console.log('file is created')});


                    // loadash

// let _ = require('lodash');
 
// let data = ['kailash','kd','kd',1,2,2,3,3,4,4,5,6,7,7,8];

// let spedata = _.uniq(data);

// console.log(spedata);
// console.log(_.isString(12));



var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  console.log(filename);
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    } 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);

// let express = require("express");
// const app = express();

// app.get('/',(req,res) => {
//   res.send("what do you want");
// })

// app.get('/cats',(req,res) => {
//   res.send("meow..whoa!, here are some cuties..")
// })


// app.get('/cats.html',(req,res) => {
//   res.send("meow..whoa!, here are some cuties..")
// })

// app.listen(3000)