// Import MySQL connection.
const connection = require("../config/connection.js");

let orm = {
  insertOne: function (table, cols, vals, cb) {
    let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${vals}");`;
    console.log(queryString);
    connection.query(queryString, (err, resp) => {
      if (err) {
        throw err;
      }
      cb(resp);
    });
  },

  updateOne: function (table, objColVals, boolean, condition, cb) {
    let queryString = `UPDATE ${table} SET ${objColVals} = ${boolean} WHERE ${condition};`;
    console.log(queryString);
    connection.query(queryString, (err, resp) => {
      if (err) {
        throw err;
      }
      cb(resp);
    });
  },

  selectAll: function (table, cb) {
    let queryString = `SELECT * FROM ${table};`;

    connection.query(queryString, (err, resp) => {
      if (err) {
        throw err;
      }
      cb(resp);
    });
  },

  deleteOne: function (table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition};`;
    connection.query(queryString, (err, resp) => {
      if (err) {
        throw err;
      }
      cb(resp);
    });
  },
};

module.exports = orm;
