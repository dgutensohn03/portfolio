var activeTool = 'cursor-button';

/**** Drawing API ****/

var MarkerColor = {
	Black: '#000000',
	White: '#ffffff',
	Red: '#ff0000',
	Green: '#00ff00',
	Blue: '#0000ff',
	Yellow: '#ffff00',
	Cyan: '#00ffff',
	Magenta: '#ff00ff'
};

var HighlighterColor = {
	Yellow: '#ffff00',
	Green: '#00ff00',
	Cyan: '#00ffff',
	Magenta: '#ff00ff'
}

var ToolSize = {
	Small: 1,
	Medium: 4,
	Large: 8,
	XLarge: 12
};

function PathNode(x, y, color, size, operation, alpha, start) {
	this.x = x;
	this.y = y;
	this.color = color;
	this.size = size;
	this.operation = operation;
	this.alpha = alpha;
	this.start = start || false;
}

var markerTool = {
	size: ToolSize.Small,
	color: MarkerColor.Black,
	operation: 'source-over',
	alpha: 1
};

var highlighterTool = {
	size: ToolSize.XLarge,
	color: HighlighterColor.Yellow,
	operation: 'source-over',
	alpha: 0.5
};

var eraserTool = {
	operation: 'destination-out',
	size: ToolSize.XLarge,
	color: 'rgba(0,0,0,1)',
	alpha: 1
};

var drawingTool = {
	size: ToolSize.XLarge,
	color: MarkerColor.Cyan,
	operation: 'source-over',
	alpha: 1
}

var context = document.getElementById('drawing').getContext("2d");
var drawingPoints = [];
var offset;

function OnStartDrawing(e) {
	if (activeTool != 'marker-button' && activeTool != 'highlighter-button' && activeTool != 'eraser-button') {
		e.preventDefault();
		return;
	}

	$('#drawing').on('mousemove touchmove', OnDraw);
	$('#drawing').on('mouseup touchend', OnStopDrawing);
	$('#drawing').on('mouseout', OnStopDrawing);

	// touch events are nested.
	if(!('pageX' in e)) {
		e = e.originalEvent;
	}

	offset = $(this).offset();

	if ('targetTouches' in e) {
		drawingPoints.push(new PathNode(
				(e.targetTouches[0].pageX - offset.left) * (1 / drawingScale),
				(e.targetTouches[0].pageY - offset.top) * (1 / drawingScale),
				drawingTool.color,
				drawingTool.size,
				drawingTool.operation,
				drawingTool.alpha,
				true));
	} else {
		drawingPoints.push(new PathNode(
				(e.pageX - offset.left) * (1 / drawingScale),
				(e.pageY - offset.top) * (1 / drawingScale),
				drawingTool.color,
				drawingTool.size,
				drawingTool.operation,
				drawingTool.alpha,
				true));
	}
	
}

function OnDraw(e) {
	// touch events are nested.
	if(!('pageX' in e)) {
		e = e.originalEvent;
	}

	if ('targetTouches' in e) {
		drawingPoints.push(new PathNode(
				(e.targetTouches[0].pageX - offset.left) * (1 / drawingScale),
				(e.targetTouches[0].pageY - offset.top) * (1 / drawingScale),
				drawingTool.color,
				drawingTool.size,
				drawingTool.operation,
				drawingTool.alpha));
	} else {
		drawingPoints.push(new PathNode(
				(e.pageX - offset.left) * (1 / drawingScale),
				(e.pageY - offset.top) * (1 / drawingScale),
				drawingTool.color,
				drawingTool.size,
				drawingTool.operation,
				drawingTool.alpha));
	}

	// Stop the page from scrolling.
	e.preventDefault();
}

function OnStopDrawing(e) {
	$('#drawing').off('mousemove touchmove', OnDraw);
	$('#drawing').off('mouseup touchend', OnStopDrawing);
	$('#drawing').off('mouseout', OnStopDrawing);
}

function Render() {
	context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas

	context.lineJoin = 'round';
	context.lineCap = 'round';

	for (var i = 0; i < drawingPoints.length; i++) {
		var p = drawingPoints[i];

		if (p.start) {
			//XMLog('begin path');
			context.beginPath();
			context.moveTo(drawingPoints[i].x - 1, drawingPoints[i].y);

			context.globalCompositeOperation = p.operation;
			context.globalAlpha = p.alpha;
			context.lineWidth = p.size;
			context.strokeStyle = p.color;
		}

		//XMLog('draw line ' + p.x + ' ' + p.y);
		context.lineTo(p.x, p.y);

		if (i == drawingPoints.length - 1 || drawingPoints[i + 1].start) {
			//XMLog('stroke')
			context.stroke();
		}
	}
}

