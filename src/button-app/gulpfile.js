var gulp = require( 'gulp' );
var jade = require( 'gulp-jade' );
var sass = require( 'gulp-sass' );

var paths = {
	jade: 'jade/**/*.jade',
	js  : 'js/**/*.js',
	scss: 'scss/**/*.scss'
};

gulp.task( 'build:html', function() {
	gulp.src( paths.jade )
		.pipe( jade() )
		.pipe( gulp.dest( '../../www/button-app' ) );
} );

gulp.task( 'build:css', function() {
	gulp.src( paths.scss )
		.pipe( sass() )
		.pipe( gulp.dest( '../../www/button-app/css/' ) );
} );

gulp.task( 'build:js', function() {
	gulp.src( paths.js )
		.pipe( gulp.dest( '../../www/button-app/js' ) );
} );

gulp.task( 'default', ['build:js', 'build:html', 'build:css'], function() {
	gulp.watch( paths.jade, ['build:html'] );
	gulp.watch( paths.scss, ['build:css'] );
} );