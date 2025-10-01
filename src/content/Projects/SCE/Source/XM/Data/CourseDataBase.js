/// <reference path="../../../Assets/Course.js" />
/// <reference path="../../JS/KendoUI/kendo.web.js" />

// Extra functionality for the CourseData object. Enclosed to prevent direct access.
(function () {
	var CourseDataBase = {
		progress: null
	};

	$.extend(CourseData, CourseDataBase);

	// Bind the head to the CourseData for title and metadata.
	kendo.bind($('head'), CourseData);
})();