const PromotionModel = require('../models/promotion.model');

exports.getAllPromotion = (req, res)=>{
    // console.log('here all promotion list');
    PromotionModel.getAllPromotion((err, promotion) => {
        console.log('Promotion free ship');
        if(err)
        res.send(err);
        console.log('Promotion',promotion);
        res.send(promotion)
    })

}



exports.getAllPromotionbyID = (req, res)=>{
    // console.log('here all promotion list');
    PromotionModel.getAllPromotionbyID(req.params.id,(err, promotion) => {
        console.log('Promotion ');
        if(err)
        res.send(err);
        console.log('Promotion',promotion);
        res.send(promotion)
    })

}

// create new promotion
exports.createNewPromotion = (req, res) => {
    const promotionReqData = new PromotionModel(req.body)
    console.log(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        console.log('valid data');
        PromotionModel.createPromotion(promotionReqData, (err, promotion)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Promotion Created Successfully'})
            
        })
    }
}

// delete promotion
exports.deletePromotion = (req, res)=>{
    PromotionModel.deletePromotion(req.params.id, (err, promotion)=>{
        if(err)
        res.send(err)
        res.json({success:true, message:'Promotion deleted successlly'});
    })
}

exports.updatePromotion = (req,res) => {
    const promotionReqData = new PromotionModel(req.body)
    console.log('promotionReqData update', promotionReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        PromotionModel.updatePromotion(req.params.id,promotionReqData, (err, promotion)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Promotion updated Successfully'})
        })
    }
}