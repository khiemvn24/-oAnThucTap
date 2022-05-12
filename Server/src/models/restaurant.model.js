const req = require("express/lib/request");
const res = require("express/lib/response");
var dbConn = require("../../config/db.config");

var Restaurant = function (restaurant) {
  this.RestaurantName = restaurant.RestaurantName;
  this.Address = restaurant.Address;
  this.Phone = restaurant.Phone;
  this.averageReview = restaurant.averageReview;
  this.numberOfReview = restaurant.numberOfReview;
  this.farAway = restaurant.farAway;
  this.discount = restaurant.discount;
  this.deliveryTime = restaurant.deliveryTime;
  this.collectTime = restaurant.collectTime;
  this.footType = restaurant.footType;
  this.Image_Res = restaurant.Image_Res;
  this.Status = restaurant.Status;
  this.ID_Promotion = restaurant.ID_Promotion;
  this.ID_Category = restaurant.ID_Category;

};

Restaurant.getFreeShip = (result) => {
  dbConn.query("SELECT * FROM restaurant WHERE farAway <= 10", (err, res) => {
    if (err) {
      console.log("Error while fetching restaurant", err);
      result(null, err);
    } else {
      console.log("restaurant fetched successfully");
      result(null, res);
    }
  });
};

Restaurant.getRestaurantPro = (result) => {
  dbConn.query(
    "SELECT * FROM restaurant,promotion WHERE promotion.ID_Promotion = restaurant.ID_Promotion  ",
    (err, res) => {
      if (err) {
        console.log("Error while fetching restaurant promotion", err);
        result(null, err);
      } else {
        console.log("restaurant promotion fetched successfully");
        result(null, res);
      }
    }
  );
};

Restaurant.getRestaurantAllFullID = (id, result) => {
  dbConn.query(
    "SELECT * FROM restaurant,category WHERE restaurant.ID_Category = category.ID_Category  AND category.ID_Category=? ",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching restaurant", err);
        result(null, err);
      } else {
        console.log("restaurant fetched successfully");
        result(null, res);
      }
    }
  );
};

Restaurant.getRestaurantAverageReview = (id, result) => {
  dbConn.query(
    "SELECT * FROM restaurant,category WHERE restaurant.ID_Category = category.ID_Category  AND category.ID_Category=? AND averageReview > 4.3",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching restaurant", err);
        result(null, err);
      } else {
        console.log("restaurant fetched successfully");
        result(null, res);
      }
    }
  );
};
//
Restaurant.getRestaurant = (id, result) => {
  dbConn.query(
    "SELECT * FROM restaurant WHERE ID_Restaurant=? ",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching restaurant", err);
        result(null, err);
      } else {
        console.log("restaurant fetched successfully");
        result(null, res);
      }
    }
  );
};
//
Restaurant.getRestaurantAllFull = (result) => {
  dbConn.query(
    "SELECT * FROM restaurant,category WHERE restaurant.ID_Category = category.ID_Category  ",
    (err, res) => {
      if (err) {
        console.log("Error while fetching restaurant", err);
        result(null, err);
      } else {
        console.log("restaurant fetched successfully");
        result(null, res);
      }
    }
  );
};

Restaurant.getRestaurantAllFullPro = (id, result) => {
  dbConn.query(
    "SELECT * FROM category,product WHERE category.ID_Category = product.ID_Category AND category.ID_Category=? ",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching restaurant", err);
        result(null, err);
      } else {
        console.log("restaurant fetched successfully");
        result(null, res);
      }
    }
  );
};

Restaurant.getRestaurantProductID = (id, result) => {
  dbConn.query(
    "SELECT * FROM restaurant,category,product WHERE restaurant.ID_Category = category.ID_Category AND category.ID_Category = product.ID_Category AND ID_Restaurant =? ",
    // "SELECT * FROM restaurant,category WHERE restaurant.ID_Category = category.ID_Category AND category.ID_Category =? ",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching restaurant product", err);
        result(null, err);
      } else {
        console.log("restaurant product fetched successfully");
        result(null, res);
      }
    }
  );
};

Restaurant.getOrderByDesc = (id, result) => {
  dbConn.query(
    "SELECT * FROM restaurant,category WHERE restaurant.ID_Category = category.ID_Category  AND category.ID_Category=?  ORDER BY farAway DESC",
    // "SELECT * FROM restaurant,category WHERE restaurant.ID_Category = category.ID_Category AND category.ID_Category =? ",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching restaurant product", err);
        result(null, err);
      } else {
        console.log("restaurant product fetched successfully");
        result(null, res);
      }
    }
  );
};
Restaurant.getOrderByAsc = (id, result) => {
  dbConn.query(
    "SELECT * FROM restaurant,category WHERE restaurant.ID_Category = category.ID_Category  AND category.ID_Category=?  ORDER BY farAway ASC",
    // "SELECT * FROM restaurant,category WHERE restaurant.ID_Category = category.ID_Category AND category.ID_Category =? ",
    id,
    (err, res) => {
      if (err) {
        console.log("Error while fetching restaurant product", err);
        result(null, err);
      } else {
        console.log("restaurant product fetched successfully");
        result(null, res);
      }
    }
  );
};


Restaurant.getAllRestaurant = (result) => {
  dbConn.query(
    "SELECT * FROM restaurant ",
    (err, res) => {
      if (err) {
        console.log("Error while fetching restaurant", err);
        result(null, err);
      } else {
        console.log("restaurant fetched successfully");
        result(null, res);
      }
    }
  );
};

Restaurant.createRestaurant = (RestaurantReqData, result) => {
  dbConn.query("INSERT INTO Restaurant SET ?", RestaurantReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      console.log(RestaurantReqData,'=============');
      result(null, err);
    } else {
      console.log("Restaurant created successfully");
      result(null, res);
    }
  });
};

// delete Restaurant
Restaurant.deleteRestaurant = (id, result) => {
  dbConn.query('DELETE FROM Restaurant WHERE ID_Restaurant=?',[id], (err, res)=>{
      if(err){
          console.log('Error while deleting the Restaurant');
          result(null, err);
      }else{
          result(null, res);
      }
  })
};

Restaurant.updateRestaurant = (id, RestaurantReqData, result) => {
  dbConn.query(
    "UPDATE Restaurant SET RestaurantName=?,Address=?,Phone=?,averageReview=?, numberOfReview=?,farAway=?,discount=?,deliveryTime=?, collectTime=?,footType=?,Image_Res=?,Status=?, ID_Promotion=?,ID_Category=? WHERE ID_Restaurant=?",
    [
      RestaurantReqData.RestaurantName,
      RestaurantReqData.Address,
      RestaurantReqData.Phone,
      RestaurantReqData.averageReview,
      RestaurantReqData.numberOfReview,
      RestaurantReqData.farAway,
      RestaurantReqData.discount,
      RestaurantReqData.deliveryTime,
      RestaurantReqData.collectTime,
      RestaurantReqData.footType,
      RestaurantReqData.Image_Res,
      RestaurantReqData.Status,
      RestaurantReqData.ID_Promotion,
      RestaurantReqData.ID_Category,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the Restaurant");
        result(null, err);
      } else {
        console.log("Restaurant updated successfully");
        result(null, res);
      }
    }
  );
};




module.exports = Restaurant;

