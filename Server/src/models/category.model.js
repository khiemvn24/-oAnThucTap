const req = require("express/lib/request");
const res = require("express/lib/response");
var dbConn = require("../../config/db.config");

var Category = function (category) {
    this.ID_Category  = category.ID_Category ;
    this.categoryName = category.categoryName;
    this.Image_Cate = category.Image_Cate;
    this.Status = category.Status ? category.Status : 1;
  };
Category.getAllCategory = (result) => {
    dbConn.query("SELECT * FROM category", (err, res) => {
      if (err) {
        console.log("Error while fetching category", err);
        result(null, err);
      } else {
        console.log("category fetched successfully");
        result(null, res);
      }
    });
  };

Category.getAllCategoryProduct = (id,result) => {
  dbConn.query("SELECT * FROM category,product WHERE category.ID_Category = product.ID_Category AND category.ID_Category = ? ",id, (err, res) => {
    if (err) {
      console.log("Error while fetching category", err);
      result(null, err);
    } else {
      console.log("category fetched successfully");
      result(null, res);
    }
  });
};
Category.getAllCategorybyID = (id,result) => {
  dbConn.query("SELECT * FROM category WHERE ID_Category = ? ",id, (err, res) => {
    if (err) {
      console.log("Error while fetching category", err);
      result(null, err);
    } else {
      console.log("category fetched successfully");
      result(null, res);
    }
  });
};

Category.createCategory = (categoryReqData, result) => {
  dbConn.query("INSERT INTO category SET ?", categoryReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      console.log(categoryReqData,'=============');
      result(null, err);
    } else {
      console.log("Category created successfully");
      result(null, res);
    }
  });
};

// delete category
Category.deleteCategory = (id, result) => {
  dbConn.query('DELETE FROM category WHERE ID_Category=?',[id], (err, res)=>{
      if(err){
          console.log('Error while deleting the category');
          result(null, err);
      }else{
          result(null, res);
      }
  })
};



Category.updateCategory = (id, categoryReqData, result) => {
  dbConn.query(
    "UPDATE category SET categoryName=?,Image_Cate=?,Status=? WHERE ID_Category=?",
    [
      categoryReqData.categoryName,
      categoryReqData.Image_Cate,
      categoryReqData.Status,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the category");
        result(null, err);
      } else {
        console.log("Category updated successfully");
        result(null, res);
      }
    }
  );
};





module.exports = Category;