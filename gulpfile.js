

var gulp = require('gulp'),
watch = require('gulp-watch'),
cssvars = require('postcss-simple-vars'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer');

gulp.task('default', function(){
	console.log("hello worod");
});

gulp.task('html', function(){
	console.log(" imagine sometahing useful being done to your html here.. ");
});

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssvars,autoprefixer]))
		.pipe(gulp.dest('./app/temp/styles'));


});

//watch function
gulp.task('watch',function(){

	watch('./app/index.html',function(){

		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css',function(){
		gulp.start('styles');
	});
});