// Render at 1000 / frameRate intervals to prevent lag from mousemove frequency.
setInterval(Render, 1000 / 30);

$('#drawing').on('mousedown touchstart', OnStartDrawing);

// Define some helper functions for Flash
function GetActiveTool() {
	return activeTool;
}

function GetDrawingTool() {
	return JSON.stringify(drawingTool);
}

function GetDrawingPoints() {
	return JSON.stringify(drawingPoints);
}

/**** Toolbar Positioning ****/
$('.radial-menu li:nth-child(1)').click(function (e) {
	$('#content-float').css('position', 'relative');
	$('#content-float').css('float', 'right');

	// Snap left.
	$('#toolbar').removeClass('bottom');
	$('#toolbar').removeClass('right');
	$('#toolbar').removeClass('horizontal');

	$('#toolbar').addClass('vertical');
});

$('.radial-menu li:nth-child(3)').click(function (e) {
	$('#content-float').css('position', 'relative');
	$('#content-float').css('float', 'left');

	// Snap right.
	$('#toolbar').removeClass('bottom');
	$('#toolbar').removeClass('horizontal');

	$('#toolbar').addClass('vertical');
	$('#toolbar').addClass('right');
});

$('.radial-menu li:nth-child(2)').click(function (e) {
	$('#content-float').css('position', 'absolute');
	$('#content-float').css('bottom', '0px');
	$('#content-float').css('float', 'none');

	// Snap top.
	$('#toolbar').removeClass('bottom');
	$('#toolbar').removeClass('right');
	$('#toolbar').removeClass('vertical');

	$('#toolbar').addClass('horizontal');
});

$('.radial-menu li:nth-child(4)').click(function (e) {
	$('#content-float').css('position', 'relative');
	$('#content-float').css('float', 'none');

	// Snap bottom.
	$('#toolbar').removeClass('right');
	$('#toolbar').removeClass('vertical');

	$('#toolbar').addClass('horizontal');
	$('#toolbar').addClass('bottom');
});

/**** Tool Click Events ****/

function OnSelectTool(tool) {
	if (activeTool == tool.id)
		return;

	// IE9 and 10 do not support pointer-events so we need to hide the canvas when the cursor tool is selected to allow for input.
	if ((IsInIE9() || IsInIE10())) {
		if (tool.id == 'cursor-button') {
			$('#drawing').hide();
		} else {
			$('#drawing').show();
		}		
	}

	$('#drawing').css('pointer-events', 'none');
		

	$('#' + activeTool).removeClass('active');

	if ($('#' + activeTool).hasClass('is-extension')) {
		XMLog('Hiding ' + activeTool);
		ExtensionManager.Hide(activeTool.split('-')[0]);
	}

	activeTool = tool.id;
	$('#' + activeTool).addClass('active');

	if ($('#' + activeTool).hasClass('is-extension')) {
		XMLog('Showing ' + activeTool);
		ExtensionManager.Show(activeTool.split('-')[0]);
	}
}

$('#home-button').click(function (e) {
	$('.popup-button').removeClass('current-lesson');
	Shell.ModuleHome();

	drawingPoints = [];
	Render();
});

$('#cursor-button').click(function (e) {
	OnSelectTool(this);
});

$('#timer-button').click(function (e) {
	OnSelectTool(this);
});

$('#glossary-button').click(function (e) {
	OnSelectTool(this);
});

$('#notepad-button').click(function (e) {
	OnSelectTool(this);
});

$('#marker-button').click(function (e) {
	OnSelectTool(this);

	$('#drawing').css('pointer-events', 'all');

	drawingTool = markerTool;
});

$('#highlighter-button').click(function (e) {
	OnSelectTool(this);

	$('#drawing').css('pointer-events', 'all');

	drawingTool = highlighterTool;
});

$('#eraser-button').click(function (e) {
	OnSelectTool(this);

	$('#drawing').css('pointer-events', 'all');

	drawingTool = eraserTool;
});

$('#credits-button').click(function (e) {
	OnSelectTool(this);
});

/**** Tool Sub Buttons ****/

var tickFunction;

