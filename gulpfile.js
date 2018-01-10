const gulp = require("gulp");
const clean = require("del");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const minCss = require("gulp-clean-css");
const minHtml = require("gulp-htmlmin");
const npmFiles = require("gulp-npm-files");
const runSequence = require("run-sequence");

gulp.task("min-js", () => gulp.src("components/**/*.js", { base: "." })
	.pipe(babel({ presets: ["env"] }))
	.pipe(uglify())
	.pipe(gulp.dest("./build/"))
);

gulp.task("min-css", () => gulp.src("components/**/*.css", { base: "." })
	.pipe(minCss())
	.pipe(gulp.dest("./build/"))
);

gulp.task("min-html", () => gulp.src("components/**/*.html", { base: "." })
	.pipe(minHtml())
	.pipe(gulp.dest("./build/"))
);

gulp.task("npm-files", () => gulp.src(npmFiles(), { base: "." })
	.pipe(gulp.dest("./build/"))
);

gulp.task("clear-build", () => clean("./build/"));

gulp.task("default", () => runSequence(
	"clear-build",
	"min-js",
	"min-css",
	"min-html",
	"npm-files"
));


