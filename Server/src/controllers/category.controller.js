
const CategoryModel = require('../models/category.model');

exports.getAllCategory = (req, res)=>{
    // console.log('here all category list');
    CategoryModel.getAllCategory((err, category) => {
        console.log('Category free ship');
        if(err)
        res.send(err);
        console.log('Category',category);
        res.send(category)
    })

}

exports.getAllCategoryProduct = (req, res)=>{
    // console.log('here all category list');
    CategoryModel.getAllCategoryProduct(req.params.id,(err, category) => {
        console.log('Category free ship');
        if(err)
        res.send(err);
        console.log('Category',category);
        res.send(category)
    })

}

exports.getAllCategorybyID = (req, res)=>{
    // console.log('here all category list');
    CategoryModel.getAllCategorybyID(req.params.id,(err, category) => {
        console.log('Category ');
        if(err)
        res.send(err);
        console.log('Category',category);
        res.send(category)
    })

}

// create new category
exports.createNewCategory = (req, res) => {
    const categoryReqData = new CategoryModel(req.body)
    // console.log(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        console.log('valid data');
        CategoryModel.createCategory(categoryReqData, (err, category)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Category Created Successfully'})
            
        })
    }
}

// delete category
exports.deleteCategory = (req, res)=>{
    CategoryModel.deleteCategory(req.params.id, (err, category)=>{
        if(err)
        res.send(err)
        res.json({success:true, message:'Category deleted successlly'});
    })
}

exports.updateCategory = (req,res) => {
    const categoryReqData = new CategoryModel(req.body)
    console.log('categoryReqData update', categoryReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        CategoryModel.updateCategory(req.params.id,categoryReqData, (err, category)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Category updated Successfully'})
        })
    }
}