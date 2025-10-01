/// <reference path="../../Source/XM/Shell.js" />
/// <reference path="../../Source/XM/Helpers.js" />
/// <reference path="../../Source/JS/KendoUI/kendo.web.js" />

(function () {
	if (IsInMobileSafari()) {
		$('#volume-container').hide();
		$('#volume-button').hide();
	} else {
		// TODO : Move volume handlers into the Shell to mirror the scrubber code?
		var volume = $('#volume-slider').kendoSlider({
			orientation: 'horizontal',
			step: 1,
			min: 0,
			max: 100,
			smallStep: 2,
			largeStep: 10,
			showButtons: false,
			tickPlacement: 'none',
			slide: function (e) {
				Shell.volume = e.value;
				Shell.trigger(XMEvent.VolumeChanged);

				if (Shell.volume == 0) {
					$('#volume-button').html('<i class="fa fa-volume-off"></i>');
				} else {
					$('#volume-button').html('<i class="fa fa-volume-up"></i>');
				}
			}
		});

		$('#volume-button').click(function () {
			if (Shell.volume == 0) {
				Shell.volume = Shell.lastVolume;
				$('#volume-button').html('<i class="fa fa-volume-up"></i>');
			} else {
				Shell.lastVolume = Shell.volume;
				Shell.volume = 0;
				$('#volume-button').html('<i class="fa fa-volume-off"></i>');
			}

			$('#volume-slider').kendoSlider('value', Shell.volume);

			Shell.trigger(XMEvent.VolumeChanged);
		});
	}
})();