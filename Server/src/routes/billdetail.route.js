const express = require('express');
const router = express.Router();

const billdetailController = require('../controllers/billdetail.controller');

// get all billdetail
router.get('/get/billdetail/',billdetailController.getAllBillDetails);

router.get('/get/billdetail/:id',billdetailController.getAllBillDetail);

router.post('/post/billdetail', billdetailController.createNewBillDetail);

module.exports = router;