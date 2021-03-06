var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('dev', function () {
    gulp.src('src/main.js')
        .pipe(webpack( require('./webpack.config.dev') ))
        .pipe(gulp.dest('build/js'));
});

gulp.task('prod', function () {
    gulp.src('src/main.js')
        .pipe(webpack( require('./webpack.config.prod') ))
        .pipe(gulp.dest('build/js'));
});