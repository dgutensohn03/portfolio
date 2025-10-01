/// <reference path="../../Source/JS/KendoUI/kendo.web.js" />
/// <reference path="../../Assets/Course.js" />
/// <reference path="../../Source/XM/Data/CourseDataBase.js" />

(function () {
	var groupNumber = null;
	var groupParent = null;
	var groupList = null;
	var l, s;

	for (l = 0; l < CourseData.lessons.length; l++) {
		var lessonItem = document.createElement('li');
		$(lessonItem).attr('data-bind', 'html: lessons[' + l + '].name');
		$('#coursemap').append(lessonItem);

		var slides = document.createElement('ul');
		for (s = 0; s < CourseData.lessons[l].slides.length; s++) {
			if ('group' in CourseData.lessons[l].slides[s]) {
				// Check if our group number changed, if it did we need a new list and name.
				if (CourseData.lessons[l].slides[s].group != groupNumber) {
					// If we are moving directly from one group to another, we need to close the last group.
					if (groupNumber != null) {
						$(slides).append(groupParent);
					}

					// Set our new group number and create the elements.
					groupNumber = CourseData.lessons[l].slides[s].group;
					groupParent = document.createElement('li');
					$(groupParent).addClass('group');
					groupList = document.createElement('ul');

					// Add a toggle button.
					$(groupParent).append('<input type="checkbox" id="g' + groupNumber + '" />')

					// Name the group using groupName override or fall back to slide name.
					if ('groupName' in CourseData.lessons[l].slides[s]) {
						$(groupParent).append('<label for="g' + groupNumber + '">' + CourseData.lessons[l].slides[s].groupName + '</label>');
					} else {
						$(groupParent).append('<label for="g' + groupNumber + '">' + CourseData.lessons[l].slides[s].name + '</label>');
					}

					// Finally, add a sub list for child items.
					$(groupParent).append(groupList);
				}

				// Create a slide list item like normal, but add it to the group instead.
				var slideItem = document.createElement('li');

				$(slideItem).attr('data-bind', 'html: lessons[' + l + '].slides[' + s + '].name, attr: { data-progress: progress[' + l + '][' + s + '] }');

				(function (lesson, slide) {
					$(slideItem).click(function () {
						// If the target slide is not locked, navigate.
						if ($(this).attr('data-progress') != 0) {
							ExtensionManager.AutoHide();
							Shell.GoToSlide(slide, lesson);
						}
					});
				})(l + 1, s + 1);

				$(groupList).append(slideItem);
			} else {
				// Check if we need to close the previous group.
				if (groupNumber != null) {
					$(slides).append(groupParent);
					groupNumber = null;
				}

				// Create a list item for the slide and add click events.
				var slideItem = document.createElement('li');

				$(slideItem).attr('data-bind', 'html: lessons[' + l + '].slides[' + s + '].name, attr: { data-progress: progress[' + l + '][' + s + '] }');
				$(slides).append(slideItem);

				(function (lesson, slide) {
					$(slideItem).click(function () {
						// If the target slide is not locked, navigate.
						if ($(this).attr('data-progress') != 0) {
							ExtensionManager.AutoHide();
							Shell.GoToSlide(slide, lesson);
						}
					});
				})(l + 1, s + 1);
			}
		}
		$('#coursemap').append(slides);
	}
	
	// If the last slide was in a group, we need to close it. TODO : Might need to move this into the lesson loop for multiple lesson support.
	if ('group' in CourseData.lessons[l - 1].slides[s - 1]) {
		$('#coursemap').append(groupParent);
	}

	kendo.bind($('#coursemap'), CourseData);
})();