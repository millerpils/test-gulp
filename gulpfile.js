var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');


gulp.task('sass', function() {
    return gulp.src('app/assets/stylesheets/**/*.scss') // Gets all files ending with .scss in app/scss
 
    .pipe(sass())

    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))

    .pipe(gulp.dest('app/assets/stylesheets'))
    
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync({
    proxy: "localhost:3000"
  })
})

gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/assets/stylesheets/**/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/assets/stylesheets/**/*.scss', browserSync.reload); 
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/assets/javascripts/**/*.js', browserSync.reload); 
});

