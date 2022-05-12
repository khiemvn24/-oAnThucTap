
const BillDetailModel = require('../models/billdetail.model');

exports.getAllBillDetail = (req, res)=>{
    // console.log('here all billdetail list');
    BillDetailModel.getAllBillDetail(req.params.id,(err, restaurant) => {
        console.log('BillDetail free ship');
        if(err)
        res.send(err);
        console.log('BillDetail',restaurant);
        res.send(restaurant)
    })

}

exports.getAllBillDetails = (req, res)=>{
    // console.log('here all billdetail list');
    BillDetailModel.getAllBillDetails((err, restaurant) => {
        console.log('BillDetail free ship');
        if(err)
        res.send(err);
        console.log('BillDetail',restaurant);
        res.send(restaurant)
    })

}


// exports.getAllBillDetailbyID = (req, res)=>{
//     // console.log('here all billdetail list');
//     BillDetailModel.getAllBillDetailbyID(req.params.id,req.params.id2,(err, restaurant) => {
//         console.log('BillDetail ');
//         if(err)
//         res.send(err);
//         console.log('BillDetail',restaurant);
//         res.send(restaurant)
//     })

// }

// create new billdetail
exports.createNewBillDetail = (req, res) => {
    const billdetailReqData = new BillDetailModel(req.body)
    // console.log(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        console.log('valid data');
        BillDetailModel.createBillDetail(billdetailReqData, (err, billdetail)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'BillDetail Created Successfully'})
            
        })
    }
}

// // delete billdetail
// exports.deleteBillDetail = (req, res)=>{
//     BillDetailModel.deleteBillDetail(req.params.id, (err, billdetail)=>{
//         if(err)
//         res.send(err)
//         res.json({success:true, message:'BillDetail deleted successlly'});
//     })
// }

// exports.updateBillDetail = (req,res) => {
//     const billdetailReqData = new BillDetailModel(req.body)
//     console.log('billdetailReqData update', billdetailReqData);
//     //check null
//     if(req.body.contructor === Object && Object.keys(req.body).length === 0){
//         res.send(400).send({success:false, message:'Please fill all fields'});
//     }else{
//         BillDetailModel.updateBillDetail(req.params.id,billdetailReqData, (err, billdetail)=>{
//             if(err)
//             res.send(err);
//             res.json({status: true, message: 'BillDetail updated Successfully'})
//         })
//     }
// }