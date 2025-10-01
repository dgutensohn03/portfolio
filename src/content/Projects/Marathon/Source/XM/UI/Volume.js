$('#volume-slider').slider({
	value: 100,
	step: 1,
	range: 'min',
	min: 0,
	max: 100,
	slide: function() {
		Shell.volume = $('#volume-slider').slider('value');
		
		if(Shell.volume == 0)
			$('#volume-toggle').attr('src', 'Assets/images/shell/volume-mute.png');
		else
			$('#volume-toggle').attr('src', 'Assets/images/shell/volume.png');
		
		Shell.currentSlideObject.OnVolumeChanged();
	},
	// For some reason the slide event doesn't ever change the volume to 0.
	change: function() {
		Shell.volume = $('#volume-slider').slider('value');
		
		if(Shell.volume == 0)
			$('#volume-toggle').attr('src', 'Assets/images/shell/volume-mute.png');
		else
			$('#volume-toggle').attr('src', 'Assets/images/shell/volume.png');
		
		Shell.currentSlideObject.OnVolumeChanged();
	}
});

$('#volume-toggle').click(function() {
	if(Shell.volume == 0) {
		Shell.volume = Shell.lastVolume;
	} else {
		Shell.lastVolume = Shell.volume;
		Shell.volume = 0;
	}

	$('#volume-slider').slider('value', Shell.volume);

	if(Shell.volume == 0)
		$('#volume-toggle').attr('src', 'Assets/images/shell/volume-mute.png');
	else
		$('#volume-toggle').attr('src', 'Assets/images/shell/volume.png');
	
	Shell.currentSlideObject.OnVolumeChanged();
});