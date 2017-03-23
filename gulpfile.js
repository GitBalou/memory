const gulp = require('gulp');
const connect = require('gulp-connect');


gulp.task('connect', connect.server({
	root: ['dev'],
	port: 1337,
	livereload: true,
	/*open: {
		browser: 'firefox'
	}*/
}));

gulp.task('html', function () {
	return gulp.src('./www/*.html')
	.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch('./www/*.html', ['html']);
});

gulp.task('default', ['connect', 'watch']);