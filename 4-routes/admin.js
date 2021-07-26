
const express = require('express');
const router = express.Router();

//router has the exact same syntax and functioning as of app
//instead of use, which works as both get, post, better to use specific method to avoid any unnecessary usage
//get represents user can directly hit the path in browser and it should work

//this path will be treated as '/admin/add-product' as '/admin' has been added in app.js file
router.get('/add-product',(req, res, next) => {
    console.log("In add product function");
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"></input><button type="submit">Add Product</button></form>');
});

//also, since one is get method and one is post hence the path name can be same as it will be exceuted for different methods
router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    console.log(req.body.title);
    res.redirect('/');
});

module.exports = router;