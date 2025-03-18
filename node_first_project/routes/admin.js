const express = require('express');
const router = express.Router();
const path = require('path');
const dirname = require('../util/paths');

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(dirname,'views','add-product.html'));
});

router.post('/admin/add-product',(req, res, next) => {
    console.log('post is working');
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;