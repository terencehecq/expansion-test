
const {watch, src, dest } = require('gulp');
const sass = require('gulp-sass');
const cssbeautify = require('gulp-cssbeautify');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin')

sass.compiler = require('node-sass');


function compileSass() {
    return src('./src/sass/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cssbeautify({
                indent: '  ',
                autosemicolon: true
            }))
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