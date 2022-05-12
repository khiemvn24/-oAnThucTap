const express = require('express');
const router = express.Router();

const restaurantController = require('../controllers/restaurant.controller');

// get all account
router.get('/get/restaurant/freeship',restaurantController.getFreeShip);

router.get('/get/restaurant/promotion',restaurantController.getRestaurantPro);

router.get('/get/restaurant/allfull/:id',restaurantController.getRestaurantAllFullID);
router.get('/get/restaurant/averageReview/:id',restaurantController.getRestaurantAverageReview);
router.get('/get/restaurant/allfull/product/:id',restaurantController.getRestaurantAllFullPro);

router.get('/get/restaurant/allfull',restaurantController.getRestaurantAllFull);

router.get('/get/restaurant/product/:id',restaurantController.getRestaurantProductID);
router.get('/get/restaurant/desc/:id',restaurantController.getOrderByDesc);
router.get('/get/restaurant/asc/:id',restaurantController.getOrderByAsc);

router.get('/get/restaurant/:id',restaurantController.getRestaurant);

router.get('/get/restaurant',restaurantController.getAllRestaurant);

router.post('/post/restaurant',restaurantController.createNewRestaurant);

router.delete('/delete/restaurant/:id',restaurantController.deleteRestaurant);

router.put('/put/restaurant/:id',restaurantController.updateRestaurant);

module.exports = router;