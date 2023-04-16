const { src, dest, series, parallel, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const clean = require("gulp-clean");
const browserSync = require("browser-sync").create();
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const sourcemaps = require("gulp-sourcemaps");
const webpackStream = require("webpack-stream");
const rename = require("gulp-rename");

// Таск компиляции SASS в CSS
function buildSass() {
  return src("src/scss/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        includePaths: ["./node_modules"],
      }).on("error", sass.logError)
    )
    .pipe(
      postcss([
        autoprefixer({
          grid: true,
          overrideBrowserslist: ["last 2 versions"],
        }),
        cssnano(),
      ])
    )
    .pipe(sourcemaps.write())
    .pipe(dest("src/css"))
    .pipe(dest("dist/css"))
    .pipe(browserSync.stream());
}
function buildJs() {
  return src("src/js/index.js")
    .pipe(webpackStream(require("./webpack.config")))
    .pipe(rename("main.min.js"))
    .pipe(dest("src/js"))
    .pipe(dest("dist/js"))
    .pipe(browserSync.stream());
}
// Таск работы с html файлами
function buildHtml() {
  return src("src/**/*.html").pipe(dest("dist")).pipe(browserSync.stream());
}
function browsersync() {
  browserSync.init({
    server: "src/",
    notify: false,
  });
}
// Таск отслеживания изменения файлов и запуск сервера
function serve() {
  watch(["src/js/**/*.js", "!src/js/**/*.min.js"], buildJs);
  watch("src/scss/**/*.scss", buildSass);
  watch("src/**/*.html", html);
}
// Таск копирования статичных файлов
function copy() {
  return src(["src/img/**/*.*"]).pipe(dest("dist/img"));
}

// Таск очистки dist
function cleanDist() {
  return src("dist", { allowEmpty: true }).pipe(clean());
}

// Таск отслеживания изменения файлов
function serve() {
  watch("src/scss/**/*.scss", buildSass);
  watch("src/**/*.html", buildHtml);
}

// Создание дев-сервера
function createDevServer() {
  browserSync.init({
    server: "src",
    notify: false,
  });
}

exports.build = series(cleanDist, buildSass, buildJs, html, copy);
exports.default = series([buildSass, buildJs], parallel(browsersync, serve));
