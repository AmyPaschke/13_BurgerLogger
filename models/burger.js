// Import the ORM to create functions that will interact with the database.
let orm = require("../config/orm.js");

//cb sstands for call back
let burger = {
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  //add a burger
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },

  //update a burger
  updateOne: function (objColVals, boolean, condition, cb) {
    orm.updateOne("burgers", objColVals, boolean, condition, function (res) {
      cb(res);
    });
  },
  //delete a burger
  delete: function (condition, cb) {
    orm.delete("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller.
module.exports = burger;
