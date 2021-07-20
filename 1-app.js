
//const http = require('http'); //http is nodejs core module
//since we are not creating the server using http, but now using express listen method which internally using
//nodejs http method to create the server and listen to it

const express = require('express'); //express is 3rd party package installed via npm install express
//require express is returning a function. can hover over it or check express in require ctrl+click.
//so now const express is a function

const app = express(); 
//calling the function to use it's utility methods

//use allows to add a middleware function
//req, res, next are arguments and can not be renamed
//next is a function which is used to allow the request to go to next middleware in line
//if next is not used, even if another 'use' is used, it will not be processed
app.use((req, res, next) => { 
    console.log("In middleware function");
    next();
});

app.use((req, res, next) => {
    console.log("In another middleware function");
    res.send('<h1>Hello from Express js</h1>');
    //send is used to send the response.
    //send accepts any type of body so can send anything
    //by default, it sets the response type of text/html. can change it anytime using res.setHeader that we did in nodejs
    //in nodejs, we had to set the type explicitely while in express, it is default set to text/html
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); 
//app.listen is a express js function which does both the fiunctionalities done by node js
//that is craeting server as well as listen to it
