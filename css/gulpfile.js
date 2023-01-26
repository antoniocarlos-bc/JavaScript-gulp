const {series} = require("gulp")
const gulp = require("gulp")
const sass = require('gulp-sass')
const concat = require("gulp-concat")
const uglifycss = require("gulp-uglifycss")


async function transformacaoCSS() {
    gulp.src("src/sass/index.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(uglifycss({ "uglyComments" : false}))
        .pipe(concat("estilo.min.css"))
        .pipe(gulp.dest("build/css"))
}

exports.default = series(transformacaoCSS)