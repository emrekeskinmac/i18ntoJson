const fs = require('fs');
var file = require('file-system');
const reg = /{\s*_(.*?)}/g;

var LangData = {};
file.recurse('files', ['**/*.html'], function(filepath, relative, filename) {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) throw err;
    var myArray;
    while ((myArray = reg.exec(data)) !== null) {
      var msg = myArray[1]
      var str = msg.replace('"','')
      msg = msg.replace('"','').replace('"','').replace(' ','')
      LangData[msg] = msg
    }
    fs.writeFile('i18n/tr.i18n.json',JSON.stringify(LangData, null, 2), (err) => {
      if (err) throw err;
    })
  });
});
