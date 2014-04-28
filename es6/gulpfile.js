var gulp = require("gulp");
var traceur = require("gulp-traceur");
var gutil = require("gulp-util");

gulp.task("traceur", function () {
  gulp.src("src/*.js")
    .pipe(traceur({sourceMap: true}))
    .on("error", gutil.log)
    .pipe(gulp.dest("dist"))
    ;
});

gulp.task("watch", function () {
  gulp.watch("src/*.js", ["traceur"]);
});