var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

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
