
//path is a nodejs core module
const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/add-product',(req, res, next) => {
    console.log("In add product function");

    //Instead of sending text, we now need to send html file
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"></input><button type="submit">Add Product</button></form>');

    //for that, we have sendFile method
    //it takes absolute path and hence can not be send like this, so we have nodejs path module
    //res.sendFile('../views/add-product.html');

    //__dirname gives the absolute path and then joining the path till the html file
    res.sendFile(path.join(__dirname, '..' , 'views', 'add-product.html'));

});

router.post('/add-product',(req, res, next) => {
    console.log(req.body);
    console.log(req.body.title);
    res.redirect('/');
});

module.exports = router;