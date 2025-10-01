var css = `
#rulesPopup {
	overflow: hidden;
	overflow-y: auto;
	padding: 30px !important;
}
.modal-body>.row>.col {
	width: 375px !important;
	min-width: 300px;
	margin-bottom: 10px;
}
.modal-dialog {
	margin: 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	min-height: 100%;
	overflow-y: initial !important
}
#rulesPopup .modal-dialog {
	overflow: visible;
	max-width: 1116px;
	min-height: 700px;
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
	background-color: #ffffff;
	width: 100%;
}
.modal-content {
	border: 20px solid #ffffff !important;
	background-color: #ffffff;
	border-radius: 0;
}
.modal-border {
	border: 2px solid #E1261D;
	padding: -10px;
}
.modal-dialog {
	margin: auto;
}
#popup-header {
	font-size: 6rem;
	font-weight: 500;
	font-family: Oswald;
	min-width: 220px;
	color: #E1261D;
	line-height: 20px;
	width: 40%;
	top: 0px;
	overflow: visible;
	height: 0;
	position: relative;
	text-align: center;
	z-index: 8;
	margin-left: auto;
	margin-right: auto;
}
#popup-header>div {
	background-color: #ffffff;
	position: relative;
	top: -11px
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
.exitButton {
	z-index: 10;
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
	margin-right: 30px;
	margin-left: 30px;
}
.center-img {
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 75px;
	width: 90px;
	flex-wrap: wrap;
}
.modal-body .col .right {
	display: flex;
	justify-content: left;
	align-items: center;
}
.modal-body .row {}
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
.block-container {
	width: 300px;
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
.more-info-3, .more-info-4 {
	top: -60px;
}
.x-btn {
	float: right;
	cursor: pointer;
}
.x-btn:hover {
	content: url('images/challenge/Exit_DWN.png')
}
.more-info-img {
	cursor: pointer;
}
.more-info-img:hover {
	content: url('images/challenge/More_Icon_DWN.png')
}
.info-box-header {
	border-bottom: 2px solid #E1261C;
	height: 30px;
	margin-bottom: 5px;
}
.emphasis-bold {
	font-family: Roboto-Medium !important;
	font-weight: bold;
	color: #000;
}
#rulesPopup>div>div>div>div.modal-body.modal-popout-bg>div.header-txt {
	margin: 30px;
	font-size: calc(1.5rem + 1.1vw);
	line-height: calc(1.5rem + 1.1vw);
	font-family: Roboto-Medium;
	text-align: center;
	color: #000;
}
.red-dot {
	height: 6px;
	width: 6px;
	background-color: #E1261C;
	border-radius: 50%;
	display: inline-block;
}
@media only screen and (max-width: 937px) {
	#popup-header {
		font-size: 4.5rem;
	}
	.block-container {
		width: 200px;
	}
	#rulesPopup .exitButton {
		background: url('./images/challenge/ExitBtn_UP.png') center no-repeat;
		background-size: 55%;
		cursor: pointer;
		width: 52px;
		height: 52px;
		border: 0;
		position: absolute;
		top: 0px;
		right: 0px;
	}
	#rulesPopup .exitButton:hover {
		background: url('./images/challenge/ExitBtn_DWN.png') center no-repeat;
		background-size: 55%;
		top: 0px;
		right: 0px;
	}
	.modal-body .col {
		justify-content: center;
	}
	.modal-body {
		padding: 7%;
	}
	.modal-content {
		width: 60%;
		min-width: 320px;
		margin-top: 80px;
		margin-bottom: 40px;
	}
	.modal-body .row {
		padding: 0;
	}
	.modal-body>.row>.col {
		width: auto;
		min-width: 235px;
		margin-bottom: 20px;
	}
	.modal-body .row .col {
		padding-top: 20px;
	}
	.modal-body .right {
		margin-left: 20px;
	}
	.block-container>img {
		margin-left: 20px;
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
		<div class="modal-dialog" style="overflow-y: initial !important">
			<div class="modal-content">

			<div class="modal-border">
			<div id="popup-header">
			<div class="flex-c-sb">
			<div class="red-dot"></div>RULES<div class="red-dot"></div>
		</div></div>
				<div class="modal-body modal-popout-bg">
					<button class="exitButton" data-backdrop="static" data-keyboard="false" data-target="#rulesPopup"></button>
					<div class="header-txt" style="">
					VCERT Performance+ Challenge 8.
					</div>
					<div class='row'>
						<div class='col'>
							<div class="center-img"><img src="images/challenge/Complete_Icon.png"></div>
							<div class="block-container" style=" display: block">
								<div class="right emphasis-bold" style="">
									YOU HAVE 1 WEEK TO 
									COMPLETE THIS CHALLENGE 
									FOR IT'S MAXIMUM POINT VALUE.
								</div>
							</div>
						</div>
						<div class='col'>
							<div class="center-img"><img src="images/challenge/Passing%20Score_Icon.png"></div>
							<div class="block-container" style=" display: block">
								<div class="right emphasis-bold" style="">
									MINIMUM PASSING<br>
									SCORE = 80 PERCENT
								</div><img class="more-info-img" onclick="moreInfo(2)" src="images/challenge/More_Icon_UP.png">
								<div class="info-box more-info-2">
									<div class="info-box-header"><img class='x-btn' src="images/challenge/Exit_UP.png"></div>To place on the leaderboard, you must earn at least 80 percent. If you score less than 80 percent, you automatically get 0 points. Don’t worry, you can always retake the challenge.
								</div>
							</div>
						</div>
					</div>
					<div class='row'>
						<div class='col'>
							<div class="center-img"><img src="images/challenge/Available%20Points_Icon.png"></div>
							<div class="block-container" style=" display: block">
								<div class="right emphasis-bold" style="">
									TOTAL AVAILABLE<br>
									POINTS = 80 POINTS
								</div><img class="more-info-img" onclick="moreInfo(3)" src="images/challenge/More_Icon_UP.png">
								<div class="info-box more-info-3">
									<div class="info-box-header"><img class='x-btn' src="images/challenge/Exit_UP.png"></div>To earn the highest points possible and be in the running for 1st place, you must answer each question correctly. You can try each question 2x, but every time you miss a question, you lose points.
								</div>
							</div>
						</div>
						<div class='col'>
							<div class="center-img"><img src="images/challenge/Retakes_Icon.png"></div>
							<div class="block-container" style=" display: block">
								<div class="right emphasis-bold" style="">
									RETAKES
								</div><img class="more-info-img" onclick="moreInfo(4)" src="images/challenge/More_Icon_UP.png">
								<div class="info-box more-info-4">
									<div class="info-box-header"><img class='x-btn' src="images/challenge/Exit_UP.png"></div>If you fail this challenge, don’t give up! You can still retake it to earn points and place on the leaderboard in the next round!
								</div>
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