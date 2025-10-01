/// <reference path="../../Source/XM/Shell.js" />
/// <reference path="../../Source/XM/Helpers.js" />
/// <reference path="../../Source/JS/KendoUI/kendo.web.js" />

(function () {
	if (IsInMobileSafari()) {
		$('#volume-container').hide();
	} else {
		// TODO : Move volume handlers into the Shell to mirror the scrubber code?
		var volume = $('#volume-slider').kendoSlider({
			orientation: 'vertical',
			step: 1,
			min: 0,
			max: 100,
			smallStep: 2,
			largeStep: 10,
			showButtons: false,
			tickPlacement: 'none',
			height: 100,
			slide: function (e) {
				Shell.volume = e.value;
				Shell.trigger(XMEvent.VolumeChanged);

				if (Shell.volume == 0) {
					$('#volume-button > i').addClass('fa-volume-off');
					$('#volume-button > i').removeClass('fa-volume-up');
				} else {
					$('#volume-button > i').removeClass('fa-volume-off');
					$('#volume-button > i').addClass('fa-volume-up');
				}
			}
		});

		volume.resize();

		$('#volume-button').click(function () {
			if (Shell.volume == 0) {
				Shell.volume = Shell.lastVolume;
				$('#volume-button > i').removeClass('fa-volume-off');
				$('#volume-button > i').addClass('fa-volume-up');
			} else {
				Shell.lastVolume = Shell.volume;
				Shell.volume = 0;
				$('#volume-button > i').addClass('fa-volume-off');
				$('#volume-button > i').removeClass('fa-volume-up');
			}

			$('#volume-slider').kendoSlider('value', Shell.volume);

			Shell.trigger(XMEvent.VolumeChanged);
		});
	}
})();