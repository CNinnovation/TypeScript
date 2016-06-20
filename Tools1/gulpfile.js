var gulp = require('gulp');

/* gulp.task('default', function() {
  console.log('Hello, gulp!');
});
*/
gulp.task('default', [ 'tsc' ]);

var ts = require('gulp-typescript');

var tsProject = ts.createProject({
  removeComments : true,
  noImplicitAny : true,
  target: 'ES3',
  module: 'commonjs',
  declarationFiles: false
});

gulp.task('tsc', function() {
  return gulp.src('./source/ts/**/**.ts')
    .pipe(ts(tsProject))
    .js.pipe(gulp.dest('./temp/source/js'));
});