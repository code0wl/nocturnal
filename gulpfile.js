// watch changes in materials and add them to source
var gulp = require("gulp"),
    watch = require("gulp-watch");

gulp.task("stream", function () {
    // Endless stream mode
    return watch("./src/materials/**.*.js", {ignoreInitial: false})
        .pipe(gulp.dest("public"));
});

gulp.task("callback", function () {
    // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event
    return watch("css/**/*.css", function () {
        gulp.src("css/**/*.css")
            .pipe(gulp.dest("build"));
    });
});