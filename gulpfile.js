const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const sourcemaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');



gulp.task('sass', function() {
    return gulp.src('src/scss/style.scss')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({browserlist: ['last 10 versions', 'opera 12', '> 1%', 'ie 8']}))
        .pipe(cleanCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css/'));
});

gulp.task('js', function() {
    return gulp.src('src/js/app.js')
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('js/'));
});

gulp.task('watch', function() {
    gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
    gulp.watch('src/js/**/*.js', gulp.series('js'));
});