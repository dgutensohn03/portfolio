// HTML5 flavor of config.xml.
var AppSettings = new function () {
	/// Flag denoting that the course is under development, disabling some caching and showing more detailed logs.
	this.development = true;

	// Ensure that the window is big enough to display the whole Shell.
	this.enforceMinimumWindowSize = true;

	// If true, course will respond to window size.
	this.isResponsive = false;
	this.respondSlideOnly = true;

	/// If true the Shell will try to play Flash versions of all slides.
	this.hasFlashDefault = true;

	/// Allow the course to consume url vars on launch like index.html?lesson=2&slide=3.
	this.canConsumeUrlVars = false;

	/// Specify the action that will occur when the course has finished loading. 
	//this.launchAction = ContentAction.ShowExtension('main-menu'); // Toggle these to show main menu first.
	this.launchAction = ContentAction.FirstSlide();

	/// Specify the action that will occur when the next button is clicked on the last slide of a lesson. Comment it out to disable the next button instead.
	//this.lastSlideAction = ContentAction.ShowExtension('main-menu');

	this.NextButton = new function() {
		/// Is the next button locked by default?
		this.locked = false;
	};
	
	this.LMS = new function() {
		this.enabled = true;

		/// LMS Type (SCORM1.2, SCORM2004, AICC, TinCan, Storyline)
		this.version = "SCORM1.2";

		/// Set true to send 100% upon completion.
		this.automaticScoring = true;
		this.minScore = 0;
		this.maxScore = 100;

		/// Set true to send 'passed' instead of 'complete'
		this.automaticPassing = true;

		/// Set false if the LMS has issues with multiple commits.
		this.commitOnChange = true;
		
		/// Set true to use LZW compression on suspend data for large payloads.
		this.compressSuspendData = false;

		/// Max parent document depth to search for API handle.
		this.maxFindAPIAttempts = 10;

		/// Websites this course may be served from as a demo.
		this.demoWhiteList = [
			'clients.xceleratemedia.com',
			'xceleratemedia.com/demos',
			'xm-cloud.cloudapp.net',
			'localhost',
			'127.0.0.1'
		];

		/// Toggle demo and connection alerts.
		this.suppressDemoPopup = true;
		this.suppressWarnings = false;
	};
	
	/**
	 * A list of all extensions included in this project. Extensions can be
	 * installed in the Content/Extensions folder. To enable, add the 
	 */
	this.Extensions = [
		'console',
		'course-map',
		'volume-hover',
		'main-menu'
	];
};