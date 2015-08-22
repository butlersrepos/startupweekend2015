var Main = {
	wavs: ['moo1', 'moo2', 'chicken1', 'duck1', 'pig1', 'sheep1'],
	init: function() {
		$('.the-button' ).on('click', function() {
			// PLAY SOUND
			var wavNum = Math.floor(Math.random() * Main.wavs.length);
			$('#' + Main.wavs[wavNum] )[0].play();
		});
	}
};

Main.init();

