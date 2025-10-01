"use strict";

var css = "\n#rulesPopup {\n\toverflow: hidden;\n\toverflow-y: auto;\n\tpadding: 30px !important;\n}\n.modal-body>.row>.col {\n\twidth: 375px !important;\n\tmin-width: 300px;\n\tmargin-bottom: 10px;\n}\n.modal-dialog {\n\tmargin: 30px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\theight: 100%;\n\tmin-height: 100%;\n\toverflow-y: initial !important\n}\n#rulesPopup .modal-dialog {\n\toverflow: visible;\n\tmax-width: 1116px;\n\tmin-height: 700px;\n}\n.modal-body {\n\talign-items: center;\n\tpadding: 7% 10%;\n\tfont-size: calc(12px + .5vw);\n}\n#rulesPopup .modal-content {\n\tbackground-color: transparent;\n\tborder: none;\n}\n.modal-popout-bg {\n\tbackground-color: #ffffff;\n\twidth: 100%;\n}\n.modal-content {\n\tborder: 20px solid #ffffff !important;\n\tbackground-color: #ffffff;\n\tborder-radius: 0;\n}\n.modal-border {\n\tborder: 2px solid #E1261D;\n\tpadding: -10px;\n}\n.modal-dialog {\n\tmargin: auto;\n}\n#popup-header {\n\tfont-size: 6rem;\n\tfont-weight: 500;\n\tfont-family: Oswald;\n\tmin-width: 220px;\n\tcolor: #E1261D;\n\tline-height: 20px;\n\twidth: 40%;\n\ttop: 0px;\n\toverflow: visible;\n\theight: 0;\n\tposition: relative;\n\ttext-align: center;\n\tz-index: 8;\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n#popup-header>div {\n\tbackground-color: #ffffff;\n\tposition: relative;\n\ttop: -11px\n}\n#rulesPopup .exitButton {\n\tbackground: url('./images/challenge/ExitBtn_UP.png') no-repeat;\n\twidth: 52px;\n\theight: 52px;\n\tborder: 0;\n\tbackground-position: center;\n\tposition: absolute;\n\ttop: 40px;\n\tright: 40px;\n}\n.exitButton {\n\tz-index: 10;\n}\n#rulesPopup .exitButton:hover {\n\tbackground: url('./images/challenge/ExitBtn_DWN.png') no-repeat;\n}\n.modal-body .col {\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n}\n.modal-body .header {\n\tfont-size: calc(32px + .5vw);\n\tline-height: calc(32px + .5vw);\n\tfont-family: Roboto-Medium;\n\ttext-align: center;\n\tmargin-right: 30px;\n\tmargin-left: 30px;\n}\n.center-img {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-width: 75px;\n\twidth: 90px;\n\tflex-wrap: wrap;\n}\n.modal-body .col .right {\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n}\n.modal-body .row {}\n.modal-body .row:last-of-type {\n\tpadding-bottom: 20px !important;\n}\n.modal-body .right {\n\tmargin-left: 40px;\n}\n.right img {\n\tdisplay: block !important;\n}\n.block-container>img {\n\tmargin-left: 40px;\n}\n.block-container {\n\twidth: 300px;\n}\n.info-box {\n\tborder: 2px solid lightgray;\n\tposition: absolute;\n\tbackground-color: white;\n\tborder-radius: 15px;\n\ttop: -30px;\n\tleft: 0;\n\tpadding: 15px;\n\tcolor: #6D6D6D;\n\tfont-family: Roboto-Medium;\n\tz-index: 999;\n\tposition: absolute;\n\tright: auto;\n\tdisplay: none;\n}\n.more-info-3, .more-info-4 {\n\ttop: -60px;\n}\n.x-btn {\n\tfloat: right;\n\tcursor: pointer;\n}\n.x-btn:hover {\n\tcontent: url('images/challenge/Exit_DWN.png')\n}\n.more-info-img {\n\tcursor: pointer;\n}\n.more-info-img:hover {\n\tcontent: url('images/challenge/More_Icon_DWN.png')\n}\n.info-box-header {\n\tborder-bottom: 2px solid #E1261C;\n\theight: 30px;\n\tmargin-bottom: 5px;\n}\n.emphasis-bold {\n\tfont-family: Roboto-Medium !important;\n\tfont-weight: bold;\n\tcolor: #000;\n}\n#rulesPopup>div>div>div>div.modal-body.modal-popout-bg>div.header-txt {\n\tmargin: 30px;\n\tfont-size: calc(1.5rem + 1.1vw);\n\tline-height: calc(1.5rem + 1.1vw);\n\tfont-family: Roboto-Medium;\n\ttext-align: center;\n\tcolor: #000;\n}\n.red-dot {\n\theight: 6px;\n\twidth: 6px;\n\tbackground-color: #E1261C;\n\tborder-radius: 50%;\n\tdisplay: inline-block;\n}\n@media only screen and (max-width: 937px) {\n\t#popup-header {\n\t\tfont-size: 4.5rem;\n\t}\n\t.block-container {\n\t\twidth: 200px;\n\t}\n\t#rulesPopup .exitButton {\n\t\tbackground: url('./images/challenge/ExitBtn_UP.png') center no-repeat;\n\t\tbackground-size: 55%;\n\t\tcursor: pointer;\n\t\twidth: 52px;\n\t\theight: 52px;\n\t\tborder: 0;\n\t\tposition: absolute;\n\t\ttop: 0px;\n\t\tright: 0px;\n\t}\n\t#rulesPopup .exitButton:hover {\n\t\tbackground: url('./images/challenge/ExitBtn_DWN.png') center no-repeat;\n\t\tbackground-size: 55%;\n\t\ttop: 0px;\n\t\tright: 0px;\n\t}\n\t.modal-body .col {\n\t\tjustify-content: center;\n\t}\n\t.modal-body {\n\t\tpadding: 7%;\n\t}\n\t.modal-content {\n\t\twidth: 60%;\n\t\tmin-width: 320px;\n\t\tmargin-top: 80px;\n\t\tmargin-bottom: 40px;\n\t}\n\t.modal-body .row {\n\t\tpadding: 0;\n\t}\n\t.modal-body>.row>.col {\n\t\twidth: auto;\n\t\tmin-width: 235px;\n\t\tmargin-bottom: 20px;\n\t}\n\t.modal-body .row .col {\n\t\tpadding-top: 20px;\n\t}\n\t.modal-body .right {\n\t\tmargin-left: 20px;\n\t}\n\t.block-container>img {\n\t\tmargin-left: 20px;\n\t}\n}\n",
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

