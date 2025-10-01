var css = `
#rulesPopup {
	overflow: hidden;
	padding: 0 !important;
	margin: auto;
}
#rulesPopup .modal-dialog {
	overflow: visible;
	max-width: 1116px;
}
.modal-body {
	align-items: center;
	padding: 7% 10%;
	font-size: calc(12px + .5vw);
}
#rulesPopup .modal-content {
	background-color: transparent;
	border: none;
}
.modal-popout-bg {
	background-image: url("./images/Registered_Pop_up.png");
	background-size: 100% 100%;
	background-repeat: no-repeat !important;
	width: 100%;
}
.modal-dialog {
	max-width: 1116px !important;
	max-height: 563px !important;
	top: 98px;
	margin: auto;
}
#popup-header {
	font-size: 5vw;
	font-weight: 500;
	font-family: Oswald;
	line-height: 20px;
	color: #E1261D;
	width: 100%;
	top: 10px;
	position: relative;
	text-align: center;
	z-index: 9;
}
#rulesPopup .exitButton {
	background: url('./images/challenge/ExitBtn_UP.png') no-repeat;
	width: 52px;
	height: 52px;
	border: 0;
	background-position: center;
	position: absolute;
	top: 40px;
  right: 40px;
}

#rulesPopup .exitButton:hover {
	background: url('./images/challenge/ExitBtn_DWN.png') no-repeat;

}
.modal-body .col {
	display: flex;
	justify-content: left;
	align-items: center;
}
.modal-body .header {
	font-size: calc(32px + .5vw);
	line-height: calc(32px + .5vw);
	font-family: Roboto-Medium;
	text-align: center;
	padding-bottom: 50px;
	margin-right: 30px;
	margin-left: 30px;
}
.center-img {
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 93px;
	flex-wrap: wrap;
}
.modal-body .col .right {
	display: flex;
	justify-content: left;
	align-items: center;
}
.modal-body .row {
	padding-bottom: 15%;
}
.modal-body .row:last-of-type {
	padding-bottom: 20px !important;
}
.modal-body .right {
	margin-left: 40px;
}
.right img {
	display: block !important;
}
.block-container>img {
	margin-left: 40px;
}
.info-box {
	border: 2px solid lightgray;
	position: absolute;
	background-color: white;
	border-radius: 15px;
	top: -30px;
	left: 0;
	padding: 15px;
	color: #6D6D6D;
	font-family: Roboto-Medium;
	z-index: 999;
	position: absolute;
	right: auto;
	display: none;
}

.more-info-3,.more-info-4 {
	top: -60px;
}
.x-btn {
	float: right;
	cursor: pointer;
}

.x-btn:hover {
content:url('images/challenge/Exit_DWN.png')

}
.more-info-img {
	cursor: pointer;
}

.more-info-img:hover {
	content:url('images/challenge/More_Icon_DWN.png')
}
.info-box-header {
	border-bottom: 2px solid #E1261C;
	height: 30px;
	margin-bottom: 5px;
}
@media only screen and (max-width: 705px) {
	.modal-body .col {
		padding-bottom: 10%;
	}
	.modal-body .row {
		padding-bottom: 0;
	}
	.modal-dialog {
		top: 20px;
	}
}
`,
  head = document.head || document.getElementsByTagName('head')[0],
  style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet) {
  // This is required for IE8 and below.
  style.styleSheet.cssText = css2;
} else {
  style.appendChild(document.createTextNode(css));
}
document.write(`<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<div class="modal hide fade" id="rulesPopup">
		<div class="modal-dialog">
			<div class="modal-content">
				<div id="popup-header" style="">
					RULES
				</div>
				<div class="modal-body modal-popout-bg">
					<button class="exitButton" data-backdrop="static" data-keyboard="false" data-target="#rulesPopup"></button>
					<div class="header">
						VCERT Performance+ Challenge `+ thisChallengNumber + `.
					</div>
					<div class='row'>
						<div class='col'>
							<div class="center-img"><img src="images/challenge/Complete_Icon.png"></div>
							<div class="block-container" style=" display: block">
								<div class="right emphasisBold">
									YOU HAVE 2 WEEKS TO<br>
									COMPLETE THIS CHALLENGE.
								</div><!--<img class="more-info-img" onclick="moreInfo(1)" src="images/challenge/More_Icon_UP.png">
								<div class="info-box more-info-1">
									<div class="info-box-header"><img class='x-btn' src="images/challenge/Exit_UP.png"></div>To palce on the leaderboard, you must earn at lease 65 points. If you score less than 65 points, you automatically get 0 points. Don't worry, you can always Retake the challenge.
								</div>-->
							</div>
						</div>
						<div class='col'>
							<div class="center-img"><img src="images/challenge/Passing%20Score_Icon.png"></div>
							<div class="block-container" style=" display: block">
								<div class="right emphasisBold">
									MINIMUM PASSING<br>
									SCORE = 65 POINTS.
								</div><img class="more-info-img" onclick="moreInfo(2)" src="images/challenge/More_Icon_UP.png">
								<div class="info-box more-info-2">
									<div class="info-box-header"><img class='x-btn' src="images/challenge/Exit_UP.png"></div>To place on the leaderboard, you must earn at least 65 points. If you score less than 65 points, you automatically get 0 points. Don’t worry, you can always Retake the challenge.
								</div>
							</div>
						</div>
					</div>
					<div class='row'>
						<div class='col'>
							<div class="center-img"><img src="images/challenge/Available%20Points_Icon.png"></div>
							<div class="block-container" style=" display: block">
								<div class="right emphasisBold">
									TOTAL AVAILABLE<br>
									POINTS = 80 POINTS.
								</div><img class="more-info-img" onclick="moreInfo(3)" src="images/challenge/More_Icon_UP.png">
								<div class="info-box more-info-3">
									<div class="info-box-header"><img class='x-btn' src="images/challenge/Exit_UP.png"></div>To earn the highest points possible and be in the running for 1st place, you must answer each question correctly. You can try each question 2x, but every time you miss a question, you lose points.
								</div>
							</div>
						</div>
						<div class='col'>
							<div class="center-img"><img src="images/challenge/Retakes_Icon.png"></div>
							<div class="block-container" style=" display: block">
								<div class="right emphasisBold">
									RETAKES
								</div><img class="more-info-img" onclick="moreInfo(4)" src="images/challenge/More_Icon_UP.png">
								<div class="info-box more-info-4">
									<div class="info-box-header"><img class='x-btn' src="images/challenge/Exit_UP.png"></div>If you fail this challenge, you’ll have to wait 1 week before you can try again. Don’t give up! You can still earn at least 70 points and place on the leaderboard in the next round!
								</div>
							</div>
						</div>
					</div>
				</div>
			</div><!-- /.modal-content -->
		</div><!-- /.modal-dialog -->
	</div><!-- /.modal -->
</body>
</html>`);

$(window).on('load', function () {

  $("#rulesPopup").modal({
    backdrop: 'static',
    keyboard: false,
    show: true
  });

  $('#rulesPopup').on('show.bs.modal', function () {
    $(this).find('.modal-body').css({
      'max-height': '100%'
    });
  });

  $(".exitButton").on('click', function () {
    $('#rulesPopup').modal('hide');
  });
        
  function showRegContinue () {
    $("#rulesPopup").modal('show');
  }

$('.x-btn').on('click', function () {
  $('.info-box').hide();

})
});

function moreInfo(info) {
  $('.info-box').hide();
  switch(info) {
    case 1:
      $('.more-info-1').fadeIn();
      break;
    case 2:
      $('.more-info-2').fadeIn();
      break;
    case 3:
      $('.more-info-3').fadeIn();
      break;
    case 4:
      $('.more-info-4').fadeIn();
      break;
    default:
      // code block
  }

}