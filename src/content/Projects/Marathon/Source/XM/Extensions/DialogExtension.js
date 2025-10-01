/// <reference path="../../JS/jQuery/jquery-1.11.1.min.js" />
/// <reference path="../Shell.js" />
/// <reference path="../../JS/KendoUI/kendo.web.js" />

function DialogExtension() {
	var self = this;

	/// Object containing the settings loaded from XML.
	this.settings = null;

	/// Install this extension into the shell.
	this.Install = function () {
		XMLog('Installing the ' + this.settings.displayName + ' extension...');

		// Create a div to hold the dialog.
		this.container = document.createElement('div');
		this.container.id = this.settings.id + '-dialog';
		$(this.container).addClass('shell-dialog');

		// Check for custom width
		if (this.settings.width !== undefined)
			$(this.container).width(this.settings.width);

		// Add a reference to this extension to the container for convenience.
		this.container.context = this;

		// Optional bar with extension title and close button.
		if (this.settings.showTitleBar) {
			$(this.container).append(titleBarTemplate(this.settings));
			$(this.container).find('button').click(this.Toggle.bind(this));
		}

		// Load the dialog view.
		$.get('Extensions/' + this.settings.id + '/view.html', function (view) {
			$(self.container).append(view);

			// Load optional viewmodel script.
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

		// Load the dialog's styles.
		if (document.createStyleSheet) {
			document.createStyleSheet('Extensions/' + this.settings.id + '/styles.css')
		} else {
			$('head').append($('<link href="Extensions/' + this.settings.id + '/styles.css" rel="stylesheet" type="text/css" />'))
		}

		// Add the finished dialog to the page.
		$('#responsive-wrapper').append(this.container);

		// Create a button for the shell.
		if (this.settings.buttonSize != 'hide') {
			$('#navleft').append(shellButtonTemplate(this.settings));
			$('#' + this.settings.id + '-button').click(this.Toggle.bind(this));
		}

		// Create animation.
		this.animation = kendo.fx($(this.container))[this.settings.animationType || 'slideIn'](this.settings.animationDirection || 'right');
		$(window).on('resize', function () {
			self.animation = kendo.fx($(self.container))[self.settings.animationType || 'slideIn'](self.settings.animationDirection || 'right');
		});

		this.isOpen = false;
	}

	/// Toggle this dialog's visibility.
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

			this.animation.play()
			
			Shell.Blur();

			$('#contents').contents().find('video').removeAttr('controls');
			
			ExtensionManager.trigger(this.settings.id + '-show');
		}
	};

	this.Hide = function (instant) {
		instant = instant || false;
		if (this.isOpen) {
			this.isOpen = false;

			if (instant)
				$(this.container).hide();
			else {
				this.animation.reverse();
				Shell.Unblur();
			}

			$('#contents').contents().find('video').attr('controls', 'true');
			
			ExtensionManager.trigger(this.settings.id + '-hide');
		}
	};
}