//-- jQuery Extensions
$.extend({
	/// Get a list of all query string values.
	getUrlVars: function () {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for (var i = 0; i < hashes.length; i++) {
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	},

	/// Get a query string value by variable name.
	getUrlVar: function (name) {
		return $.getUrlVars()[name];
	},

	/// Load a script dynamically, will cache if AppSettings.development is set to false.
	fetchScript: function (url, callback, cache) {
		cache = cache || !AppSettings.development;

		var loaded = true;

		// Check if we've already loaded this in a script tag.
		$('script[type="text/javascript"]').each(function () {
			return loaded = (url != $(this).attr('src'));
		});

		if (loaded) {
			$.ajax({
				type: 'GET',
				url: url,
				success: callback,
				dataType: 'script',
				cache: cache
			});
		} else {
			if ($.isFunction(callback)) {
				callback.call(this);
			};
		};
	}
});

// Forward and cancel touch events to mouse events.
function ForwardTouch(mouseEventType, callback) {
	return function (e) {
		// Cancel the touch event
		e.stopPropagation();
		e.preventDefault();

		// touch events are nested sometimes.
		if (!('touches' in e)) {
			e = e.originalEvent;
		}

		// Create a mouse event to fire
		var mouseEvent = document.createEvent('MouseEvent');
		mouseEvent.initMouseEvent(mouseEventType, true, true, window, e.detail,
			e.touches[0].screenX, e.touches[0].screenY,
			e.touches[0].clientX, e.touches[0].clientY,
			false, false, false, false, 0, null);

		this.dispatchEvent(mouseEvent);
	}
}

//-- Browser detection.

/// Returns true if the user is browsing from Chrome, most of the time.
function IsInChrome() {
	if (/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent))
		return true;
	return false;
}

/// Returns true if the user is browsing from Safari, most of the time.
function IsInSafari() {
	if (/Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent)) {
		// Chrome pretends to be Safari.
		if (!/Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent))
			return true;
	}
	return false;
}

/// Returns true if the user is browsing from Mobile Safari, most of the time.
function IsInMobileSafari() {
	return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

/// Returns true if the user is browsing from Android, most of the time.
function IsInAndroid() {
	var isAndroid = navigator.userAgent.toLowerCase().indexOf('android') != -1;
	if (isAndroid == null)
		return false;
	return isAndroid;
}

function IsInFirefox() {
	var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
	if (isFirefox == null)
		return false;
	return isFirefox;
}

function IsInIE8() {
	return $('html').hasClass('k-ie8');
}

function IsInIE9() {
	var isIE9 = navigator.userAgent.toLowerCase().indexOf('msie 9.0') != -1;
	if (isIE9 == null)
		return false;
	return isIE9;
}

//-- Logging

function XMLog(message) {
	try {
		console.log("Debug - " + message);
	} catch (error) { }
};

function XMDump(object) {
	try {
		console.log(object);
	} catch (error) { }
};

function XMWarn(message) {
	try {
		console.warn("Warning - " + message);
	} catch (error) { }
};

function XMError(message) {
	try {
		console.error("Error - " + message);
	} catch (error) { }
};

//-- ui elements

function MagicText(element, width, height, name) {
	element.text.visible = false;
	var div = document.createElement('div');
	div.id = name;
	div.innerHTML = element.text.text;
	div.style.width = width + 'px';
	div.style.height = height + 'px';
	div.style.zindex = 900;
	div.style.overflowY = 'auto';

	$('#domElementContainer').append(div);

	var domElement = new createjs.DOMElement(div);
	domElement.x = -domElement.htmlElement.offsetLeft;
	domElement.y = -domElement.htmlElement.offsetTop;

	element.addChild(domElement);
}

function ClearMagicText(name) {
	if (name != undefined)
		$('#domElementContainer').remove('#' + name);
	else
		$('#domElementContainer').html('');
}

function MagicDrop(element, width, height, name, prompt, callback) {
	var select = document.createElement('select');
	select.id = name;
	var defaultOption = document.createElement('option');
	defaultOption.value = '';
	defaultOption.text = prompt;
	select.options.add(defaultOption);
	for (var i = 0; i < element.data.length; i++) {
		var option = document.createElement('option');
		option.text = element.data[i].label;
		select.options.add(option);
	}
	select.onchange = callback;
	select.style.width = width + 'px';
	select.style.height = height + 'px';
	select.style.zindex = 1000;
	select.dataContext = element;

	$('#domElementContainer').append(select);

	var domElement = new createjs.DOMElement(select);
	domElement.x = -domElement.htmlElement.offsetLeft;
	domElement.y = -domElement.htmlElement.offsetTop;

	element.addChild(domElement);
}

function MagicTextArea(element, width, height, name) {
	var textarea = document.createElement('textarea');
	textarea.id = name;
	textarea.style.width = width + 'px';
	textarea.style.height = height + 'px';
	textarea.style.zindex = 900;

	$('#domElementContainer').append(textarea);

	var domElement = new createjs.DOMElement(textarea);
	domElement.x = -domElement.htmlElement.offsetLeft;
	domElement.y = -domElement.htmlElement.offsetTop;

	element.addChild(domElement);
}