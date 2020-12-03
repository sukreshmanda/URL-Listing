const fs = require ("fs")
fs.readFile('list.conf', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
