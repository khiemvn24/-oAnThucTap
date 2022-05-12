
const RestaurantModel = require('../models/restaurant.model');

exports.getFreeShip = (req, res)=>{
    // console.log('here all account list');
    RestaurantModel.getFreeShip((err, restaurant) => {
        console.log('Restaunt free ship');
        if(err)
        res.send(err);
        console.log('Restaurant',restaurant);
        res.send(restaurant)
    })

}

exports.getRestaurantPro = (req, res)=>{
    // console.log('here all account list');
    RestaurantModel.getRestaurantPro((err, restaurant) => {
        console.log('Restaunt restaurant');
        if(err)
        res.send(err);
        console.log('Restaurant',restaurant);
        res.send(restaurant)
    })

}



exports.getRestaurantAllFullID = (req, res)=>{
    
    RestaurantModel.getRestaurantAllFullID(req.params.id,(err, restaurant) => {
        console.log('restaurant :');
        if(err)
        res.send(err);
        console.log('All restaurant',restaurant);
        res.send(restaurant)
    })

}
exports.getRestaurantAverageReview = (req, res)=>{
    
    RestaurantModel.getRestaurantAverageReview(req.params.id,(err, restaurant) => {
        console.log('restaurant :');
        if(err)
        res.send(err);
        console.log('All restaurant',restaurant);
        res.send(restaurant)
    })

}

exports.getRestaurantAllFull = (req, res)=>{
    
    RestaurantModel.getRestaurantAllFull((err, restaurant) => {
        console.log('restaurant :');
        if(err)
        res.send(err);
        console.log('All restaurant',restaurant);
        res.send(restaurant)
    })

}
exports.getRestaurantAllFullPro = (req, res)=>{
    
    RestaurantModel.getRestaurantAllFullPro(req.params.id,(err, restaurant) => {
        console.log('product :');
        if(err)
        res.send(err);
        console.log('All product',restaurant);
        res.send(restaurant)
    })

}

exports.getRestaurant = (req, res)=>{
    
    RestaurantModel.getRestaurant(req.params.id,(err, restaurant) => {
        console.log('product :');
        if(err)
        res.send(err);
        console.log('All product',restaurant);
        res.send(restaurant)
    })

}

exports.getRestaurantProductID = (req, res)=>{
    
    RestaurantModel.getRestaurantProductID(req.params.id,(err, restaurant) => {
        console.log('product restaurant:');
        if(err)
        res.send(err);
        console.log('All product restaurant',restaurant);
        res.send(restaurant)
    })

}

exports.getOrderByDesc = (req, res)=>{
    
    RestaurantModel.getOrderByDesc(req.params.id,(err, restaurant) => {
        console.log('product restaurant:');
        if(err)
        res.send(err);
        console.log('All product restaurant',restaurant);
        res.send(restaurant)
    })

}

exports.getOrderByAsc = (req, res)=>{
    
    RestaurantModel.getOrderByAsc(req.params.id,(err, restaurant) => {
        console.log('product restaurant:');
        if(err)
        res.send(err);
        console.log('All product restaurant',restaurant);
        res.send(restaurant)
    })

}

exports.getAllRestaurant = (req, res)=>{
    
    RestaurantModel.getAllRestaurant((err, restaurant) => {
        console.log('restaurant :');
        if(err)
        res.send(err);
        console.log('All restaurant',restaurant);
        res.send(restaurant)
    })

}


// create new restaurant
exports.createNewRestaurant = (req, res) => {
    const restaurantReqData = new RestaurantModel(req.body)
    console.log(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        console.log('valid data');
        RestaurantModel.createRestaurant(restaurantReqData, (err, restaurant)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Restaurant Created Successfully'})
            
        })
    }
}

// delete restaurant
exports.deleteRestaurant = (req, res)=>{
    RestaurantModel.deleteRestaurant(req.params.id, (err, restaurant)=>{
        if(err)
        res.send(err)
        res.json({success:true, message:'Restaurant deleted successlly'});
    })
}

exports.updateRestaurant = (req,res) => {
    const restaurantReqData = new RestaurantModel(req.body)
    console.log('restaurantReqData update', restaurantReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        RestaurantModel.updateRestaurant(req.params.id,restaurantReqData, (err, restaurant)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Restaurant updated Successfully'})
        })
    }
}