var LMS = kendo.observable({
	Initialize: function () {
		var waitForStoryline = setInterval(function () {
			XMLog('Waiting for Storyline...');
			if (window.parent && window.parent != window) {
				clearInterval(waitForStoryline);

				// Initialize can only be called once!
				if (LMS.initializeCalled)
					return;

				LMS.initializeCalled = true;

				//LMS.CreateExtraHelpers();

				if (window.parent && window.parent != window)
					LMS.handle = window.parent;

				// Storyline wrapped courses are never in demo mode.
				LMS.inDemoMode = !LMS.handle.g_bLMSPresent;

				// Try to locate the API.
				if (!LMS.inDemoMode) {
					LMS.ParseSuspendData();
				}

				// Record the time we started the course.
				LMS.timeStarted = new Date();

				// Let everyone know we are done.
				LMS.trigger(XMEvent.Loaded);
			}
		}, 200);
	},

	Finish: function () {
		// Finish can only be called once!
		if (this.finishCalled)
			return;

		// Dump stuff to Storyline?
		this.WriteSuspendData();

		this.finishCalled = true;
	},

	Get: function (key) {
		if (!this.CheckConnection())
			return '';

		return this.handle.GetPlayer().GetVar(key);
	},

	Set: function (key, value) {
		if (!this.CheckConnection())
			return;

		var result = this.handle.GetPlayer().SetVar(key, value);
	},

	Complete: function () {
		if (!this.CheckConnection())
			return;

		// Set the user's status to passed or complete.
		if (AppSettings.LMS.automaticPassing)
			this.handle.SetStatus(LMSValue.Passed);
		else
			this.handle.SetStatus(LMSValue.Complete);

		// If automatic scoring is enabled, give the user 100%
		if (AppSettings.LMS.automaticScoring)
			this.Score(AppSettings.LMS.maxScore, AppSettings.LMS.minScore, AppSettings.LMS.maxScore);
	},

	WriteSuspendData: function () {
		var rawData = JSON.stringify(this.suspendData);

		// Optional LZW compression for suspend data.
		if (AppSettings.LMS.compressSuspendData)
			rawData = LZString.compressToEncodedURIComponent(rawData);

		this.SuspendData(rawData);
	},

	ParseSuspendData: function () {
		var rawData = this.SuspendData();

		// Optional LZW compression for suspend data.
		if (AppSettings.LMS.compressSuspendData)
			rawData = LZString.decompressFromEncodedURIComponent(rawData);

		if (rawData.length == 0)
			return;

		try {
			this.suspendData = JSON.parse(rawData);
		} catch (err) {
			XMError('Invalid suspend data. Error: ' + err.message);
			XMDump(rawData);
		}

		// Ensure bookmark is created:
		if (this.suspendData.bookmark == undefined)
			this.suspendData.bookmark = '';
	},

	CheckConnection: function (suppressAlert) {
		suppressAlert = suppressAlert || false;

		var connected = typeof (this.handle != undefined) && this.handle != null;

		if (!connected && !suppressAlert) this.AlertDisconnect();

		return connected;
	},

	CreateExtraHelpers: function () {
		// Set up alias functions for enumerated Get/Set keys:
		for (var i in LMSKey) {
			if (!(i in this)) {
				this[i] = (function (key) {
					return function (value) {
						if (value) {
							this.Set(LMSKey[key], value);
						}

						return this.Get(LMSKey[key]);
					}
				})(i);
			}
		}
	},

	Score: function (value, min, max) {
		if (!this.CheckConnection())
			return;

		return this.handle.lmsAPI.SetScore(value, min, max);
	},

	Bookmark: function (value) {
		if (value)
			this.SaveToSuspendData('bookmark', value);

		return this.GetFromSuspendData('bookmark');
	},

	SuspendData: function (value) {
		if (value) {
			this.handle.lmsAPI.SetBookmark(value);
		}

		return this.handle.lmsAPI.GetBookmark();
	}
});

var LMSKey = {
	//-- Progress
	Bookmark: 'lessonLocation',
	SuspendData: 'suspendData',
};

var LMSValue = {
	NotAttempted: 'not attempted',
	Incomplete: 'incomplete',
	Complete: 'complete',
	Passed: 'passed',
	Failed: 'failed',
	True: 'true',
	False: 'false'
};