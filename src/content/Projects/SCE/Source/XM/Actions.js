/// <reference path="Extensions/Extensions.js" />

var ContentAction = {
	ShowExtension: function (id) {
		return function () {
			ExtensionManager.extensions[id].Show();
			$('.loader').hide();
		}
	},

	FirstSlide: function () {
		return function () {
			Shell.UpdateSlide();
		}
	}
}