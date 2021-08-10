const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

// handlebar is a package not auto installed by expressjs
// so we will have to tell express that there is a handlebar engine available

// so for this, we first need to import it using require
// and then tell express to use this template engine
// for this, we need to use engine method. this is given when using an engine which is not registered/built-in in expressjs

// pug is built-in in express and hence no such steps was needed

const expressHbs = require('express-handlebars');

const app = express();


//app.set can have various paramters that we can set
//can view all here: http://expressjs.com/en/api.html#app.set
//here, we are using 'view engine' and 'views'
//view engine is to set the default template engine to use when to load html/html relevant file
//and views to define the folder where all html/pug/handlebars files are placed, in our case, it is 'views' folder only which is also the default value

//app.engine('handlebars',expressHbs());
//'handlebars' can be any name where storing the expressHbs function return. and will set this name to view engine as a default template engine
//can be app.engine('hbs',expressHbs()); and so app.set('view engine','hbs'); and accordingly files name will also be 404.hbs
//app.set('view engine','handlebars');


app.engine('hbs',expressHbs({layoutsDir:'6-template-engines/handlebars/views/layouts/', defaultLayout:'main-layout', extname:'hbs'}));
//to give main/common layout, will have to give in engine the layout directory
app.set('view engine','hbs');
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
