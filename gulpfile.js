var gulp = require('gulp');
var webpack = require('webpack-stream');
var config = require('./config');

gulp.task('default', function () {
    gulp.src('./src/js/app.js')
    // gulp.src(config.webpack.entry.app)
        .pipe(webpack(config.webpack))
        .pipe(gulp.dest(config.js.dest));
});
