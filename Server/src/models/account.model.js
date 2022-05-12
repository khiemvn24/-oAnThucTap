const req = require("express/lib/request");
const res = require("express/lib/response");
var dbConn = require("../../config/db.config");

var Account = function (account) {
  // this.ID_Account = account.ID_Account;
  this.UserName = account.UserName;
  this.FullName = account.FullName;
  this.Email = account.Email;
  this.Password = account.Password;
  this.Phone = account.Phone;
  this.Address = account.Address;
  this.role = account.role;
  this.Status = account.Status ? account.Status : 1;
  this.Created_at = new Date();
};

// get all account

Account.getAccountList = (result) => {
  dbConn.query("SELECT * FROM account WHERE Is_Deleted=0", (err, res) => {
    if (err) {
      console.log("Error while fetching account", err);
      result(null, err);
    } else {
      console.log("account fetched successfully");
      result(null, res);
    }
  });
};

//
Account.getAllEmailAcounts = (result) => {
  dbConn.query("SELECT Email,Password FROM account WHERE Is_Deleted=0", (err, res) => {
    if (err) {
      console.log("Error while fetching account", err);
      result(null, err);
    } else {
      console.log("account fetched successfully");
      result(null, res);
    }
  });
};



// get bill account

Account.getAllBillAcounts = (result) => {
    dbConn.query("SELECT * FROM account,bill WHERE account.ID_Account=bill.ID_Account AND account.Status = 1", (err, res) => {
      if (err) {
        console.log("Error while fetching account", err);
        result(null, err);
      } else {
        console.log("account fetched successfully");
        result(null, res);
      }
    });
  };

// get all restaurant
Account.getAllRestaurant = (result) => {
  dbConn.query("SELECT * FROM restaurant WHERE Status = 1", (err, res) => {
    if (err) {
      console.log("Error while fetching account", err);
      result(null, err);
    } else {
      console.log("account fetched successfully");
      result(null, res);
    }
  });
};

// get account by ID from DB
Account.getAccountByID = (id, result) => {
  dbConn.query("SELECT * FROM account WHERE ID_Account=?", id, (err, res) => {
    if (err) {
      console.log("Error while fetching account by id", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

// create new account
Account.createAccount = (accountReqData, result) => {
  dbConn.query("INSERT INTO account SET ?", accountReqData, (err, res) => {
    if (err) {
      console.log("Error while inserting data");
      console.log(accountReqData,'=============');
      result(null, err);
    } else {
      console.log("Account created successfully");
      result(null, res);
    }
  });
};

// update account

Account.updateAccount = (id, accountReqData, result) => {
  dbConn.query(
    "UPDATE account SET FullName=?,Phone=?,Address=?,role=? WHERE ID_Account=?",
    [
      accountReqData.FullName,
      accountReqData.Phone,
      accountReqData.Address,
      accountReqData.role,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the account");
        result(null, err);
      } else {
        console.log("Account updated successfully");
        result(null, res);
      }
    }
  );
};

Account.updateProfile = (id, accountReqData, result) => {
  dbConn.query(
    "UPDATE account SET FullName=?,Phone=?,Address=? WHERE ID_Account=?",
    [
      accountReqData.FullName,
      accountReqData.Phone,
      accountReqData.Address,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the account");
        result(null, err);
      } else {
        console.log("Account updated successfully");
        result(null, res);
      }
    }
  );
};

Account.updateAccountPass = (id, accountReqData, result) => {
  dbConn.query(
    "UPDATE account SET Password=? WHERE ID_Account=?",
    [
      accountReqData.Password,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while updating the account");
        result(null, err);
      } else {
        console.log("Account updated successfully");
        result(null, res);
      }
    }
  );
};

// delete account
Account.deleteAccount = (id, result) => {
  dbConn.query('DELETE FROM account WHERE ID_Account=?',[id], (err, res)=>{
      if(err){
          console.log('Error while deleting the account');
          result(null, err);
      }else{
          result(null, res);
      }
  })
  // dbConn.query(
  //   "UPDATE account SET is_deleted = ? WHERE ID_Account=?",
  //   [1, id],
  //   (err, res) => {
  //     if (err) {
  //       console.log("Error while deleting the account");
  //       result(null, err);
  //     } else {
  //       console.log("Account deleted successfully");
  //       result(null, res);
  //     }
  //   }
  // );
};

module.exports = Account;
