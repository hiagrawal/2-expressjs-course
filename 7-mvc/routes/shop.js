const path = require('path');

const express = require('express');

//const adminData = require('./admin');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/', productsController.showProducts);

module.exports = router;
