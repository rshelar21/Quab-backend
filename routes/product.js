const express = require('express');
const router = express.Router();
const {getProducts} = require('../controller/product');

router.get("/", getProducts);

module.exports = router;