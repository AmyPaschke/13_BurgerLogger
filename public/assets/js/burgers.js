// Import ORM into the burger JS file
const orm = require("../config/orm.js");

// The code that will call the ORM functions using burger specific input for the ORM.
let burger = {
  // add new burger to the data base
  insertOne: function (cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function (res) {
      cb(res);
    });
  },
  // change the devoured status to true.
  updateOne: function (objColVals, boolean, condition, cb) {
    orm.updateOne("burgers", objColVals, boolean, condition, function (res) {
      cb(res);
    });
  },
  // display all burger info in data base
  selectAll: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },
  // delete the burger from the data base.
  deleteOne: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  },
};

// Export at the end of the burger file
module.exports = burger;
