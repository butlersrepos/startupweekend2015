var gulp = require( 'gulp' );
var jade = require( 'gulp-jade' );
var sass = require( 'gulp-sass' );

var paths = {
	jade: 'jade/**/*.jade',
	scss: 'scss/**/*.scss'
};

gulp.task( 'build:html', function() {
	gulp.src( paths.jade )
		.pipe( jade() )
		.pipe( gulp.dest( './' ) );
} );

gulp.task( 'build:css', function() {
	gulp.src( paths.scss )
		.pipe( sass() )
		.pipe( gulp.dest( 'css/' ) );
} );

gulp.task( 'default', ['build:html', 'build:css'], function() {
	gulp.watch( paths.jade, ['build:html'] );
	gulp.watch( paths.scss, ['build:css']);
} );