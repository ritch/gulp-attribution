var gulp = require('gulp');
var attribution = require('../');
var assert = require('stream-assert')

describe('gulp-attribution', function() {
  before(function(done) {
    var test = this;
    gulp.src('test/fixtures/src.js')
      .pipe(attribution())
      .pipe(assert.first(function(file) {
        test.file = file;
      }))
      .pipe(assert.end(done));
  });

  it('the file should have attributes', function() {
    require('assert')(this.file.attributes.length === 5);
  });
});
