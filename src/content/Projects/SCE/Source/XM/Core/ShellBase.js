/// <reference path="../XM/SlideStatus.js" />
/// <reference path="../../JS/KendoUI/kendo.web.js" />

// Extra functionality for the Shell object. Enclosed to prevent direct access.
(function () {
	var ShellBase = {
		//-- Navigation Properties
		currentLessonNumber: 1,
		currentSlideNumber: 1,

		//-- State
		isPaused: false,
		contentStatus: LoadingStatus.Waiting,

		//-- Data Store
		data: new Object(),

		//-- Misc
		volume: 100,
		lastVolume: 100,

		playbackProgress: 0,
		playbackMax: 0,

		//-- Bindable Properties
		currentSlideObject: null
	};

	$.extend(Shell, ShellBase);
})();