const inlineCss = require("gulp-inline-css");
const gulp = require("gulp");

gulp.task("default", () => {
    return gulp.src(__dirname + "./build/index.html")
        .pipe(inlineCss())
        .pipe(gulp.dest('build/index.html'));
});