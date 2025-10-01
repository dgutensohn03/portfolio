/// <reference path="../JS/jQuery/jquery-1.11.1.js" />
/// <reference path="../../Assets/AppSettings.js" />
/// <reference path="Helpers.js" />

if (AppSettings.respondSlideOnly) {
	var originalWidth = $('#content-container').width();
	var originalHeight = $('#content-container').height();
} else {
	var originalWidth = $('#shell').width();
	var originalHeight = $('#shell').height();
}

function Respond() {
	var totalWidth = $('body').outerWidth();
	var totalHeight = $('body').outerHeight();

	if (AppSettings.respondSlideOnly) {
		var sibHeight = 40;
		$('#content-container').siblings().each(function () {
			sibHeight += $(this).outerHeight();
		})

		var zoomX = totalWidth / originalWidth;
		var zoomY = (totalHeight - sibHeight) / originalHeight;

		// Take the smaller zoom so the content won't need letterboxes.
		var zoom = zoomX > zoomY ? zoomY : zoomX;

		if (zoom < 1)
			zoom = 1;

		$('#content-container').children().css({
			'-ms-transform': 'scale(' + zoom + ')',
			'-moz-transform': 'scale(' + zoom + ')',
			'-o-transform': 'scale(' + zoom + ')',
			'-webkit-transform': 'scale(' + zoom + ')',
			'transform': 'scale(' + zoom + ')',

			'-ms-transform-origin': '0 0',
			'-moz-transform-origin': '0 0',
			'-o-transform-origin': '0 0',
			'-webkit-transform-origin': '0 0',
			'transform-origin': '0 0'
		});

		$('#content-container').css({
			'width': (zoom * originalWidth) + 'px',
			'height': (zoom * originalHeight) + 'px'
		});

		$('#shell').width(zoom * originalWidth);
		$('#shell').height(zoom * originalHeight + sibHeight);
	} else {
		var zoomX = totalWidth / originalWidth;
		var zoomY = (totalHeight) / originalHeight;

		var zoom = zoomX > zoomY ? zoomY : zoomX;

		$('#shell').css({
			'-ms-transform': 'scale(' + zoom + ')',
			'-moz-transform': 'scale(' + zoom + ')',
			'-o-transform': 'scale(' + zoom + ')',
			'-webkit-transform': 'scale(' + zoom + ')',
			'transform': 'scale(' + zoom + ')',

			'-ms-transform-origin': '0 0',
			'-moz-transform-origin': '0 0',
			'-o-transform-origin': '0 0',
			'-webkit-transform-origin': '0 0',
			'transform-origin': '0 0'
		});
	}
}

if (AppSettings.isResponsive) {
	Respond();
	$(window).resize(function () {
		Respond();
	});
}
