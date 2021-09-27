
const products = [];

exports.getAddProductPage = (req, res, next) => {
    res.render('add-product' , {pageTitle:'Add Product', path:'addProduct', productsCSS: true, formsCSS: true, activeProduct: true});
};

exports.addProduct = (req, res, next) => {
    products.push({title:req.body.title});
    res.redirect('/');
  }

exports.showProducts = (req, res, next) => {
    res.render('shop' , {prods:products, pageTitle:'My Shop', path:'shop',hasProducts: products.length>0, activeShop:true, productsCSS: true});  
  }