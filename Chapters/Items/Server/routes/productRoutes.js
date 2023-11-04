const express = require('express');
const productsController = require('./../controllers/productsController');

const router = express.Router();

router
    .route('/')
    .get(productsController.getAllProducts);

router
    .route('/photo/:id')
    .get(productsController.getImage);

router
    .route('/:id')
    .get(productsController.getProduct);

module.exports = router;