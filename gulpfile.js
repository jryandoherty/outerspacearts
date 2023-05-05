
const sass = require('gulp-sass')(require('sass'));
const fileinclude = require('gulp-file-include');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();



// Static Server + watching scss/html files
gulp.task('serve', function() {

    browserSync.init({
        server: "./dist"
    });
    // sass

    gulp.task('sass', function(){
      return gulp.src('scss/**/*.scss')
        .pipe(sass()) // Converts Sass to CSS with gulp-sass
        .pipe(gulp.dest('dist/css'))
        .pipe(browserSync.stream());
    });

    gulp.watch('./scss/**/*.scss', gulp.series(['sass']));
    gulp.watch("dist/*.html").on('change', browserSync.reload);
});





// html includes

const paths = {
  scripts: {
    src: './',
    dest: './dist/'
  }
};

async function includeHTML(){
  return gulp.src([
    '*.html',
    '!nav.html', // ignore
    '!current-ex.html', // ignore
    '!header.html', // ignore
    '!footer.html' // ignore
    ])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'

    }))
    .pipe(gulp.dest(paths.scripts.dest));
}

exports.default = includeHTML;
