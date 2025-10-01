var CCText = new function() {
	this.Toggle = function() {
		$('#cctext-container').fadeToggle('fast');
	};
	
	this.Update = function() {
		$('#cctext-container').html('<div><h4>' + Shell.CurrentLessonData().name + ' - ' + Shell.CurrentSlideData().name + '</h4>' + Shell.CurrentSlideData().cctext + '</div>');
	};
};