const { createConnection } = require("mysql");
const connection = require("./connection");


const orm = {
  // // Taken from activity 13 solved/config/orm.js
  // selectAll: function(whatToSelect, tableInput) {
  //   const queryString = "SELECT ?? FROM ??";
  //   connection.query(queryString, [whatToSelect, tableInput],
  //     function(err, result) {
  //       if (err) throw err;
  //       console.log(result);
  //     });
  // },

  // Taken from activity 17 solved/config/orm.js
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // insertOne:
  // updateOne: 
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }, 
}

module.exports = orm