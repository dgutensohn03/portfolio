/// <reference path="../../JS/jQuery/jquery-1.11.1.min.js" />
/// <reference path="../../JS/KendoUI/kendo.web.js" />

function WindowExtension() {
	var self = this;

	/// Object containing the settings loaded from XML.
	this.settings = null;

	/// Install this extension into the shell.
	this.Install = function () {
		XMLog('Installing the ' + this.settings.displayName + ' extension...');

		// Create a div to hold the window.
		this.container = document.createElement('div');
		this.container.id = this.settings.id + '-window';

		// Check for custom width
		if (this.settings.width !== undefined)
			$(this.container).width(this.settings.width);

		// Check for custom height
		if (this.settings.height !== undefined)
			$(this.container).height(this.settings.height);

		// Load the window view.
		$.get('Extensions/' + this.settings.id + '/view.html', function (view) {
			$(self.container).append(view);

			// Load optional viewmodel script.
			//$.getScript('Extensions/' + self.settings.id + '/viewmodel.js');
			$.ajax({ url: 'Extensions/' + self.settings.id + '/viewmodel.js', dataType: 'script', cache: true })
				.done(function () {
					XMLog('Loaded viewmodel for ' + self.settings.displayName + '.');
				})
				.fail(function (data, status, error) {
					if (error != 'Not Found') {
						XMError('Error occured while loading the viewmodel for ' + self.settings.displayName + '. ' + error);
					} else {
						XMLog('No viewmodel found for ' + self.settings.displayName + '.');
					}
				});
		});

		// Load the window's styles.
		if (document.createStyleSheet) {
			document.createStyleSheet('Extensions/' + this.settings.id + '/styles.css')
		} else {
			$('head').append($('<link href="Extensions/' + this.settings.id + '/styles.css" rel="stylesheet" type="text/css" />'))
		}

		// Add the finished window to the page.
		$('body').append(this.container);

		// Create a button for the shell.
		if (this.settings.buttonSize != 'hide') {
			$('#navleft').append(shellButtonTemplate(this.settings));
			$('#' + this.settings.id + '-button').click(this.Toggle.bind(this));
		}
		
		// Create the window.
		$(this.container).kendoWindow({
			title: this.settings.displayName,
			visible: false,
			// Resizing didn't alter content size for some reason...
			resizable: false,
			actions: [
				"Close"
			],
			close: function () {
				self.isOpen = false;
			}
		});

		this.isOpen = false;
	}

	/// Toggle this window's visibility.
	this.Toggle = function () {
		if (this.isOpen)
			this.Hide();
		else
			this.Show();
	};

	this.Show = function () {
		if (!this.isOpen) {
			ExtensionManager.AutoHide();

			this.isOpen = true;

			$(this.container).data('kendoWindow').open();

			//$('#contents').contents().find('video').removeAttr('controls');
		}
	};

	this.Hide = function (instant) {
		instant = instant || false;
		if (this.isOpen) {
			this.isOpen = false;

			$(this.container).data('kendoWindow').close();

			//$('#contents').contents().find('video').attr('controls', 'true');
		}

	};
}