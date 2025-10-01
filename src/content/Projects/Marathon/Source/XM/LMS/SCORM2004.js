/// <reference path="../../JS/LZString/lz-string.min.js" />
/// <reference path="../../../Assets/AppSettings.js" />

var LMS = kendo.observable({
	//-- Properties
	timeStarted: new Date(),

	//-- API

	handle: null,

	initializeCalled: false,
	Initialize: function () {
		// Initialize can only be called once!
		if (this.initializeCalled)
			return;

		this.initializeCalled = true;

		this.CreateExtraHelpers();

		// Are we running in Demo Mode?
		this.inDemoMode = window.location.protocol.toString().indexOf("file:") != -1;
		if (!this.inDemoMode) {
			for (var i = 0; i < AppSettings.LMS.demoWhiteList.length; i++) {
				if (window.location.href.toString().indexOf(AppSettings.LMS.demoWhiteList[i]) != -1) {
					this.inDemoMode = true;
					this.AlertDemo();
				}
			}
		}

		// Try to locate the API.
		if (!this.inDemoMode) {
			// Check parent window for API.
			if (window.parent && window.parent != window)
				this.handle = this.GetHandle(window.parent);

			// Check opening window for API.
			if (this.handle == null && window.opener != null)
				this.handle = this.GetHandle(window.opener);
		}

		// If we don't have a lock on the API, we should probably let the user know. Otherwise, initialize the connection.
		if (!this.CheckConnection(true) && !this.inDemoMode) {
			this.AlertFailedToConnect();
		} else if (!this.inDemoMode) {
			var result = this.handle.Initialize('');
			if (result == LMSValue.True) {
				if (this.LessonMode() != 'browse') {
					if (this.LessonStatus() == LMSValue.NotAttempted) {
						this.LessonStatus(LMSValue.Incomplete);

						this.Set(LMSKey.ScoreMin, AppSettings.LMS.minScore);
						this.Set(LMSKey.ScoreMax, AppSettings.LMS.maxScore);
					}
				}

				this.ParseSuspendData();
			} else {
				this.LogError();
			}
		}

		// Record the time we started the course.
		this.timeStarted = new Date();

		// Let everyone know we are done.
		this.trigger(XMEvent.Loaded);
	},

	finishCalled: false,
	Finish: function () {
		// Finish can only be called once!
		if (this.finishCalled)
			return;

		this.finishCalled = true;

		if (this.CheckConnection()) {
			// Save all data for the next launch.
			this.ExitStatus('suspend');
			this.WriteSuspendData();

			// Record the time spent during this session.
			this.WriteSessionTime();

			// Tell the LMS that we are done.
			var result = this.handle.Terminate('');
			if (result == LMSValue.False)
				this.LogError();
		}
	},

	Terminate: function() {
		this.Finish();
	},

	Get: function (key) {
		if (!this.CheckConnection())
			return '';

		return this.handle.GetValue(key);
	},

	Set: function (key, value) {
		if (!this.CheckConnection())
			return;

		var result = this.handle.SetValue(key, value);

		if (AppSettings.LMS.commitOnChange) this.Commit();

		if (result == LMSValue.False)
			this.LogError();
	},

	Commit: function () {
		if (!this.CheckConnection())
			return;

		return this.handle.Commit('');
	},

	//-- Helpers

	Complete: function () {
		if (!this.CheckConnection())
			return;

		this.LessonStatus(LMSValue.Complete);

		if (AppSettings.LMS.automaticPassing)
			this.SuccessStatus(LMSValue.Passed);

		// If automatic scoring is enabled, give the user 100%
		if (AppSettings.LMS.automaticScoring) {
			this.Score(AppSettings.LMS.maxScore);
			this.ScoreScaled(1);
		}
	},

	WriteSessionTime: function () {
		var currentTime = new Date();
		var delta = new Date();
		var ms = currentTime.getTime() - this.timeStarted.getTime();
		delta.setTime(ms);
		var hours = "000" + delta.getHours();
		var minutes = "0" + delta.getMinutes();
		var seconds = "0" + delta.getSeconds();
		var centiseconds = "0" + Math.round(delta.getMilliseconds() / 10);
		var cmiTime = hours.substr(hours.length - 4) + ':' +
				minutes.substr(minutes.length - 2) + ':' +
				seconds.substr(seconds.length - 2) + '.' +
				centiseconds.substr(centiseconds.length - 2);

		XMLog("Session time reported: " + cmiTime);

		this.SessionTime(cmiTime);
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
	},

	GetHandle: function (win) {
		var attempts = 0;
		while (win.API_1484_11 == null && win.parent != null && win.parent != win) {
			if (++attempts > AppSettings.LMS.maxFindAPIAttempts)
				return null;
			win = win.parent;
		}
		return win.API_1484_11;
	},

	CheckConnection: function (suppressAlert) {
		suppressAlert = suppressAlert || false;

		var connected = typeof (this.handle != undefined) && this.handle != null;

		if (!connected && !suppressAlert) this.AlertDisconnect();

		return connected;
	},

	LogError: function () {
		var errorCode = this.handle.GetLastError();

		if (errorCode == '0')
			return;

		// Attempt to figure out where the error came from:
		try {
			if (arguments.callee.caller.name)
				XMError('Error occured in ' + arguments.callee.caller.name + '.');
		} catch (err) { }

		// Log the details of the error:
		XMError('(' + errorCode + ') - ' + this.handle.GetErrorString(errorCode));
		XMError(this.handle.GetDiagnostic(errorCode));
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
	}
});

var LMSKey = {
	//-- State
	ExitStatus: 'cmi.exit',
	LessonMode: 'cmi.mode',

	//-- Progress
	Bookmark: 'cmi.location',
	LessonStatus: 'cmi.completion_status',
	SuccessStatus: 'cmi.success_status',
	SuspendData: 'cmi.suspend_data',

	SessionTime: 'cmi.session_time',
	TotalTime: 'cmi.total_time',

	//-- Grade
	Score: 'cmi.score.raw',
	ScoreScaled: 'cmi.score.scaled',
	ScoreMax: 'cmi.score.max',
	ScoreMin: 'cmi.score.min',

	//-- Info
	StudentId: 'cmi.learner_id',
	StudentName: 'cmi.learner_name'
};

var LMSValue = {
	NotAttempted: 'not attempted',
	Incomplete: 'incomplete',
	Complete: 'completed',
	Passed: 'passed',
	Failed: 'failed',
	True: 'true',
	False: 'false'
};