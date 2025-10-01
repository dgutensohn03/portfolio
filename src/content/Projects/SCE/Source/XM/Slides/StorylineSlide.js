/// <reference path="/Source/XM/Helpers.js" />
/// <reference path="/Source/XM/Shell.js />
/// <reference path="/Source/XM/Events/XMEvent.js" />

var dataId = 'l' + $.getUrlVar('lesson') + 's' + $.getUrlVar('slide') + '_';

var Slide = kendo.observable({
	//-- State
	isPaused: false,

	//-- Statup code.

	Initialize: function () {
		Shell.BindSlide(this);

		this.trigger(XMEvent.Loaded);
	},

	Destroy: function () {

	},

	/// Tell the shell that this slide has been completed.
	Complete: function () {
		this.trigger(XMEvent.Completed);
	},

	Pause: function () {

	},

	Resume: function () {

	},

	//-- Shell Events
	OnVolumeChanged: function () {

	},

	OnShellSeeking: function (e) {

	},

	OnShellSeek: function (e) {

	}
});

(function () {
	var ApiStatus = {
		NotInitialized: 'NotInitialized',
		Running: 'Running',
		Terminated: 'Terminated'
	}

	var ApiVocab = {
		True: 'true',
		False: 'false'
	}

	var apiStatus = ApiStatus.NotInitialized;

	function Scorm12Api() {
		//-- SCO to LMS Communications API

		// Execution State

		this.LMSInitialize = function (useless) {
			if (useless != "") {
				// TODO : Warn that an empty string must be passed to LMSInitialize for conformance to the standard.
			}

			XMLog('LMSInitialize called from Storyline.');

			return ApiVocab.True;
		};

		this.LMSFinish = function (useless) {
			if (useless != "") {
				// TODO : Warn that an empty string must be passed to LMSFinish for conformance to the standard.
			}

			XMLog('LMSFinish called from Storyline.');
			Shell.StopBlinking();
			parent.ExtensionManager.extensions['main-menu'].Show();

			return ApiVocab.True;
		};

		// Data Transfer

		this.LMSGetValue = function (key) {
			switch (key) {
				case 'cmi.core.lesson_mode':
					return 'browsed';
				case 'cmi.core.lesson_status':
					XMLog('Storyline is asking for a status report, the course is ' + (Shell.IsSlideComplete() ? 'complete.' : 'incomplete.'));
					return Shell.IsSlideComplete() ? 'complete' : 'incomplete';
				default:
					var value = LMS.GetFromSuspendData(dataId + key.replace('.', '_')) || '';
					XMLog('LMSGetValue called from Storyline. Requesting data from: ' + key + '. Returning ' + value + '.');
					return value;
			}			
		};

		this.LMSSetValue = function (key, value) {
			switch (key) {
				case 'cmi.core.exit':
				case 'cmi.core.session_time':
					// The shell handles these items.
					break;
				case 'cmi.core.lesson_status':
					XMLog('Getting a status report from Storyline: ' + value);
					if (value == 'complete' || value == 'passed')
						Slide.Complete();
					break;
				default:
					XMLog('LMSSetValue called from Storyline. Setting ' + key + ' to ' + value + '.');
					return LMS.SaveToSuspendData(dataId + key.replace('.', '_'), value);
			}

			return ApiVocab.True;
		};

		this.LMSCommit = function (useless) {
			XMLog('LMSCommit called from Storyline.');
			return LMS.Commit();
		};

		// State Management

		this.LMSGetLastError = function () {
			//XMLog('LMSGetLastError called from Storyline.');
			return LMS.CheckConnection() ? LMS.handle.LMSGetLastError() : '';
		};

		this.LMSGetErrorString = function () {
			//XMLog('LMSGetErrorString called from Storyline.');
			return LMS.CheckConnection() ? LMS.handle.LMSGetErrorString() : '';
		};

		this.LMSGetDiagnostic = function () {
			//XMLog('LMSGetDiagnostic called from Storyline.');
			return LMS.CheckConnection() ? LMS.handle.LMSGetDiagnostic() : '';
		};
	}

	window.API = new Scorm12Api();
})();

var Shell = parent.Shell;
var LMS = parent.LMS;

Slide.Initialize();