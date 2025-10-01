/// <reference path="../../../Assets/Strings/ShellStrings.js" />
/// <reference path="../../JS/KendoUI/kendo.web.js" />

// Base class for the LMS object. Enclosed to prevent direct access.
(function () {
	var LMSBase = {
		//-- User Notifications
		inDemoMode: false,
		hasAlerted: false,

		AlertFailedToConnect: function() {
			if (AppSettings.LMS.enabled && !AppSettings.LMS.suppressWarnings && !this.inDemoMode && !this.hasAlerted) {
				this.hasAlerted = true;
				alert(LMSStrings.FailedToConnect);
				XMWarn('Failed to locate a LMS.');
			}
		},
		
		AlertDisconnect: function () {
			if (AppSettings.LMS.enabled && !AppSettings.LMS.suppressWarnings && !this.inDemoMode && !this.hasAlerted) {
				this.hasAlerted = true;
				alert(LMSStrings.Disconnected);
				XMWarn('LMS connection lost.');
			}
		},

		AlertDemo: function () {
			if (!AppSettings.LMS.suppressDemoPopup && AppSettings.LMS.enabled) {
				alert(LMSStrings.DemoModeEnabled);
				XMLog('Demo Mode enabled.');
			}
		},

		//-- Data
		suspendData: {},

		/// Save data by key. Creates a deep copy by default.
		SaveToSuspendData: function (key, value, deepCopy) {
			deepCopy = deepCopy != undefined ? deepCopy : true;

			if (deepCopy) {
				value = JSON.parse(JSON.stringify(value));
			}
			this.suspendData[key] = value;
		},

		/// Retrieve saved data by key.
		GetFromSuspendData: function (key) {
			return this.suspendData[key];
		}
	};

	// Load the LMS and/or Initialize the Shell.
	if (AppSettings.LMS.enabled) {
		// Load the LMS wrapper specificed in the AppSettings.
		$.fetchScript('Source/XM/LMS/' + AppSettings.LMS.version + '.js', function () {
			// Apply base functionality to the loaded LMS wrapper.
			$.extend(LMS, LMSBase);

			// Initialize the LMS and load the Shell when complete.
			LMS.bind(XMEvent.Loaded, function (e) {
				Shell.Initialize();
			});
			LMS.Initialize();
		});
	} else {
		window.LMS = LMSBase;
		Shell.Initialize();
	}
})();