var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
	templateCache = require('gulp-angular-templatecache');

var sourceFiles = {
   scripts: ['app/**/*.js', 'scripts/**/*.js', '!scripts/**/*.min.js'],
   css: ['assets/**/*.css'],
   html: ['app/**/*.html']
};

gulp.task('default',[], function(){
     console.log("Command:\n   serve - run live reload server");
});

gulp.task('minify', function(){
    gulp.src([sourceFiles.scripts, sourceFiles.css])
        .pipe(uglify())
        .pipe(gulp.dest('dest'))
});

gulp.task('watch', function(){
    gulp.watch([sourceFiles.scripts, sourceFiles.css], ['minify']);
});

gulp.task('templateCache', function () {
  return gulp.src('app/**/*.tpl.html')
    .pipe(templateCache({module: 'journal'}))
    .pipe(gulp.dest('dest/template'));
});

gulp.task('serve', ['templateCache'], function () {
    browserSync({
        notify: false,
        server: {
            baseDir: '.'
        }
    });
 
    gulp.watch([sourceFiles.html, sourceFiles.scripts, sourceFiles.css], reload);
});