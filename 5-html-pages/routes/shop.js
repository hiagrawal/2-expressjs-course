
const path = require('path');

const express = require('express');
const router = express.Router();

//get also makes sure that it is not only a get method but also exact path
//so now if we give '/test' it will not be loaded
//while in case of 'use', it used to get executed
router.get('/',(req, res, next) => {
    console.log("In middleware function");
    //res.send('<h1>Hello from Express js</h1>');
    res.sendFile(path.join(__dirname,  '..' , 'views', 'shop.html'));
});

module.exports = router;