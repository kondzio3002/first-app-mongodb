// post.routes.js

const express = require('express');
const router = express.Router();
const productController = require('../controllers/products.controllers');

router.get('/products', productController.getAll);
router.get('/products/random', productController.getRandom);
router.get('/products/:id', productController.getById);
router.post('/products', productController.postNew);
router.put('/products/:id', productController.putById);
router.delete('/products/:id', productController.deleteById);

module.exports = router;
