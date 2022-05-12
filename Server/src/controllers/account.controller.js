
const AccountModel = require('../models/account.model');

// get all account list
exports.getAccountList = (req, res)=>{
    // console.log('here all account list');
    AccountModel.getAccountList((err, accounts) => {
        console.log('we are here');
        if(err)
        res.send(err);
        console.log('Acounts',accounts);
        res.send(accounts)
    })

}



// email,pass
exports.getEmailPass = (req, res)=>{
    // console.log('here all account list');
    AccountModel.getAllEmailAcounts((err, accounts) => {
        console.log('we are here');
        if(err)
        res.send(err);
        console.log('Acounts',accounts);
        res.send(accounts)
    })

}

//
exports.getAllBillAcounts = (req, res)=>{
    // console.log('here all account list');
    AccountModel.getAllBillAcounts((err, accounts) => {
        console.log('bill account');

        if(err)
        res.send(err);
        console.log('Acounts Bill',accounts);
        res.send(accounts)
    })

}


//get account by ID
exports.getAccountByID = (req, res)=>{
    // console.log('get by id');
    AccountModel.getAccountByID(req.params.id, (err, account)=>{
        if(err)
        res.send(err);
        console.log('single account data',account);
        res.send(account);
    })
}

// create new account
exports.createNewAccount = (req, res) => {
    const accountReqData = new AccountModel(req.body)
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        console.log('valid data');
        AccountModel.createAccount(accountReqData, (err, account)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Account Created Successfully', data: account.insertId})
            
        })
    }
}

// update account
exports.updateAccount = (req,res) => {
    const accountReqData = new AccountModel(req.body)
    console.log('accountReqData update', accountReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        AccountModel.updateAccount(req.params.id,accountReqData, (err, account)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Account updated Successfully'})
        })
    }
}
exports.updateProfile = (req,res) => {
    const accountReqData = new AccountModel(req.body)
    console.log('accountReqData update', accountReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        AccountModel.updateProfile(req.params.id,accountReqData, (err, account)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Account updated Successfully'})
        })
    }
}
exports.updateAccountPass = (req,res) => {
    const accountReqData = new AccountModel(req.body)
    console.log('accountReqData update', accountReqData);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message:'Please fill all fields'});
    }else{
        AccountModel.updateAccountPass(req.params.id,accountReqData, (err, account)=>{
            if(err)
            res.send(err);
            res.json({status: true, message: 'Account updated Successfully'})
        })
    }
}

// delete account
exports.deleteAccount = (req, res)=>{
    AccountModel.deleteAccount(req.params.id, (err, account)=>{
        if(err)
        res.send(err)
        res.json({success:true, message:'Account deleted successlly'});
    })
}


exports.getAllRestaurant = (req, res)=>{
    // console.log('here all account list');
    AccountModel.getAllRestaurant((err, accounts) => {
        console.log('restaurant :');

        if(err)
        res.send(err);
        console.log('All restaurant',accounts);
        res.send(accounts)
    })

}


