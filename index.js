import http from 'http';
import fs from 'fs';
import generator from "generate-password";
import nodemailer from "nodemailer";

//Task1
console.log("Hello world");

//Task2
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h1>Hello Node!!!!</h1>\n');
    res.end();
}).listen(3000);

//Task3
fs.writeFile('welcome.txt', 'Hello Node', function (err) {
  if (err) throw err;
}); 
fs.readFile('welcome.txt', function(err, file) {
    if (err) throw err;
    console.log(file.toString());
});

//Task4
var password = generator.generate({
	length: 10,
	numbers: true
});
console.log(password);

//Task5
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });
  
  var mailOptions = {
    from: 'youremail@gmail.com',
    to: 'myfriend@yahoo.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 