var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence').use(gulp);
var ngAnnotate = require('gulp-ng-annotate');

// Tasks
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('sass', function(){
  return gulp.src('app/styles/scss/*.scss')
  .pipe(sass()) // Converts Sass to CSS with gulp-sass
  .pipe(gulp.dest('app/styles/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

//Watchers
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/styles/scss/*.scss', ['sass']);
  // Other watchers
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
})

gulp.task('serve', function(callback) {
  runSequence('build', ['setup'], callback);
});
// -------------------------SERVE-----------------------------
gulp.task('setup', function() {
  browserSync.init({
    server: {
      baseDir: 'dist',
    },
  });
});
// -------------------------SERVE-----------------------------

gulp.task('build', function(callback) {
  runSequence('clean:dist', ['sass','js', 'css', 'components', 'images', 'views', 'index'],
  callback
);
});

// -------------------------BUILD-----------------------------

gulp.task('clean:dist', function() {
  return del.sync('dist/*');
});

gulp.task('js', function() {
  return gulp.src('app/js/**/*')
  .pipe(gulpIf('*.js', ngAnnotate()))
  .pipe(gulpIf('*.js', uglify()))
  .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function() {
  return gulp.src('app/styles/css/*')
  .pipe(gulpIf('*.css', cssnano()))
  .pipe(gulp.dest('dist/styles/css'));
});

gulp.task('components', function() {
  return gulp.src('app/bower_components/**/*')
  .pipe(gulp.dest('dist/bower_components/'));
});

gulp.task('images', function() {
  return gulp.src('app/images/**/*')
  .pipe(gulp.dest('dist/images'));
});

gulp.task('views', function() {
  return gulp.src('app/views/**/*')
  .pipe(gulp.dest('dist/views'));
});

gulp.task('index', function() {
  return gulp.src(['app/*.html','app/*.png','app/*.js','app/*.json'])
  .pipe(gulp.dest('dist/'));
});
// -------------------------BUILD-----------------------------
