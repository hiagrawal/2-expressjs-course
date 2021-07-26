

const path = require('path');

const express = require('express'); 

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));
//express.static is used to give access to all static files. this may be css files, images files

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    //res.status(404).send("<h1>Page not found</h1>");
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(3000); 
