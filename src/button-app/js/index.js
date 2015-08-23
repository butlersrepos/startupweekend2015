var Main = {
	wavNames  : ['moo1', 'moo2', 'chicken1', 'duck1', 'pig1', 'sheep1'],
	wavs      : [],
	init      : function() {
		// Setup sounds
		var isAndroid = device.platform.toLowerCase() == 'android';
		Main.wavNames.map( function( ele ) {
			var url = 'sounds/' + ele + '.wav';
			url = isAndroid ? '/android_asset/www/' + url : url;
			Main.wavs.push( new Media( url ) );
		} );

		Main.setupClick();
		getLastClicked();
	},
	setupClick: function() {
		$( '.the-button' ).on( 'click', function() {
			// PLAY SOUND
			var wavNum = Math.floor( Math.random() * Main.wavs.length );
			Main.wavs[wavNum].play();

			writeTimestamp();
		} );
	}
};

function getLastClicked() {
	window.resolveLocalFileSystemURL( cordova.file.dataDirectory + "/last-clicked.txt", gotFile, fail );
}

function writeTimestamp() {
	window.resolveLocalFileSystemURL( cordova.file.dataDirectory,
		function( fileEntry ) {
			fileEntry.getFile( 'last-clicked.txt', {create:false}, function( file ) {
				file.createWriter( function( fileWriter ) {
					fileWriter.write( new Blob( ['Sat Aug 22 2015 20:16:19 GMT-0400 (EDT)'], { type: 'text/plain' } ) );
					console.log( "i did it?" );
				}, function() {
					console.log( "i failed" );
				} );
			} );
		},
		function() {
			console.log("wtf did i do wrong!");
		} );
}

function gotFile( fileEntry ) {
	fileEntry.file( function( file ) {
		var reader = new FileReader();

		reader.onloadend = function( e ) {
			console.log( "Text is: " + this.result );
		}

		reader.readAsText( file );
	} );
}

function fail( evt ) {
	console.log( evt.target.error.code );
}

function onDeviceReady() {
	Main.init();
}

document.addEventListener( 'deviceready', onDeviceReady, false );
