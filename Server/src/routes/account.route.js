const express = require('express');
const router = express.Router();

const accountController = require('../controllers/account.controller');

// get all account
router.get('/get/account/',accountController.getAccountList);

router.get('/get/account/emailpass',accountController.getEmailPass);

// bill acount
router.get('/get/account/bill/',accountController.getAllBillAcounts);

// restaurnat
router.get('/get/restaurant',accountController.getAllRestaurant);

// get account by ID
router.get('/get/account/:id',accountController.getAccountByID);

// create new account
router.post('/post/account', accountController.createNewAccount);

// update account 
router.put('/put/account/:id',accountController.updateAccount)
router.put('/put/profile/:id',accountController.updateProfile)
// password
router.put('/put/accountpass/:id',accountController.updateAccountPass)
// delete account
router.delete('/delete/account/:id',accountController.deleteAccount);



module.exports = router;