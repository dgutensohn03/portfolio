/// <reference path="../../../Assets/AppSettings.js" />
/// <reference path="../../JS/KendoUI/kendo.web.min.js" />
/// <reference path="../../JS/jQuery/jquery-1.11.1.min.js" />

var ExtensionManager = kendo.observable({
	extensions: new Object(),
	autohide: [],

	// Iterator for initial load.
	i: 0,

	/// Load all extensions from AppSettings.Extensions.
	LoadExtensions: function () {
		i = 0
		if (AppSettings.Extensions.length == 0)
			this.trigger(XMEvent.Loaded);
		else
			this.Load(AppSettings.Extensions[i], AppSettings.Extensions.length == 1);
	},

	Load: function (name, last) {
		var dataSource = new kendo.data.DataSource({
			transport: {
				async: false,
				read: 'Extensions/' + name + '/settings.xml'
			},
			schema: {
				type: 'xml',
				data: 'Settings',
				model: {
					fields: {
						// Required
						id: 'ID/text()',
						displayName: 'DisplayName/text()',
						type: 'Type/text()',

						// Sizing
						width: { field: 'Width/text()' },
						height: { field: 'Height/text()' },

						// Animation
						animationType: { field: 'Animation/@type' },
						animationDirection: { field: 'Animation/@direction' },

						// Shell Nav
						buttonSize: { field: 'ButtonSize/text()', defaultValue: 'wide' },
						buttonTooltip: 'ButtonTooltip/text()',

						// Dialog
						showTitleBar: { field: 'ShowTitleBar/text()', type: 'boolean', defaultValue: true }
					}
				}
			},
			change: last ? LastExtension : CreateExtension
		});

		dataSource.fetch(function () {
			i++;
		});
	},

	LoadNext: function () {
		ExtensionManager.Load(AppSettings.Extensions[i], i == AppSettings.Extensions.length - 1);
	},

	/// Hide all open dialogs.
	AutoHide: function () {
		$.each(this.autohide, function () {
			ExtensionManager.extensions[this].Hide(true);
		});
	}
});

function CreateExtension() {
	var settings = this.data()[0];

	// Make sure the driver for this extension's type is loaded and then install it.
	$.fetchScript('Source/XM/Extensions/' + settings.type + 'Extension.js', function () {
		// Create a new extension with the specified type.
		var newExtension = new window[settings.type + 'Extension']();

		// Pass the new extension its configuration data and install it.
		newExtension.settings = settings;
		newExtension.Install();

		ExtensionManager.extensions[newExtension.settings.id] = newExtension;

		if (settings.type == 'Dialog')
			ExtensionManager.autohide.push(newExtension.settings.id);

		XMLog(newExtension.settings.displayName + ' extension registered...');

		ExtensionManager.LoadNext();
	});
}

function LastExtension() {
	var settings = this.data()[0];

	// Make sure the driver for this extension's type is loaded and then install it.
	$.fetchScript('Source/XM/Extensions/' + settings.type + 'Extension.js', function () {
		// Create a new extension with the specified type.
		var newExtension = new window[settings.type + 'Extension']();

		// Pass the new extension its configuration data and install it.
		newExtension.settings = settings;
		newExtension.Install();

		ExtensionManager.extensions[newExtension.settings.id] = newExtension;

		if (settings.type == 'Dialog')
			ExtensionManager.autohide.push(newExtension.settings.id);

		XMLog(newExtension.settings.displayName + ' extension registered...');

		ExtensionManager.trigger(XMEvent.Loaded);
	});
}

//-- Templates
var titleBarTemplate = kendo.template(
		'<h3 class="left">#=displayName#</h3>' +
		'<button class="ui-button right">&times;</button>' +
		'<hr class="clear" />'
	);

var shellButtonTemplate = kendo.template(
		'<button id="#=id#-button" class="nav-button #=buttonSize#" title="#=buttonTooltip#">#=displayName#</button>\n'
	);