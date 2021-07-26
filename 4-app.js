
//separting the redirection logic in routes and using import export concept to access the same

const express = require('express'); 

const adminRoutes = require('./4-routes/admin');
const shopRoutes = require('./4-routes/shop');

const bodyParser = require('body-parser');

const app = express(); 

app.use(bodyParser.urlencoded({extended:false}));

//if all paths in adminRoutes start with a common path (let's say /admin), then that can be given here only 
//and omitted from the respective route file
//advantage of this is, path will get checked here only, if it starts with /admin then only check admitRoutes file else no need to check
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//since this will be executed at the end hence if any matching paths not found, then this code will be executed
app.use((req, res, next) => {
    //if want to set status 404 also when page not found then can chain the methods
    //can set the status to any of the res method but send method has to be last
    //can also do the same using setHeader
    res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000); 
