const express = require('express');
const router = express.Router();

const promotionController = require('../controllers/promotion.controller');

// get all promotion
router.get('/get/promotion',promotionController.getAllPromotion);

router.get('/get/promotion/:id',promotionController.getAllPromotionbyID);

router.post('/post/promotion',promotionController.createNewPromotion);

router.delete('/delete/promotion/:id',promotionController.deletePromotion);

router.put('/put/promotion/:id',promotionController.updatePromotion);

module.exports = router;