const fs = require('fs');
const path = require('path')
// const users = require('./users.json')

exports.storeUser = function (name) {
  fs.readFile(path.join(__dirname, './users.json'), "utf8", function (err, data) {
    var oldVal = JSON.parse(data);
    oldVal.push(name);
    fs.writeFile(path.join(__dirname, "./users.json"), JSON.stringify(oldVal), function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  })
}

exports.getList = function () {
  return fs.readFileSync(path.join(__dirname, './users.json'), "utf8", function (err, data) {
    return data;
  });
}


exports.remove = function () {
  fs.readFile(path.join(__dirname, './users.json'), "utf8", function (err, data) {
    var oldVal = JSON.parse(data);
    oldVal.splice(-1);
    fs.writeFile(path.join(__dirname, "./users.json"), JSON.stringify(oldVal), function (err) {
      if (err) throw err;
      console.log('The "data to append" was appended to file!');
    });
  })
}

