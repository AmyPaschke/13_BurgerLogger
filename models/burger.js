// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  updateOne: function (objColVals, boolean, condition, cb) {
    orm.updateOne("burgers", objColVals, boolean, condition, function (res) {
      cb(res);
    });
  },
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;
