const req = require("express/lib/request");
const res = require("express/lib/response");
var dbConn = require("../../config/db.config");

var Bill = function (bill) {
    // this.ID_Bill  = bill.ID_Bill;
    this.ReceiverName  = bill.ReceiverName;
    this.ReceiverAddress  = bill.ReceiverAddress;
    this.ReceiverEmail  = bill.ReceiverEmail;
    this.ReceiverPhone  = bill.ReceiverPhone;
    this.PayType  = bill.PayType;
    this.Status = bill.Status;
    this.CreatedDate  = new Date();
    this.Money = bill.Money;
    this.ID_Account  = bill.ID_Account;
  };
Bill.getAllBill = (result) => {
    dbConn.query("SELECT  *  FROM bill", (err, res) => {
      if (err) {
        console.log("Error while fetching bill", err);
        result(null, err);
      } else {
        console.log("bill fetched successfully");
        result(null, res);
      }
    });
  };

Bill.getAllBillbyID = (id,result) => {
  dbConn.query("SELECT * FROM bill WHERE ID_Bill = ? ",id, (err, res) => {
    if (err) {
      console.log("Error while fetching bill", err);
      result(null, err);
    } else {
      console.log("bill fetched successfully");
      result(null, res);
    }
  });
};

Bill.createBill = (billReqData, result) => {
  dbConn.query("INSERT INTO bill SET ?", billReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data,================");
      console.log(billReqData,'=============');
      result(null, err);
    } else {
      console.log("Bill created successfully");
      result(null, res);
    }
  });
};


// delete bill
Bill.deleteBill = (id, result) => {
  dbConn.query('DELETE FROM bill WHERE ID_Bill=?',[id], (err, res)=>{
      if(err){
          console.log('Error while deleting the bill');
          result(null, err);
      }else{
          result(null, res);
      }
  })
};




Bill.updateBill = (id, billReqData, result) => {
  dbConn.query(
    "UPDATE bill SET ReceiverName=?,ReceiverAddress=?,ReceiverEmail=?,ReceiverPhone=?,PayType=?,Status=? WHERE ID_Bill=?",
    [
      billReqData.ReceiverName,
      billReqData.ReceiverAddress,
      billReqData.ReceiverEmail,
      billReqData.ReceiverPhone,
      billReqData.PayType,
      billReqData.Status,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the bill");
        result(null, err);
      } else {
        console.log("Bill updated successfully");
        result(null, res);
      }
    }
  );
};





module.exports = Bill;