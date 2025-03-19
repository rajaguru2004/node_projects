const express = require('express');
// const path = require('path');
// const dirname = require('../util/paths');

const router = express.Router();
// const adminData = require('./admin');
const productcontroller = require('../controller/product');

// const __filename = url.fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

router.get('/',productcontroller.getProducts);

module.exports = router;