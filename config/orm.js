// Import MySQL connection.
var connection = require("../config/connection.js");

// Export the orm object for the model (burger.js).
module.exports = function(table) {
  return {
    findAll: function(cb) {
      connection.query("SELECT * FROM ??", [table], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    },
    findBy: function(condition, cb) {
      connection.query("SELECT * FROM ?? WHERE ?", [table, condition], function(err, result) {
        if (err) throw err;

        cb(result);
      })
    },

    create: function(newRow, cb) {

      connection.query("INSERT INTO ?? SET ?", [table, newRow], function(err, result) {
        if (err) throw err;
        
        cb(result);
      });
    },
    // An example of updatedObj would be {name: "panther", sleepy: false}
    // condition in object form: { id: 1 }
    update: function(updatedObj, condition, cb) {
      connection.query("UPDATE ?? SET ? WHERE ?", [table, updatedObj, condition], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    },
    delete: function(condition, cb) {
      connection.query("DELETE FROM ?? WHERE ?", [table, condition], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    }
  } 
}
