var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var uncss = require('gulp-uncss');
var nano = require('gulp-cssnano');
var include = require('gulp-html-tag-include');
var bs = require('browser-sync').create();

gulp.task('default', ['browser-sync']);

gulp.task('browser-sync', ['watch'], function() {
    bs.init({
        server: {
            baseDir: "./build"
        }
    });
    gulp.watch(["./build/**/*.html","./build/**/*.js"]).on('change', bs.reload);
});

gulp.task('watch', ['html-include', 'scripts', 'css'], function() {
    gulp.watch('./source/**/*.html', ['html-include']);
    gulp.watch('./source/**/*.js', ['scripts']);
    gulp.watch('./source/**/*.css', ['css']);
});
 
gulp.task('html-include', function() {
    return gulp.src('./source/index.html')
        .pipe(include())
        .pipe(gulp.dest('./build/'));
});
 
gulp.task('scripts', function() {
  gulp.src('./source/js/*.js')
    .pipe(concat('cic.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js/'))
});
 
gulp.task('css', function() {
  gulp.src('./source/css/*.css')
    .pipe(concat('cic.min.css'))
    .pipe(uncss({
            html: './source/**/*.html'
    }))
    .pipe(nano())    
    .pipe(gulp.dest('./build/css/'))
    .pipe(bs.stream());
});