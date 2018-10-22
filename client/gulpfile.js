var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var merge = require('merge-stream');
var minify = require('gulp-minify');

gulp.task('sass', function(){
  var scssStream = gulp.src('./src/assets/sass/Main.sass')
    .pipe(sass())
    .pipe(concat('./src/assets/css/styles.css'));

  var mergedStream = merge(scssStream)
     .pipe(concat('App.css'))
     .pipe(minify())
     .pipe(gulp.dest('./src/assets/css'));

  return mergedStream;

})
