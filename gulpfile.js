
const {watch, src, dest } = require('gulp'),
      sass = require('gulp-sass'),
      cssbeautify = require('gulp-cssbeautify'),
      cssmin = require('gulp-cssmin'),
      rename = require('gulp-rename'),
      imagemin = require('gulp-imagemin'),
      csscomb = require('gulp-csscomb');

sass.compiler = require('node-sass');


function compileSass() {
    return src('./src/sass/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(csscomb())
            .pipe(cssbeautify({
                indent: '  ',
                autosemicolon: true
            }))
            .pipe(dest('./dist/styles'))
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(dest('./dist/styles'));
};
exports.sass = function(){
    watch('./src/sass/*.scss', compileSass)
}


function minifyImg(){
   return src('./src/img/*')
            .pipe(imagemin())
            .pipe(dest('./dist/img'))
}
exports.minify = minifyImg;