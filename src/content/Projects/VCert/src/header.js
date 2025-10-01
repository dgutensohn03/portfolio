var css = `
.navbar-nav {
	float:right !important;
}
.navbar {
	position: relative;
	min-height: 59px;
	background-color: #ffffff;
	z-index:1006;
	border-radius: 0px;
	border: none;
}
#challenge-btn:hover, #greeting:hover {
	color: black;
	cursor: auto;
}
.gray-line {
	width: 100%;
	background-color: #EEE;
	height: 2px;
	margin: 0;
	padding: 0;
	position: absolute;
	top: 58px;
}
.navbar-header {
	z-index: 2;
	position: absolute;
}
.float-right {
	float:right !important;
}
.navbar-toggle .icon-bar {
	display: block;
	width: 22px;
	height: 2px;
	border-radius: 1px;
	/* color: red; */
	background-color: red;
	border: 1px solid red;
}
.spacer {
	height: 59px;
	pointer-events:none;
}
.navbar-collapse {
	padding-right: 0;
	padding-left: 0;
}
nav {
	z-index: 2;
}
.nav-link {
	cursor: pointer;
}
.navbar-collapse {
	background-color: #ffffff;
}

	.navbar-nav {
		width: 100%;
		margin: 0;
	}
	.navbar-nav .headerVerticalLine {
		margin-top: 0;
		width: 100%;
		height: 2px;
	}
	.navbar-header {
		width: 100%;
	}

.navbar ul>li>a {
	padding: 18px 16px;
}

ul.navbar-nav>li>a {
	padding: 9px 16px 9px 25px;
}

.nav-item a {
	text-transform: uppercase;
}

.nav>li>a:focus, .nav>li>a:hover {
	background-color: transparent !important;
}
#home {
	padding: 8px 16px;
	display: inline-block;
	cursor: pointer !important;
}
.nav-left li {
	float:left;
	display:inline;
}
#header-image {
	background: url("./images/challenge_2/images/Challenge_Heading.png") no-repeat;
	background-size: 100%;
	max-width: 1649px;
	max-height: 97px;
	margin-left: 10%;
	margin-right: 10%;
	background-position: center;
	position: absolute;
	left: 0;
	width: 80%;
	height: 97px;
	top:10px;
	display:none;
	pointer-events: none;
}

    .navbar-header {
        float: none;
    }
    .navbar-left,.navbar-right {
        float: none !important;
    }
    .navbar-toggle {
        display: block;
    }
    .navbar-collapse {
        border-top: 1px solid transparent;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
    }
    .navbar-fixed-top {
        top: 0;
        border-width: 0 0 1px;
    }
    .navbar-collapse.collapse {

    }
    .navbar-nav {
        float: none!important;
        margin-top: 7.5px;
    }
    .navbar-nav>li {
        float: none;
    }
    .navbar-nav>li>a {
        padding-top: 10px;
        padding-bottom: 10px;
	}
	.m-hide {
		display: flex;
	}
	@media only screen and (max-width: 550px) {

		.m-hide {
			display: none !important;
		}
	}
    `,
  head = document.head || document.getElementsByTagName('head')[0],
  style = document.createElement('style');

head.appendChild(style);
style.type = 'text/css';
if (style.styleSheet) {
  // This is required for IE8 and below.
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

document.write(`
	<nav class="navbar navbar-expand-md">
		<div class="row">
			<div class="navbar-header">
				<button class="navbar-toggle"><span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
				<ul class="nav nav-left">
					<li class="logo"></li>
					<li class="nav-item"  id="home"><img onclick="navigateIframe('LandingPage.html')" src="images/Header%20Logo.png"></li>
					<li class="headerVerticalLine m-hide"></li>
					<li class="nav-item">
						<a class="m-hide headerfont larger " id="challenge-btn"></a>
					</li>
					<li class="nav-item float-right">
					<a class="nav-link headerfont m-hide hidden" id="greeting">Greeting</a>
				</li>
					<li class="nav-item float-right">
					<a class="nav-link headerfont m-hide auth-function" onclick="navigateIframe('LoginPage.html')">USER LOGIN</a>
				</li>
				<!-- <li class="nav-item float-right">
				 <a class="nav-link headerfont auth-function" onclick="navigateIframe('AdminLoginPage.html')">ADMIN LOGIN</a> 
			</li>-->
				</ul>

				
			</div>
			<div id="navbarContainer">
				<div id="myNavbar">
					<div id="navExit"></div>
					<ul class="nav navbar-nav float-right">
						<li class="spacer"></li>
						<li class="nav-item">
						<a href="images/VCERT_Video.m4v" class="nav-link headerfont html5lightbox" data-width="980" data-height="642" title="">WELCOME VIDEO</a>
						</li>
						<li class="nav-item">
						<a class="nav-link headerfont" onclick="window.open('./resources/VCERT Performance+ Program Rules_2025.pdf','_blank');">PROGRAM RULES</a>
						</li>
						<li class="nav-item">
						<a class="nav-link headerfont" onclick="navigateIframe('tour.html')">VCERT TOUR</a>
						</li>
						<li class="nav-item">
							<a class="nav-link headerfont hidden" id="greeting">Greeting</a>
						</li>
						<li class="nav-item">
							<a class="nav-link headerfont hidden" id="start-challenge-btn" onclick="navigateIframe('challenge_2.html')">START CHALLENGE</a>
						</li>
						<li class="nav-item">
							<a class="nav-link headerfont hidden" href="#" id="my-challenges-btn">MY CHALLENGES</a>
						</li>
						<li class="nav-item">
							<a class="nav-link headerfont hidden" href="#" id='history-btn'>COURSE HISTORY</a>
						</li>
						<li class="nav-item">
							<a class="nav-link headerfont hidden" id='admin-home-btn' onclick="navigateIframe('AdminIntro.html')">ADMIN HOME</a>
						</li>
						<li class="nav-item">
							<a class="nav-link headerfont hidden" href="#" id='settings-btn'>SETTINGS</a>
						</li>
						<li class="nav-item">
							<a class="nav-link headerfont hidden" id="register-btn" onclick="navigateIframe('Registration.html')">REGISTER</a>
						</li>
						<li class="nav-item">
						<a class="nav-link headerfont auth-function" onclick="navigateIframe('LoginPage.html')">USER LOGIN</a>
						</li>
						<li class="nav-item">
							<a class="nav-link headerfont auth-function" onclick="navigateIframe('AdminLoginPage.html')">ADMIN LOGIN</a>
						</li>
						<li class="nav-item">
							<a class="nav-link headerfont hidden" id="log-out">LOG OUT</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="gray-line"></div>
		<div class="row" id="header-image"></div>
	</nav>
`);
var navExtended = false;
$('.navbar-toggle').on('click', function()
{
	$('#navbarContainer').animate({width: ['toggle', 'swing']}, function(){
		navExtended = true; 
	});
});
$('.navbar-nav>li, #navExit').on('click', function()
{
	navExtended = false;
	$('#navbarContainer').animate({width: ['toggle', 'swing']});
});
$('#navbarContainer').on('mouseleave', function(e){
	if(navExtended)
	{
		navExtended = false;
		$('#navbarContainer').animate({width: ['toggle', 'swing']});
	}
});