const orm = require("../config/orm");

// This code calls the ORM functions using burger specific input for the ORM.
let burger = {
  // GET the data from the database to display it
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  // POST new burger data if the user enters a new burger
  insertOne: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  // PUT (update) the burger's devoured boolean to true and move it to the devoured column
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
}

module.exports = burger;
