const req = require("express/lib/request");
const res = require("express/lib/response");
var dbConn = require("../../config/db.config");

var Product = function (product) {
    this.ID_Product = product.ID_Product;
    this.productName = product.productName;
    this.price = product.price;
    this.details = product.details;
    this.Image_Pro = product.Image_Pro;
    this.Status = product.Status;
    this.ID_Category=product.ID_Category;
  };

Product.getProductByID = (id,result) => {
    dbConn.query("SELECT * FROM product WHERE ID_Product =?", id,(err, res) => {
      if (err) {
        console.log("Error while fetching product", err);
        result(null, err);
      } else {
        console.log("product fetched successfully");
        result(null, res);
      }
    });
  };

Product.getProductResByID = (id,result) => {
  dbConn.query("SELECT * FROM restaurant,product,product WHERE restaurant.ID_Product = product.ID_Product AND product.ID_Product = product.ID_Product AND ID_Product =?", id,(err, res) => {
    if (err) {
      console.log("Error while fetching product", err);
      result(null, err);
    } else {
      console.log("product fetched successfully");
      result(null, res);
    }
  });
};

Product.getAllProduct = (result) => {
  dbConn.query("SELECT * FROM product", (err, res) => {
    if (err) {
      console.log("Error while fetching product", err);
      result(null, err);
    } else {
      console.log("product fetched successfully");
      result(null, res);
    }
  });
};

Product.createProduct = (productReqData, result) => {
  dbConn.query("INSERT INTO product SET ?", productReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      console.log(productReqData,'=============');
      result(null, err);
    } else {
      console.log("Product created successfully");
      result(null, res);
    }
  });
};

// delete product
Product.deleteProduct = (id, result) => {
  dbConn.query('DELETE FROM product WHERE ID_Product=?',[id], (err, res)=>{
      if(err){
          console.log('Error while deleting the product');
          result(null, err);
      }else{
          result(null, res);
      }
  })
};



Product.updateProduct = (id, productReqData, result) => {
  dbConn.query(
    "UPDATE product SET productName=?,price=?,details=?,Image_Pro=?,Status=?,ID_Category=? WHERE ID_Product=?",
    [
      productReqData.productName,
      productReqData.price,
      productReqData.details,
      productReqData.Image_Pro,
      productReqData.Status,
      productReqData.ID_Category,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the product");
        result(null, err);
      } else {
        console.log("Product updated successfully");
        result(null, res);
      }
    }
  );
};
 
module.exports = Product;
