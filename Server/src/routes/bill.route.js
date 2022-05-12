const express = require('express');
const router = express.Router();

const billController = require('../controllers/bill.controller');

// get all bill
router.get('/get/bill',billController.getAllBill);

router.get('/get/bill/:id',billController.getAllBillbyID);

router.post('/post/bill', billController.createNewBill);

router.delete('/delete/bill/:id',billController.deleteBill);

router.put('/put/bill/:id',billController.updateBill);

module.exports = router;