const fs = require ("fs")
const os = require('os');
fs.readFile('list.conf', 'utf8' , function (err,data) {
  if (err) {
    return console.log(err);
  }
  let array = data.split(os.EOL)
  let i=0
  for(i;i<array.length;i++){
    console.log(array[i])
  }
});
