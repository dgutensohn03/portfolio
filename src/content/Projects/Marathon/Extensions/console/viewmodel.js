/// <reference path="../../Source/XM/Shell.js" />

(function () {
	$('#console-window').addClass('primary-background');

	// Button functionality.

	$('#console-back-button').click(function () {
		Shell.PreviousSlide();
	});

	$('#console-next-button').click(function () {
		Shell.NextSlide();
	});

	$('#console-switch-button').html(AppSettings.hasFlashDefault ? 'HTML' : 'Flash');
	$('#console-switch-button').click(function () {
		AppSettings.hasFlashDefault = !AppSettings.hasFlashDefault;
		$(this).html(AppSettings.hasFlashDefault ? 'HTML' : 'Flash');
		Shell.UpdateSlide();
	});

	$('#console-unlock-button').click(function () {
		Shell.UnlockCourse();
	});

	$('#console-complete-button').click(function () {
		Shell.CompleteCourse();
	});

	// Scrubber (incomplete)
	kendo.bind($('#console-scrubber'), Shell);

	// ~xm shortcut to open console.

	var tildeDown = false;
	var xDown = false;
	var mDown = false;
	
	$(document).keydown(function (e) {
		// Guard repeated input.
		var changed = false;

		if (e.which == 192 && !tildeDown) {
			changed = true;
			tildeDown = true;
		} else if (e.which == 88 && !xDown) {
			changed = true;
			xDown = true;
		} else if (e.which == 77 && !mDown) {
			changed = true;
			mDown = true;
		}
		
		if ((tildeDown ? 1 : 0) + (xDown ? 1 : 0) + (mDown ? 1 : 0) >= 2 && changed) {
			ExtensionManager.extensions['console'].Show();
			$('.xm-log').scrollTop($('.xm-log')[0].scrollHeight);
		}
	});

	$(document).keyup(function (e) {
		if (e.which == 192) tildeDown = false;
		if (e.which == 88) xDown = false;
		if (e.which == 77) mDown = false;
	});

	// Mobile device shake to open console.
	if ('addEventListener' in window) {
		window.addEventListener('shake', function () {
			ExtensionManager.extensions['console'].Toggle();
			$('.xm-log').scrollTop($('.xm-log')[0].scrollHeight);
		}, false);
	}
		
	// Override XMTrace functionality to append to xm-console log.

	var oldLogFunc = XMLog;
	XMLog = function (message) {
		oldLogFunc(message);
		$('.xm-log').append('<div>' + message + '</div>');
		$('.xm-log').scrollTop($('.xm-log')[0].scrollHeight);
	};

	var oldWarnFunc = XMWarn;
	XMWarn = function (message) {
		oldWarnFunc(message);
		$('.xm-log').append('<div class="warn">' + message + '</div>');
		$('.xm-log').scrollTop($('.xm-log')[0].scrollHeight);
	};

	var oldErrorFunc = XMError;
	XMError = function (message) {
		oldErrorFunc(message);
		$('.xm-log').append('<div class="error">' + message + '</div>');
		$('.xm-log').scrollTop($('.xm-log')[0].scrollHeight);
	};
})();