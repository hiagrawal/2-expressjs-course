const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin')

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('shop.js', adminData.products);
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  //since it is not html file. will not just sendFile but will use render which is a expressjs method to render the pug file
  //and since path is already given in app.js file, that all html/pug files are in views folder, hence just need to give the file name
  //and default pug template engine is also defined in app.js file, hence no need to give pug extension in shop file
  const products = adminData.products;
  res.render('shop' , {prods:products, pageTitle:'My Shop', path:'shop',hasProducts: products.length>0});
  //simply can pass values in object as key value pair to get the same in html file
});

module.exports = router;

//this is one way of sharing data - that we got the data in admin.js, exported it and imported in shop.js data
//now one major disadvantage with this is - since the data is on localhost:3000 server, even if we close the tab and reopen
//or open in new window, or new browser or in incognito, will always get the data since it is on that 3000 node
//this data is inherent from the node server and therefore shared across