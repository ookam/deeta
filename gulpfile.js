const gulp    = require('gulp');
const concat    = require('gulp-concat');
const notify  = require("gulp-notify");
const plumber = require("gulp-plumber");
const sass    = require('gulp-sass');
const pug     = require('gulp-pug');
const autoprefixer = require('gulp-autoprefixer');
const uglify  = require('gulp-uglify');
const browserSync = require('browser-sync');
const babel = require("gulp-babel");
const del = require('del');

//gulpコマンドの省略
const { watch, series, task, src, dest, parallel } = require('gulp');


//setting : paths
const paths = {
  'root'    : './docs/',
  'cssSrc'  : './src/scss/**/*.scss',
  'cssDist' : './docs/css/',
  'jsSrc'   : './src/es/**/*.es',
  'jsDist'  : './docs/js/',
  'pugSrc'  : './src/pug/**/*.pug',
  'htmlDist'    : './docs/',
  'staticSrc': './src/static/**',
  'staticDist': './docs/static/'
}


//Sass
task('sass', function () {
  return (
    src(paths.cssSrc)
      .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
      .pipe(sass({
        outputStyle: 'expanded'// Minifyするなら'compressed'
      }))
      .pipe(autoprefixer({
        browsers: ['ie >= 11'],
        cascade: false,
        grid: true
      }))
      .pipe(concat('application.css'))
      .pipe(dest(paths.cssDist))
  );
});

//Pug
task('pug', function () {
  return (
    src([paths.pugSrc, '!./src/pug/**/_*.pug'])
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(pug({
      pretty: true,
      basedir: "./src/pug"
    }))
    .pipe(dest(paths.htmlDist))
  );
});

//staticファイルを移動
task('static', function () {
  return (
    src(paths.staticSrc)
    .pipe(plumber())
    .pipe(dest(paths.staticDist))
  );
});

//staticファイルを移動
task('cname', function () {
  return (
    src("./CNAME")
    .pipe(plumber())
    .pipe(dest(paths.root))
  );
});


//JS Compress
task('js', function () {
  return (
    src(paths.jsSrc)
      .pipe(plumber())
      .pipe(babel())
      .pipe(uglify())
      .pipe(concat('application.js'))
      .pipe(dest(paths.jsDist))
  );
});

// browser-sync
task('browser-sync', () => {
  return browserSync.init({
      server: {
          baseDir: paths.root
      },
      port: 8080,
      reloadOnRestart: true
  });
});

// 起動時にdocsを削除する
task('clean', function(callback){
  return del([
    './docs',
  ], callback);
})

// browser-sync reload
task('reload', (done) => {
  browserSync.reload();
  done();
});

//watch
task('watch', (done) => {
  watch([paths.cssSrc], series('sass', 'reload'));
  watch([paths.jsSrc], series('js', 'reload'));
  watch([paths.pugSrc], series('pug', 'reload'));
  watch([paths.staticSrc], series('static', 'reload'));
  done();
});

task('default', series(task('clean'), parallel('sass', 'js', 'pug', 'static', 'cname'), parallel('watch', 'browser-sync')));
