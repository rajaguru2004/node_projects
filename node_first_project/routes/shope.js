const express = require('express');
const path = require('path');
const dirname = require('../util/paths');

const router = express.Router();

// const __filename = url.fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

router.get('/',(req, res, next) => {
    res.sendFile(path.join(dirname, 'views', 'shop.html'));
});

module.exports = router;