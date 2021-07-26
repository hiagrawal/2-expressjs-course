
const express = require('express');
const router = express.Router();

//router has the exact same syntax and functioning as of app
//instead of use, which works as both get, post, better to use specific method to avoid any unnecessary usage
//get represents user can directly hit the path in browser and it should work
router.get('/add-product',(req, res, next) => {
    console.log("In add product function");
    res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">Add Product</button></form>');
});

router.post('/product',(req, res, next) => {
    console.log(req.body);
    console.log(req.body.title);
    res.redirect('/');
});

module.exports = router;