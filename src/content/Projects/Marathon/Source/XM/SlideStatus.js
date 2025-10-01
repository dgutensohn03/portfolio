var SlideStatus = new function() {
	/// This slide is not yet available.
	this.Locked = 0;
	/// This slide is available, but not yet viewed.
	this.Unlocked = 1;
	/// This slide is has been viewed, but not yet completed.
	this.Viewed = 2;
	/// This slide is complete.
	this.Complete = 3;
};

var LoadingStatus = new function () {
	/// Waiting for a request.
	this.Waiting = 0;
	/// The content has been requested.
	this.Requested = 1;
	/// The content is still loading.
	this.Loading = 2;
	/// The content has finished loading and is ready to accept commands.
	this.Complete = 3;
};