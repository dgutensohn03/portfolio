//--NavBarItem
function NavBarExtension() {
    var self = this;

	/// Object containing the settings loaded from XML.
	this.settings = null;

    this.Install = function () {
        XMLog('Installing ' + self.settings.displayName + ' extension...');

        // Load View.
        try {
            $.get('Extensions/' + self.settings.id + '/view.html', function (view) {
                $('#navleft').append(view);
                // Load ViewModel.
                try {
                    $.getScript('Extensions/' + self.settings.id + '/viewmodel.js');
                } catch (error) {
                    XMWarn('No viewmodel found for ' + self.settings.displayName + ' extension.');
                }
            });
        } catch (error) {
            XMWarn('No view found for ' + self.settings.displayName + ' extension.');
        }

        if (document.createStyleSheet) {
            document.createStyleSheet('Extensions/' + self.settings.id + '/styles.css')
        } else {
            $('head').append($('<link href="Extensions/' + self.settings.id + '/styles.css" rel="stylesheet" type="text/css" />'))
        }
    };
}