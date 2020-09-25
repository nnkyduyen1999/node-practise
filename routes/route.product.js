const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller.product');

router.get('/', controller.products);

module.exports = router;