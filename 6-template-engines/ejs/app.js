const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//ejs is again inbuilt in express like pug and hence no extra import is required
app.set('view engine','ejs');
app.set('views',path.join(__dirname, 'views'));


const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404' , {pageTitle:'Page Not Found'});
});

app.listen(3000);
