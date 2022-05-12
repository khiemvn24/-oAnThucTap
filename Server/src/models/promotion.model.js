const req = require("express/lib/request");
const res = require("express/lib/response");
var dbConn = require("../../config/db.config");

var Promotion = function (promotion) {
    this.ID_Promotion  = promotion.ID_Promotion ;
    this.Content = promotion.Content;
    this.createDate = promotion.createDate;
    this.modifyDate = promotion.modifyDate;
    this.Status = promotion.Status ? promotion.Status : 1;
  };
Promotion.getAllPromotion = (result) => {
    dbConn.query("SELECT * FROM promotion", (err, res) => {
      if (err) {
        console.log("Error while fetching promotion", err);
        result(null, err);
      } else {
        console.log("promotion fetched successfully");
        result(null, res);
      }
    });
  };


Promotion.getAllPromotionbyID = (id,result) => {
  dbConn.query("SELECT * FROM promotion WHERE ID_Promotion = ? ",id, (err, res) => {
    if (err) {
      console.log("Error while fetching promotion", err);
      result(null, err);
    } else {
      console.log("promotion fetched successfully");
      result(null, res);
    }
  });
};

Promotion.createPromotion = (promotionReqData, result) => {
  dbConn.query("INSERT INTO promotion SET ?", promotionReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      console.log(promotionReqData,'=============');
      result(null, err);
    } else {
      console.log("Promotion created successfully");
      result(null, res);
    }
  });
};

// delete promotion
Promotion.deletePromotion = (id, result) => {
  dbConn.query('DELETE FROM promotion WHERE ID_Promotion=?',[id], (err, res)=>{
      if(err){
          console.log('Error while deleting the promotion');
          result(null, err);
      }else{
          result(null, res);
      }
  })
};

Promotion.updatePromotion = (id, promotionReqData, result) => {
  dbConn.query(
    "UPDATE promotion SET Content=?,createDate=?,modifyDate=?,Status=? WHERE ID_Promotion=?",
    [
      promotionReqData.Content,
      promotionReqData.createDate,
      promotionReqData.modifyDate,
      promotionReqData.Status,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the promotion");
        result(null, err);
      } else {
        console.log("Promotion updated successfully");
        result(null, res);
      }
    }
  );
};







module.exports = Promotion;