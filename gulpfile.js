// gulpfile.js

// Define variables.
var autoprefixer = require('autoprefixer');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();
var cleancss = require('gulp-clean-css');
var concat = require('gulp-concat');
var del = require('del');
var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
// var notify       = require('gulp-notify');
var log = require('fancy-log');
var postcss = require('gulp-postcss');
// var rename       = require('gulp-rename');
var run = require('gulp-run');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var sassImporter = require('node-sass-tilde-importer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

// Include paths file.
var paths = require('./_assets/gulp_config/paths');

// Process JS
gulp.task('build:scripts', function () {
    return gulp.src(paths.jsFilesGlob)
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.jekyllJsFiles))
        .pipe(gulp.dest(paths.siteJsFiles))
        .on('error', log.error);
});

gulp.task('build:vendor:scripts', function () {
    return gulp.src(paths.vendorJsFilesGlob)
        .pipe(babel())
        .pipe(concat('vendor.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.jekyllJsFiles))
        .pipe(gulp.dest(paths.siteJsFiles))
        .on('error', log.error);
});

// Deletes processed JS.
gulp.task('clean:scripts', function (callback) {
    del([paths.jekyllJsFiles + '**.js', paths.siteJsFiles + '**.js']);
    callback();
});

// Uses Sass compiler to process styles, adds vendor prefixes, minifies, then
// outputs file to the appropriate location.
gulp.task('build:styles', function (callback) {
    return gulp.src(paths.sassFilesGlob)
        .pipe(sourcemaps.init())
        .pipe(sass({importer: sassImporter}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(cleancss())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.jekyllCssFiles))
        .pipe(gulp.dest(paths.siteCssFiles))
        .pipe(browserSync.stream())
        .on('error', log.error);
});

// Deletes CSS.
gulp.task('clean:styles', function (callback) {
    del([paths.jekyllCssFiles + 'main.css',
        paths.siteCssFiles + 'main.css'
    ]);
    callback();
});

// Optimizes and copies image files.
gulp.task('build:images', function () {
    return gulp.src(paths.imageFilesGlob)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.jekyllImageFiles))
        .pipe(gulp.dest(paths.siteImageFiles))
        .pipe(browserSync.stream());
});

// Deletes processed images.
gulp.task('clean:images', function (callback) {
    del([paths.jekyllImageFiles, paths.siteImageFiles]);
    callback();
});

// run jekyll build
gulp.task('build:jekyll', function () {
    var shellCommand = 'bundle exec jekyll build';

    if (process.env.CONTEXT)
        shellCommand = 'JEKYLL_ENV="' + process.env.CONTEXT + '" ' + shellCommand;

    return gulp.src('.')
        .pipe(run(shellCommand))
        .on('error', log.error);
});

// Runs jekyll build command using local config.
gulp.task('build:jekyll:local', function () {
    var shellCommand = 'bundle exec jekyll build -D';

    return gulp.src('.')
        .pipe(run(shellCommand))
        .on('error', log.error);
});

// Deletes the entire _site directory.
gulp.task('clean:jekyll', function (callback) {
    del(['_site']);
    callback();
});

// run html test
gulp.task('test:htmltest', function () {
    var shellCommand = "COMMIT_REF" in process.env ? 'vendor/htmltest' : 'htmltest';

    return gulp.src('.')
        .pipe(run(shellCommand))
        .on('error', log.error);
});

gulp.task('clean', gulp.parallel(
    'clean:jekyll',
    'clean:images',
    'clean:scripts',
    'clean:styles'
));

gulp.task('build:assets', gulp.parallel(
    'build:vendor:scripts',
    'build:scripts',
    'build:styles',
    'build:images'
));

// builds whole site
gulp.task('build', gulp.series('clean', 'build:assets', 'build:jekyll', 'test:htmltest'));

// default task: build site
gulp.task('default', gulp.parallel('build'));

// Special tasks for building and then reloading BrowserSync.
gulp.task('build:jekyll:watch', gulp.series('build:jekyll:local', function (callback) {
    browserSync.reload();
    callback();
}));
gulp.task('build:scripts:watch', gulp.series('build:scripts', function (callback) {
    browserSync.reload();
    callback();
}));

// Static Server + watching files.
// Note: passing anything besides hard-coded literal paths with globs doesn't
// seem to work with gulp.watch().
gulp.task('serve', gulp.series('build', function () {
    log('starting serve');

    browserSync.init({
        server: paths.siteDir,
        ghostMode: false, // Toggle to mirror clicks, reloads etc. (performance)
        logFileChanges: true,
        logLevel: 'debug',
        open: false        // Toggle to automatically open page when starting.
    });

    // Watch site settings.
    gulp.watch(['_config.yml'], gulp.series('build:jekyll:watch'));

    // Watch .scss files; changes are piped to browserSync.
    gulp.watch('_assets/styles/**/*.scss', gulp.series('build:styles'));

    // Watch .js files.
    gulp.watch('_assets/js/**/*.js', gulp.series('build:scripts:watch'));

    // Watch image files; changes are piped to browserSync.
    gulp.watch('_assets/img/**/*', gulp.series('build:images'));

    // Watch posts.
    gulp.watch('_posts/**/*.+(md|markdown|MD)', gulp.series('build:jekyll:watch'));

    // Watch drafts if --drafts flag was passed.
    if (module.exports.drafts) {
        gulp.watch('_drafts/*.+(md|markdown|MD)', gulp.series('build:jekyll:watch'));
    }

    // Watch html and markdown files.
    gulp.watch(['**/*.+(html|md|markdown|MD)', '!_site/**/*.*'], gulp.series('build:jekyll:watch'));

    // Watch RSS feed XML file.
    gulp.watch('feed.xml', gulp.series('build:jekyll:watch'));

    // Watch data files.
    gulp.watch('_data/**.*+(yml|yaml|csv|json)', gulp.series('build:jekyll:watch'));

    // Watch favicon.png.
    gulp.watch('favicon.png', gulp.series('build:jekyll:watch'));
}));
