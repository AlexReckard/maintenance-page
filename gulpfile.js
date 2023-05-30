const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

function errorHandler(error) {
  console.error(error.message);
  this.emit('end');
}

// Concatenate and minify JavaScript files
gulp.task('scripts', function () {
  return gulp
    .src('js/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .on('error', errorHandler)
    .pipe(gulp.dest('public/js'));
});

// Copy static assets to the public directory
gulp.task('copy-assets', function () {
  return gulp
    .src(['css/*.css', 'image/*', 'html/*.html'], { base: './' })
    .on('error', errorHandler)
    .pipe(gulp.dest('public'));
});

// Watch for changes in JavaScript and static assets
gulp.task('watch', function () {
  gulp.series('scripts', 'copy-assets')(); // Run tasks initially
  gulp.watch('js/*.js', gulp.series('scripts'));
  gulp.watch(['css/*.css', 'image/*', 'html/*.html'], gulp.series('copy-assets'));
});

// Default task: runs all tasks and starts watching for changes
gulp.task('default', gulp.series('scripts', 'copy-assets', 'watch'));
