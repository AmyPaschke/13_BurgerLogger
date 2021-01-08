// Import MySQL connection.
let connection = require("../config/connection.js");

let orm = {
  selectAll: function (tableInput, cb) {
    let queryString = `SELECT * FROM ${tableInput};`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (table, cols, values, cb) {
    let queryString = `INSERT INTO ${table} (${cols}) VALUES ("${values}");`;

    console.log(queryString);

    connection.query(queryString, vals, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  updateOne: function (table, objColVals, boolean, condition, cb) {
    let queryString = `UPDATE ${table} SET ${objColVals} = ${boolean} WHERE ${condition};`;
    console.log(queryString);
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // Delete function
  delete: function (table, condition, cb) {
    let queryString = `DELETE FROM ${table} WHERE ${condition};`;

    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
};

// Export the orm object
module.exports = orm;
