const orm = require("../config/orm");

// Create the code that will call the ORM functions using burger specific input for the ORM.
const burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  // create an update here and in the ORM
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
}

module.exports = burger;
