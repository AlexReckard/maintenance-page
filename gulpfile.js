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

// Build task: runs scripts and copy-assets tasks
gulp.task('build', gulp.series('scripts', 'copy-assets'));

// Default task: runs the build task
gulp.task('default', gulp.series('build'));
