const express = require('express');
const router = express.Router();
// const path = require('path');
// const dirname = require('../util/paths');

const productcontroller = require('../controller/product');

router.get('/add-product',productcontroller.getAddProduct);

router.post('/add-product',productcontroller.postAddProduct);

module.exports = router;