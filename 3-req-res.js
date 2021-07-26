
const express = require('express'); 
const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.urlencoded({extended:false}));
//this method will parse the incoming request. 
//It will not parse all types of requests like file, json (for that we will use different parsers)
//but it will parse the data received in this form submit
//this urlencoded creates middleware function internally so it has that res, res everything that we cant see and 
//calls next method also to execute to the next middleware function and so the execution continues

//through expressjs parsers, we get in object form, rather than key=value that we had in nodejs and then split on =
//so we do not have this in express and it is simple object with key value so it is easy to process

app.use('/',(req, res, next) => {
    console.log("This always runs");
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log("In add product function");
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">Add Product</button></form>');
});

//when we use 'use', it will work for get as well as post request 
//that is when user directly hit '/product' in browser url, then it will be 'get' request and should not be used for. 
//but we want to use this only for POST request for that we have various methods
//get, post, put, delete,, which work exactly as use but with specific types of request
//so instead of use, we will use post
//app.use('/product',(req, res, next) => {
app.post('/product',(req, res, next) => {
    console.log(req.body);
    //req.body will have the request body but not in parsed form
    //so for that, we will have to install 3rd party package 'body-parser' which was included in express initialy then removed then added again
    //so we will install this body-parser to parse the incoming request
    //and everytime we would need to parse the incoming request 
    //hence will create a middleware function at the start of the execution to alawys parse the request body
    console.log(req.body.title);
    res.redirect('/');
    //for redirect using just nodejs, we had to set status code, setHeader location 
    //but through express, this can be done just by using redirect method
});

app.use('/',(req, res, next) => {
    console.log("In middleware function");
    res.send('<h1>Hello from Express js</h1>');
});

app.listen(3000); 