document.write("<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\t<div class=\"modal hide fade\" id=\"rulesPopup\">\n\t\t<div class=\"modal-dialog\" style=\"overflow-y: initial !important\">\n\t\t\t<div class=\"modal-content\">\n\n\t\t\t<div class=\"modal-border\">\n\t\t\t<div id=\"popup-header\">\n\t\t\t<div class=\"flex-c-sb\">\n\t\t\t<div class=\"red-dot\"></div>RULES<div class=\"red-dot\"></div>\n\t\t</div></div>\n\t\t\t\t<div class=\"modal-body modal-popout-bg\">\n\t\t\t\t\t<button class=\"exitButton\" data-backdrop=\"static\" data-keyboard=\"false\" data-target=\"#rulesPopup\"></button>\n\t\t\t\t\t<div class=\"header-txt\">\n\t\t\t\t\tVCERT Performance+ Challenge 6.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Complete_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasis-bold\" style=\"\">\n\t\t\t\t\t\t\t\t\tYOU HAVE 1 WEEK TO \n\t\t\t\t\t\t\t\t\tCOMPLETE THIS CHALLENGE \n\t\t\t\t\t\t\t\t\tFOR IT'S MAXIMUM POINT VALUE.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Passing%20Score_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasis-bold\" style=\"\">\n\t\t\t\t\t\t\t\t\tMINIMUM PASSING<br>\n\t\t\t\t\t\t\t\t\tSCORE = 80 PERCENT\n\t\t\t\t\t\t\t\t</div><img class=\"more-info-img\" onclick=\"moreInfo(2)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-2\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>To place on the leaderboard, you must earn at least 80 percent. If you score less than 80 percent, you automatically get 0 points. Don\u2019t worry, you can always retake the challenge.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Available%20Points_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasis-bold\" style=\"\">\n\t\t\t\t\t\t\t\t\tTOTAL AVAILABLE<br>\n\t\t\t\t\t\t\t\t\tPOINTS = 100 POINTS\n\t\t\t\t\t\t\t\t</div><img class=\"more-info-img\" onclick=\"moreInfo(3)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>To earn the highest points possible and be in the running for 1st place, you must answer each question correctly. You can try each question 2x, but every time you miss a question, you lose points.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Retakes_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasis-bold\" style=\"\">\n\t\t\t\t\t\t\t\t\tRETAKES\n\t\t\t\t\t\t\t\t</div><img class=\"more-info-img\" onclick=\"moreInfo(4)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>If you fail this challenge, don\u2019t give up! You can still retake it to earn points and place on the leaderboard in the next round!\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div><!-- /.modal-content -->\n\t\t</div><!-- /.modal-dialog -->\n\t</div><!-- /.modal -->\n</body>\n</html>");
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

  function showRegContinue() {
    $("#rulesPopup").modal('show');
  }

  $('.x-btn').on('click', function () {
    $('.info-box').hide();
  });
});

function moreInfo(info) {
  $('.info-box').hide();

  switch (info) {
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

    default: // code block

  }
}