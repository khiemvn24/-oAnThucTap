const req = require("express/lib/request");
const res = require("express/lib/response");
var dbConn = require("../../config/db.config");

var Billdetail = function (billdetail) {
    this.ID_Bill  = billdetail.ID_Bill;
    this.ID_Product = billdetail.ID_Product;
    this.Amount = billdetail.Amount;
  };
Billdetail.getAllBillDetail = (id,result) => {
    dbConn.query("SELECT * FROM billdetail,product WHERE billdetail.ID_Product = product.ID_Product AND ID_Bill =?",id, (err, res) => {
      if (err) {
        console.log("Error while fetching billdetail", err);
        result(null, err);
      } else {
        console.log("billdetail fetched successfully");
        result(null, res);
      }
    });
  };

  Billdetail.getAllBillDetails = (result) => {
    dbConn.query("SELECT * FROM billdetail", (err, res) => {
      if (err) {
        console.log("Error while fetching billdetail", err);
        result(null, err);
      } else {
        console.log("billdetail fetched successfully");
        result(null, res);
      }
    });
  };
  // Billdetail.getAllBillDetailbyID = (id,id2,result) => {
  //   dbConn.query("SELECT * FROM bill WHERE ID_Bill = ? AND ID_Product =? ",id,id2, (err, res) => {
  //     if (err) {
  //       console.log("Error while fetching bill", err);
  //       result(null, err);
  //     } else {
  //       console.log("bill fetched successfully");
  //       result(null, res);
  //     }
  //   });
  // };

Billdetail.createBillDetail = (billdetailReqData, result) => {
  dbConn.query("INSERT INTO billdetail SET ?", billdetailReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data,================");
      console.log(billdetailReqData,'=============');
      result(null, err);
    } else {
      console.log("Billdetail created successfully");
      result(null, res);
    }
  });
};


module.exports = Billdetail;