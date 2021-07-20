

const express = require('express'); 

const app = express(); 

//use have various parameters. 
//one is path
//'/' when we give /, does not mean the exact/full path, 
//so if url is anything after '/' like '/test' then also it becomes true and enter inside the function

//so if want to give any function for another path lets say '/test' then add it before '/' middleware function
//if added after '/' use function then as it executes top to bottom, it will get first use method, 
//will match '/test' with '/' , will return true and executes the same and hence will not enter in any other use middleware function
//since to go to next middleware function, 'next' should be used
//hence all specific paths should be at the start and all default ones at the end
//or use next to go to next middleware function accordingly

app.use('/',(req, res, next) => {
    console.log("This always runs");
    next();
});

app.use('/add-product',(req, res, next) => {
    console.log("In add product function");
    res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/',(req, res, next) => {
    console.log("In middleware function");
    res.send('<h1>Hello from Express js</h1>');
});

app.listen(3000); 
