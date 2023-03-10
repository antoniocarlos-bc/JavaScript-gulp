const {series} = require("gulp")
const gulp = require("gulp")
const babel = require("gulp-babel")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")


function padrao(cb) {
     gulp.src("src/**/*.js")
        .pipe(babel( {
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(concat("codigo.min.js"))
        .pipe(gulp.dest("build"))
    return cb()
}

exports.default = series(padrao)