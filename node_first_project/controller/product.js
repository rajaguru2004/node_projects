const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{pageTitle:'Add Product',
        path:'/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });    
};

exports.postAddProduct = (req, res, next) => {
    console.log('post is working');
    const product = new Product(req.body.title);
    product.save();
    // products.push({title: req.body.title});
    console.log(req.body.title);
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    // const products = adminData.products;
    products = Product.fetchAll(products => {
        res.render('shop',{pageTitle:'Shopeee',products: products,
            hasProducts: products.length > 0,
            activeShop: true,productCSS: true});

    });
    
};

