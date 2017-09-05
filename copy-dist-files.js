var fs = require('fs');
var resources = [
  'src/css/layout.css',
  'src/css/github-markdown.css'
];
resources.map(function(f) {
  var path = f.split('/');
  var t = 'aot/' + path[path.length-2] + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});