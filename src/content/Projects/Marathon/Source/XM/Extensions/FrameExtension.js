/// <reference path="../../JS/jQuery/jquery-1.11.1.min.js" />
/// <reference path="../Shell.js" />
/// <reference path="../../JS/KendoUI/kendo.web.js" />

function FrameExtension() {
	var self = this;

	/// Object containing the settings loaded from XML.
	this.settings = null;

	/// Install this extension into the shell.
	this.Install = function () {
		XMLog('Installing the ' + this.settings.displayName + ' extension...');

		// Create a button for the shell.
		if (this.settings.buttonSize != 'hide') {
			$('#navleft').append(shellButtonTemplate(this.settings));
			$('#' + this.settings.id + '-button').click(this.Show.bind(this));
		}
	}

	this.Show = function () {
		if (!this.isOpen) {
			ExtensionManager.AutoHide();

			$('#contents').attr('src', 'Extensions/' + this.settings.id + '/view.html');

			Shell.Blur();
			
			ExtensionManager.trigger(this.settings.id + '-show');
		}
	};
}