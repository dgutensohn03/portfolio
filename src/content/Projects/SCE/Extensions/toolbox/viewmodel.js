(function () {
	var extensions = [
		'wiki',
		'calculator'
	];
	
	var template = kendo.template($('#toolbox-item-template').html());
	
	for (var i = 0; i < extensions.length; i++) {
		var extension = ExtensionManager.extensions[extensions[i]];
		console.log(extension);
		var toolboxItem = template(extension);
		$('#extension-toolbox').append(toolboxItem);
		(function (target) {
			$('#extension-toolbox').children().last().click(function () {
				target.Toggle();
			});
		})(extension);
	}
})();