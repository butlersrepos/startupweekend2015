var Main = {
	wavNames: ['moo1', 'moo2', 'chicken1', 'duck1', 'pig1', 'sheep1'],
	wavs    : [],
	init    : function() {
		var isAndroid = device.platform.toLowerCase() == 'android';
		Main.wavNames.map( function( ele ) {
			var url = 'sounds/' + ele + '.wav';
			url = isAndroid ? '/android_asset/www/' + url : url;
			Main.wavs.push( new Media( url ) );
		} );

		$( '.the-button' ).on( 'click', function() {
			// PLAY SOUND
			var wavNum = Math.floor( Math.random() * Main.wavs.length );
			Main.wavs[wavNum].play()
		} );
	}
};

function onDeviceReady() {
	Main.init();
}

document.addEventListener( 'deviceready', onDeviceReady, false );
