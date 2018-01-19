
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	cssvars = require('postcss-simple-vars'),
	nested = require('postcss-nested');

	gulp.task('default',function(){
		console.log("hooray");
	});

gulp.task('styles',function(){
	return gulp.src('./app/assets/styles/styles.css')
			.pipe(postcss([cssvars, autoprefixer]))
		   .on('error',function(errorInfo){
		   		console.log(errorInfo.toString());
		   		this.emit('end');
		   })
		   .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch',function(){
	watch('./app/index.html', function(){
		console.log("html changing");
	});
});


watch('./app/assets/styles/**/*.css',function(){
	gulp.start('styles');
});