function UpdateTimerButtonStates() {
	if (tickFunction != null && tickFunction != undefined) {
		$('#timer-start').attr('disabled', true);
		$('#timer-stop').removeAttr('disabled');
	} else {
		var tenMin = parseInt($($('#timer span')[0]).text());
		var oneMin = parseInt($($('#timer span')[1]).text());
		var tenSec = parseInt($($('#timer span')[2]).text());
		var oneSec = parseInt($($('#timer span')[3]).text());

		if (tenMin + oneMin + tenSec + oneSec == 0) {
			$('#timer-stop').attr('disabled', true);
			$('#timer-start').attr('disabled', true);
		} else {
			$('#timer-stop').removeAttr('disabled');
			$('#timer-start').removeAttr('disabled');
		}
	}
}

UpdateTimerButtonStates();

$('#timer span:nth-child(1), #timer span:nth-child(2), #timer span:nth-child(5)').on('click', function (e) {
	StopTimer();

	var value = parseInt($(this).text());
	value++;
	if (value == 10) value = 0;
	$(this).text(value);

	UpdateTimerButtonStates();
});

// Seconds can't be more than 59.
$('#timer span:nth-child(4)').on('click', function (e) {
	StopTimer();

	var value = parseInt($(this).text());
	value++;
	if (value == 6) value = 0;
	$(this).text(value);

	UpdateTimerButtonStates();
});

function StartTimer() {
	XMLog('Starting timer.');
	clearInterval(tickFunction);
	tickFunction = setInterval(TimerTick, 1000);

	$('#timer-stop').text('Stop');

	UpdateTimerButtonStates();
}

function StopTimer() {
	XMLog('Stopping timer.');
	clearInterval(tickFunction);
	tickFunction = null;

	$('#timer-stop').text('Reset');

	UpdateTimerButtonStates();
}

function ResetTimer() {
	XMLog('Reseting timer.');

	$($('#timer span')[0]).text(0);
	$($('#timer span')[1]).text(0);
	$($('#timer span')[2]).text(0);
	$($('#timer span')[3]).text(0);

	UpdateTimerButtonStates();
}

$('#timer-start').click(StartTimer);

$('#timer-stop').click(function () {
	if ($(this).text() == 'Reset') {
		ResetTimer();
	} else {
		StopTimer();
	}
});

function TimerTick() {
	XMLog('Timer tick.');

	var tenMin = parseInt($($('#timer span')[0]).text());
	var oneMin = parseInt($($('#timer span')[1]).text());
	var tenSec = parseInt($($('#timer span')[2]).text());
	var oneSec = parseInt($($('#timer span')[3]).text());

	if (oneSec != 0) {
		oneSec--;
	} else if (tenSec != 0) {
		tenSec--;
		oneSec = 9;
	} else if (oneMin != 0) {
		oneMin--;
		tenSec = 5;
		oneSec = 9;
	} else if (tenMin != 0) {
		tenMin--;
		oneMin = 9;
		tenSec = 5;
		oneSec = 9;
	} else {
		clearInterval(tickFunction);
		UpdateTimerButtonStates();
	}

	$($('#timer span')[0]).text(tenMin);
	$($('#timer span')[1]).text(oneMin);
	$($('#timer span')[2]).text(tenSec);
	$($('#timer span')[3]).text(oneSec);
}

//-- Connection
$('#connection-indicator').click(function (e) {
	if (LMS.IsConnected())
		alert('You are connected to the server.');
	else
		alert('You are not connected to the server.')
});

//-- Marker Swatches

function OnChangeMarkerSize(e) {
	$('#marker-sizes').children().removeClass('active');
	$(this).addClass('active');

	markerTool.size = parseInt($(this).attr('data-size'));

	drawingTool = markerTool;

	// Stop from re-selecting the tool.
	e.stopImmediatePropagation();
}

function OnChangeMarkerColor(e) {
	$('#marker-colors').children().removeClass('active');
	$(this).addClass('active');

	XMLog('Changing marker color to ' + $(this).css('background-color'));
	markerTool.color = $(this).css('background-color');

	drawingTool = markerTool;

	// Stop from re-selecting the tool.
	e.stopImmediatePropagation();
}

var swatchCount = 1;

for (var size in ToolSize) {
	$('#marker-sizes').append(
		'<span class="swatch' + (swatchCount % 4 == 0 ? ' last' : '') + '" data-size="' + ToolSize[size] + '">' +
			'<img src="Assets/Images/Shell/border-chip.png" />' +
			'<i class="fa fa-circle" style="font-size: ' + ToolSize[size] + 'px;"></i>' +
		' </span>');
	$('#marker-sizes').children().last().click(OnChangeMarkerSize);

	swatchCount++;
}

