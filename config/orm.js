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

  