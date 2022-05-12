const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.controller');

// get all category
router.get('/get/category',categoryController.getAllCategory);

router.get('/get/category/:id',categoryController.getAllCategoryProduct);

router.get('/get/categorys/:id',categoryController.getAllCategorybyID);

router.post('/post/category', categoryController.createNewCategory);

router.delete('/delete/category/:id',categoryController.deleteCategory);

router.put('/put/category/:id',categoryController.updateCategory);





module.exports = router;