$('#marker-sizes').children().first().addClass('active');

for (var color in MarkerColor) {
	$('#marker-colors').append(
		'<span class="swatch' + (swatchCount % 4 == 0 ? ' last' : '') + '" style="background-color: ' + MarkerColor[color] + ';">' +
			'<img src="Assets/Images/Shell/border-chip.png" />' +
		'</span>');
	$('#marker-colors').children().last().click(OnChangeMarkerColor);

	swatchCount++;
}

$('#marker-colors').children().first().addClass('active');

//-- Highlighter Swatches

function OnChangeHighlighterSize(e) {
	$('#highlighter-sizes').children().removeClass('active');
	$(this).addClass('active');

	highlighterTool.size = parseInt($(this).attr('data-size'));

	drawingTool = highlighterTool;

	// Stop from re-selecting the tool.
	e.stopImmediatePropagation();
}

function OnChangeHighlighterColor(e) {
	$('#highlighter-colors').children().removeClass('active');
	$(this).addClass('active');

	highlighterTool.color = $(this).css('background-color');

	drawingTool = highlighterTool;

	// Stop from re-selecting the tool.
	e.stopImmediatePropagation();
}

var swatchCount = 1;

for (var size in ToolSize) {
	$('#highlighter-sizes').append(
		'<span class="swatch' + (swatchCount % 4 == 0 ? ' last' : '') + '" data-size="' + ToolSize[size] + '">' +
			'<img src="Assets/Images/Shell/border-chip.png" />' +
			'<i class="fa fa-circle" style="font-size: ' + ToolSize[size] + 'px;"></i>' +
		' </span>');
	$('#highlighter-sizes').children().last().click(OnChangeHighlighterSize);

	swatchCount++;
}

$('#highlighter-sizes').children().last().addClass('active');

for (var color in HighlighterColor) {
	$('#highlighter-colors').append(
		'<span class="swatch' + (swatchCount % 4 == 0 ? ' last' : '') + '" style="background-color: ' + HighlighterColor[color] + ';">' +
			'<img src="Assets/Images/Shell/border-chip.png" />' +
		'</span>');
	$('#highlighter-colors').children().last().click(OnChangeHighlighterColor);

	swatchCount++;
}

$('#highlighter-colors').children().first().addClass('active');

//-- Eraser Swatches

function OnChangeEraserSize(e) {
	$('#eraser-sizes').children().removeClass('active');
	$(this).addClass('active');

	eraserTool.size = parseInt($(this).attr('data-size'));

	drawingTool = eraserTool;

	// Stop from re-selecting the tool.
	e.stopImmediatePropagation();
}

for (var size in ToolSize) {
	$('#eraser-sizes').append(
		'<span class="swatch' + (swatchCount % 4 == 0 ? ' last' : '') + '" data-size="' + ToolSize[size] + '">' +
			'<img src="Assets/Images/Shell/border-chip.png" />' +
			'<i class="fa fa-circle" style="font-size: ' + ToolSize[size] + 'px;"></i>' +
		' </span>');
	$('#eraser-sizes').children().last().click(OnChangeEraserSize);

	swatchCount++;
}

$('#eraser-sizes').children().last().addClass('active');

$('#erase-all-button').click(function (e) {
	drawingPoints = [];
	Render();
});

$('#erase-display-button').click(function (e) {
	if (confirm('This will erase all pencil and highlighter markings on every page, are you sure you wish to continue?')) {
		drawingPoints = [];

		for (var key in LMS.suspendData) {
			if (key.indexOf('_drawing') != -1) {
				LMS.suspendData[key] = [];
			}
		}

		Render();
	}
});

if (IsInIE9() || IsInIE10())
	$('#drawing').hide();

//-- Save drawing data to the LMS for each slide.
Shell.bind(XMEvent.BeforeNavigate, SaveDoodle);

function SaveDoodle() {
	var idString = 'l' + Shell.currentLessonNumber + 's' + Shell.currentSlideNumber + '_drawing';
	LMS.SaveToSuspendData(idString, drawingPoints);
}

Shell.bind(XMEvent.SlideChanged , function () {
	var idString = 'l' + Shell.currentLessonNumber + 's' + Shell.currentSlideNumber + '_drawing';
	drawingPoints = LMS.GetFromSuspendData(idString);

	if (drawingPoints == undefined) drawingPoints = [];
});