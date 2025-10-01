/// Custom event enumeration.
var XMEvent = new function () {
    //-- State
    this.Paused = 'paused';
    this.Resumed = 'resumed';
    this.Loaded = 'loaded';
    this.Completed = 'completed';
    this.Seeking = 'seeking';
    this.Seek = 'seek';
    this.Closing = 'closing';

    //-- Sound
    this.VolumeChanged = 'volumechanged';

	//-- Navigation
    this.LessonChanged = 'lessonchanged';
    this.SlideChanged = 'slidechanged';
    this.Navigated = 'navigated';
    this.BeforeNavigate = 'beforenavigate';
};