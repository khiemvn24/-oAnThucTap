const ProductModel = require('../models/product.model');

exports.getProductByID = (req, res)=>{
    // console.log('here all account list');
    ProductModel.getProductByID(req.params.id,(err, product) => {
        console.log('product');
        if(err)
        res.send(err);
        console.log('product',product);
        res.send(product)
    })

}

exports.getProductResByID = (req, res)=>{
    // console.log('here all account list');
    ProductModel.getProductResByID(req.params.id,(err, product) => {
        console.log('product');
        if(err)
        res.send(err);
        console.log('product',product);
        res.send(product)
    })

}

exports.getAllProduct = (req, res)=>{
    // console.log('here all product list');
    ProductModel.getAllProduct((err, restaurant) => {
        console.log('Product free ship');
        if(err)
        res.send(err);
        console.log('Product',restaurant);
        res.send(restaurant)
    })

}

// create new product
exports.createNewProduct = (req, res) => {
    const productReqData = new ProductModel(req.body)
    // console.log(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        console.log('valid data');
        ProductModel.createProduct(productReqData, (err, product)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Product Created Successfully'})
            
        })
    }
}

// delete product
exports.deleteProduct = (req, res)=>{
    ProductModel.deleteProduct(req.params.id, (err, product)=>{
        if(err)
        res.send(err)
        res.json({success:true, message:'Product deleted successlly'});
    })
}

exports.updateProduct = (req,res) => {
    const productReqData = new ProductModel(req.body)
    console.log('productReqData update', productReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        ProductModel.updateProduct(req.params.id,productReqData, (err, product)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Product updated Successfully'})
        })
    }
}