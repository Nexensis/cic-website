var gulp = require('gulp');
    include = require('gulp-html-tag-include');
    bs = require('browser-sync').create();

gulp.task('browser-sync', ['watch'], function() {
    bs.init({
        server: {
            baseDir: "./build"
        }
    });
    gulp.watch("./build/**/*.html").on('change', bs.reload);
});

gulp.task('html-include', function() {
    return gulp.src('./source/index.html')
        .pipe(include())
        .pipe(gulp.dest('./build/'));
});
 
gulp.task('watch', ['html-include'], function() {
    gulp.watch('./source/**/*.html', ['html-include']);
});
 
gulp.task('default', ['browser-sync']);