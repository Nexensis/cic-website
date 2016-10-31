var gulp    = require('gulp');
var uglify  = require('gulp-uglify');
var concat  = require('gulp-concat');
var changed = require('gulp-changed');
var nano    = require('gulp-cssnano');
var include = require('gulp-html-tag-include');
var bs      = require('browser-sync').create();

gulp.task('default', ['browser-sync']);

gulp.task('browser-sync', ['watch'], function() {
    bs.init({
        server: {
            baseDir: "./build"
        }
    });
    gulp.watch(["./build/**/*.html","./build/**/*.js","./build/img/**/*"]).on('change', bs.reload);
});

gulp.task('watch', ['html-include', 'css', 'scripts', 'assets', 'fonts'], function() {
    gulp.watch('./source/**/*.html', ['html-include']);
    gulp.watch('./source/**/*.js', ['scripts']);
    gulp.watch('./source/**/*.css', ['css']);
    gulp.watch('./source/img/**/*', ['assets']);
    gulp.watch('./source/fonts/**/*', ['fonts']);
});
 
gulp.task('html-include', function() {
    return gulp.src('./source/**/*.html')
        .pipe(include())
        .pipe(gulp.dest('./build/'));
});

gulp.task('scripts', function() {
    return gulp.src('./source/js/*.js')
        .pipe(changed('./build/js')) // Ignore unchanged files
        .pipe(gulp.dest('./build/js/'));
});

gulp.task('assets', function() {
    return gulp.src('./source/img/**/*')
        .pipe(changed('./build/img')) // Ignore unchanged files
        .pipe(gulp.dest('./build/img'));
});

gulp.task('fonts', function() {
    return gulp.src('./source/fonts/**/*')
        .pipe(changed('./build/fonts')) // Ignore unchanged files
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('css', function() {
    return gulp.src('./source/css/*.css')    
        .pipe(concat('cic.min.css'))
        .pipe(nano())    
        .pipe(gulp.dest('./build/css/'))
        .pipe(bs.stream());
});