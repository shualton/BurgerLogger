var connection = require("./connection.js");

function objSql(ob) {
    var arr = [];
    for (var key in ob) {
      arr.push(key + "=" + ob[key]);
    }
    return arr.toString();
  }

function print(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
    return arr.toString();
  }

  var orm = {
    all: function(tableInput, cb) {
      var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    create: function(table, cols, vals, cb) {
      var queryString = "INSERT INTO " + table;
      queryString += " (";
      queryString += cols.toString();
      queryString += ") ";
      queryString += "VALUES (";
      queryString += print(vals.length);
      queryString += ") ";
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    update: function(table, obj, condition, cb) {
      var queryString = "UPDATE " + table;
      queryString += " SET ";
      queryString += objSql(obj);
      queryString += " WHERE ";
      queryString += condition;
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    }
  };
  
  module.exports = orm;