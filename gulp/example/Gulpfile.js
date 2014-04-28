var gulp = require("gulp");
var gutil = require("gulp-util");
var coffee = require("gulp-coffee");
var sass = require("gulp-sass");
var reload = require("gulp-livereload");
var clean = require("gulp-clean");
var concat = require("gulp-concat");
var connect = require("gulp-connect");

var paths = {
  html: "app/*.html",
  coffee: "app/coffee/*.coffee",
  sass: "app/sass/style.scss",
  dist: "dist"
};

gulp.task("clean", function () {
  return gulp.src(paths.dist, {read: false}).pipe(clean());
});

gulp.task("coffee", function () {
  gulp.src(paths.coffee)
    .pipe(coffee())
    .on("error", gutil.log)
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.dist + "/js"))
    .pipe(connect.reload());
});

gulp.task("sass", function () {
  gulp.src(paths.sass)
    .pipe(sass())
    .on("error", gutil.log)
    .pipe(gulp.dest(paths.dist + "/css"))
    .pipe(connect.reload());
});

gulp.task("build", ["coffee", "sass"]);

gulp.task("default", ["clean"], function () {
  gulp.start("build");
});

gulp.task('connect', connect.server({
  root: ["app", "dist"],
  port: 3000,
  livereload: true
}));

gulp.task('html', function () {
  gulp.src(paths.coffee).pipe(connect.reload());
});

gulp.task("watch", ["connect"], function () {
  gulp.watch(paths.coffee, ["coffee"]);
  gulp.watch(paths.sass, ["sass"]);
  gulp.watch(paths.html, ["html"]);
});

