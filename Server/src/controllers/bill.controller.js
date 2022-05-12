
const BillModel = require('../models/bill.model');

exports.getAllBill = (req, res)=>{
    // console.log('here all bill list');
    BillModel.getAllBill((err, restaurant) => {
        console.log('Bill free ship');
        if(err)
        res.send(err);
        console.log('Bill',restaurant);
        res.send(restaurant)
    })

}

exports.getAllBillProduct = (req, res)=>{
    // console.log('here all bill list');
    BillModel.getAllBillProduct(req.params.id,(err, restaurant) => {
        console.log('Bill free ship');
        if(err)
        res.send(err);
        console.log('Bill',restaurant);
        res.send(restaurant)
    })

}

exports.getAllBillbyID = (req, res)=>{
    // console.log('here all bill list');
    BillModel.getAllBillbyID(req.params.id,(err, restaurant) => {
        console.log('Bill ');
        if(err)
        res.send(err);
        console.log('Bill',restaurant);
        res.send(restaurant)
    })

}

// create new bill
exports.createNewBill = (req, res) => {
    const billReqData = new BillModel(req.body)
    // console.log(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        console.log('valid data');
        BillModel.createBill(billReqData, (err, bill)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Bill Created Successfully'})
            
        })
    }
}

// delete bill
exports.deleteBill = (req, res)=>{
    BillModel.deleteBill(req.params.id, (err, bill)=>{
        if(err)
        res.send(err)
        res.json({success:true, message:'Bill deleted successlly'});
    })
}

exports.updateBill = (req,res) => {
    const billReqData = new BillModel(req.body)
    console.log('billReqData update', billReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        BillModel.updateBill(req.params.id,billReqData, (err, bill)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Bill updated Successfully'})
        })
    }
}