var through = require('through2');
var parse = require('attribution');

module.exports = function () {
  return through.obj(function (file, enc, callback) {
    // Do nothing if no contents
    if (file.isNull()) {
      return callback(null, file);
    }

    if (file.isStream()) {
      return callback(new gutil.PluginError('gulp-wrap-js', 'Stream content is not supported'));
    }

    // check if file.contents is a `Buffer`
    if (file.isBuffer()) {
      file.attributes = parse(file.contents);
    }

    callback(null, file);
  });
};
