var playerCount = 0;
var audioInstances = new Array();

function createPlayer(thisParent, width, src)
{
	$(thisParent).data('firstTime', 'yes');
	setTimeout(function(){createPlayer2(thisParent, width, src);}, 500);
}

function createPlayer2(thisParent, width, src)
{
	var player = thisParent;
	thisParent.innerHTML = "";
	player.className = 'audioContainer';
	player.style.width = width + "px";
	$(player).data('playing', 'false');
	$(player).data('thisProgress', 0);
	$(player).data('count', playerCount);
	playerCount++;
	
	var playButton = document.createElement("div");
	playButton.className = "playButton";
	player.appendChild(playButton);
	playButton.style.visibility = 'hidden';
	
	var progressText = document.createElement("div");
	progressText.className = "progressText";
	progressText.style.left = (width - 165) + "px";
	progressText.innerHTML = "";
	player.appendChild(progressText);
	
	var soundButton = document.createElement("div");
	soundButton.className = "soundButton";
	soundButton.style.left = (width - 58) + "px";
	player.appendChild(soundButton);
	
	soundButton.onclick = function()
	{
		if(createjs.Sound.volume == 1)
		{
			createjs.Sound.volume = 0;
			soundButton.style.backgroundImage = "url('audio/audio_audioBtn-big-0.png')";
		}
		else if (createjs.Sound.volume == 0.45)
		{
			createjs.Sound.volume = 1;
			soundButton.style.backgroundImage = "url('audio/audio_audioBtn-big-3.png')";
		}
		else if (createjs.Sound.volume == 0.20)
		{
			createjs.Sound.volume = 0.45;
			soundButton.style.backgroundImage = "url('audio/audio_audioBtn-big-2.png')";
		}
		else
		{
			createjs.Sound.volume = 0.20;
			soundButton.style.backgroundImage = "url('audio/audio_audioBtn-big-1.png')";
		}
	}
	
	var progress1 = document.createElement("div");
	progress1.className = "progress1";
	progress1.style.width = (width - 270) + "px";
	progress1.innerHTML = "Play button will appear when audio is loaded.";
	player.appendChild(progress1);
	
	var progress2 = document.createElement("div");
	progress2.className = "progress2";
	player.appendChild(progress2);
	
	var skipLine = document.createElement("div");
	skipLine.className = "skipLine";
	player.appendChild(skipLine);
	
	var progress3 = document.createElement("div");
	progress3.className = "progress3";
	progress3.style.width = (width - 260) + "px";
	player.appendChild(progress3);
	
	progress3.onmousemove = function(e)
	{
		var offset = $(progress3).offset();
		skipLine.style.left = (e.pageX - offset.left + $(progress3).position().left) + "px";
		skipLine.style.visibility = "visible";
	}
	
	progress3.onmouseout = function(e)
	{
		skipLine.style.visibility = "hidden";
	}
	
	progress3.onclick = function(e)
	{
		if(playButton.style.visibility == "visible")
		{
			var tempProgress = (($(skipLine).position().left - 90) / $(progress3).width()) * audioInstances[$(player).data('count')].duration;
			audioInstances[$(player).data('count')].setPosition(tempProgress);
			$(player).data('thisProgress', tempProgress);
		}
	}
	
	playButton.onclick = function ()
	{
		if($(player).data('playing') == 'true')
		{
			$(player).data('playing', 'false');
			playButton.style.backgroundImage = "url('audio/audio_playBtn-big.png')";
			$(player).data('thisProgress', audioInstances[$(player).data('count')].position);
			audioInstances[$(player).data('count')].stop();
		}
		else if($(player).data('playing') == 'false')
		{
			$(player).data('playing', 'true');
			playButton.style.backgroundImage = "url('audio/audio_pauseBtn-big.png')";
			audioInstances[$(player).data('count')].play();
			audioInstances[$(player).data('count')].setPosition($(player).data('thisProgress'));
		}
	}
	
	var loadThis = true;
	
	for(var i = 0; audioInstances.length > i; i++)
	{
		if(audioInstances[i].src == src)
		{
			$(player).data('count', i);
			audioInstances[i] = createjs.Sound.play("sound" + i);
			audioInstances[$(player).data('count')].stop();
			loadThis = false;
			break;
		}
	}
	
	if(loadThis)
	{
		$(player).data('playing', 'preloaded');
		createjs.Sound.alternateExtensions = ["mp3"];
		createjs.Sound.on("fileload", loadHandler, this);
		createjs.Sound.registerSound(src, "sound" + $(player).data('count'));
		function loadHandler(event) {
			playButton.style.visibility = 'visible';
			progress1.innerHTML = "";
			audioInstances[$(player).data('count')] = createjs.Sound.play("sound" + $(player).data('count'));  // play using id. Could also use full sourcepath or event.src.
			audioInstances[$(player).data('count')].stop();
			audioInstances[$(player).data('count')].on("complete", handleComplete, this);
			$(player).data('playing', 'false');
			if($(player).data('firstTime') == 'yes')
			{
				setInterval(function(){updateTime();}, 100);
				$(player).data('firstTime', 'no');
			}
		}
	}
	else
	{
		playButton.style.visibility = 'visible';
		$(player).data('playing', 'false');
		if($(player).data('firstTime') == 'yes')
		{
			setInterval(function(){updateTime();}, 100);
			$(player).data('firstTime', 'no');
		}
	}
	
	function updateTime()
	{
		if($(player).data('playing') == 'true')
		{
			var thisWidth = audioInstances[$(player).data('count')].position / audioInstances[$(player).data('count')].duration;
			var totalMinutes = Math.floor(audioInstances[$(player).data('count')].duration / 60000);
			var currentMinutes = Math.floor(audioInstances[$(player).data('count')].position / 60000);
			var totalSeconds = Math.floor(audioInstances[$(player).data('count')].duration / 1000);
			while(totalSeconds > 59)
			{
				totalSeconds -= 60;
			}
			totalSeconds = (totalSeconds).toString();
			while(totalSeconds.length < 2)
			{
				totalSeconds = "0" + totalSeconds;
			}
			var currentSeconds = Math.floor(audioInstances[$(player).data('count')].position / 1000);
			while(currentSeconds > 59)
			{
				currentSeconds -= 60;
			}
			currentSeconds = (currentSeconds).toString();
			while(currentSeconds.length < 2)
			{
				currentSeconds = "0" + currentSeconds;
			}
			$(player).find('.progress2').css('width', (thisWidth * (width - 260)) + "px");
			$(player).find('.progressText').html(currentMinutes + ":" + currentSeconds + "/" + totalMinutes + ":" + totalSeconds);
		}
		else if($(player).data('playing') == 'false')
		{
			thisWidth = $(player).data('thisProgress') / audioInstances[$(player).data('count')].duration;
			var totalMinutes = Math.floor(audioInstances[$(player).data('count')].duration / 60000);
			var currentMinutes = Math.floor($(player).data('thisProgress') / 60000);
			var totalSeconds = Math.floor(audioInstances[$(player).data('count')].duration / 1000);
			while(totalSeconds > 59)
			{
				totalSeconds -= 60;
			}
			totalSeconds = (totalSeconds).toString();
			while(totalSeconds.length < 2)
			{
				totalSeconds = "0" + totalSeconds;
			}
			var currentSeconds = Math.floor($(player).data('thisProgress') / 1000);
			while(currentSeconds > 59)
			{
				currentSeconds -= 60;
			}
			currentSeconds = (currentSeconds).toString();
			while(currentSeconds.length < 2)
			{
				currentSeconds = "0" + currentSeconds;
			}
			$(player).find('.progress2').css('width', (thisWidth * (width - 260)) + "px");
			$(player).find('.progressText').html(currentMinutes + ":" + currentSeconds + "/" + totalMinutes + ":" + totalSeconds);
		}
		else
		{
			$(player).find('.progress2').css('width',"0px");
			$(player).find('.progressText').html("Loading");
		}
	}
	
	function handleComplete()
	{
		$(player).data('playing', 'false');
		progress1.innerHTML = "";
		if(typeof(onAComplete) == "function")
		{
			onAComplete();
		}
		playButton.style.backgroundImage = "url('audio/audio_playBtn-big.png')";
		$(player).data('thisProgress', 0);
	}
}

function changeSound(player, width, src)
{
	audioInstances[$(player).data('count')].stop();
	$(player).find('.playButton').css('backgroundImage', 'url("audio/audio_playBtn-big.png")');
	createPlayer2(player, width, src);
}

function pausePlayer(player)
{
	if($(player).data('playing') == 'true')
	{
		$(player).data('playing', 'false');
		$(player).find('.playButton').css('backgroundImage', 'url("audio/audio_playBtn-big.png")');
		$(player).data('thisProgress', audioInstances[$(player).data('count')].position);
		audioInstances[$(player).data('count')].stop();
	}
}

function stopPlayer(player)
{
	$(player).data('playing', 'false');
	$(player).find('.playButton').css('backgroundImage', 'url("audio/audio_playBtn-big.png")');
	$(player).data('thisProgress', 0);
	audioInstances[$(player).data('count')].stop();
}

function startPlayer(player)
{
	$(player).data('playing', 'true');
	$(player).find('.playButton').css('backgroundImage', 'url("audio/audio_pauseBtn-big.png")');
	audioInstances[$(player).data('count')].play();
	audioInstances[$(player).data('count')].setPosition($(player).data('thisProgress'));
}