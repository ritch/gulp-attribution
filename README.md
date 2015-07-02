# gulp-attribution
Parse JS files for attributes

## install

```
npm install --save-dev gulp-attribution
```

## usage

```js
var wrap = require('gulp-wrap');
var attribution = require('gulp-attribution');

gulp.task('js', function() {
  gulp.src('src/*.js')
    .pipe(attribution())
    .pipe(wrap('// this is the <%= file.attributes.name %> module'))
    .pipe(gulp.dest('dist'));
});
```
