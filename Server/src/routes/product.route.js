const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');

// get all product
router.get('/get/product/:id',productController.getProductByID);

router.get('/get/product/res/:id',productController.getProductResByID);

router.get('/get/product',productController.getAllProduct);

router.post('/post/product', productController.createNewProduct);

router.delete('/delete/product/:id',productController.deleteProduct);

router.put('/put/product/:id',productController.updateProduct);

module.exports = router;