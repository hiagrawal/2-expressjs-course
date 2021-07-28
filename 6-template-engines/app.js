const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//app.set can have various paramters that we can set
//can view all here: http://expressjs.com/en/api.html#app.set
//here, we are using 'view engine' and 'views'
//view engine is to set the default template engine to use when to load html/pug file
//and views to define the folder where all html/pug files are placed, in our case, it is 'views' folder only which is also the default value
app.set('view engine','pug');
app.set('views',path.join(__dirname, 'views'));
//now, will have to create a pug file which will have dynamic content
//and also, will render the pug file in shop.js instead oh html 

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000);
