var fs = require('fs');
var resources = [
  'node_modules/bootstrap/dist/css/bootstrap.css',
  'src/css/layout.css',
  'src/css/github-markdown.css',
  'node_modules/owl.carousel/dist/assets/owl.carousel.css',
  'node_modules/owl.carousel/dist/assets/owl.theme.default.css',
  'node_modules/font-awesome/css/font-awesome.min.css',
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/jquery-migrate/dist/jquery-migrate.min.js',
  'node_modules/bootstrap/dist/js/bootstrap.min.js',
  'src/vendor/jquery.easing.js',
  'node_modules/owl.carousel/dist/owl.carousel.min.js',
  'node_modules/core-js/client/shim.min.js',
  'node_modules/zone.js/dist/zone.js'
];
resources.map(function(f) {
  var path = f.split('/');
  var t = 'aot/' + path[path.length-1];
  fs.createReadStream(f).pipe(fs.createWriteStream(t));
});