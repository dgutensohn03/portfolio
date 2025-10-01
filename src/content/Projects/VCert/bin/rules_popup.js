"use strict";

var css = "\n#rulesPopup {\n\toverflow: hidden;\n\tpadding: 0 !important;\n\tmargin: auto;\n}\n#rulesPopup .modal-dialog {\n\toverflow: visible;\n\tmax-width: 1116px;\n}\n.modal-body {\n\talign-items: center;\n\tpadding: 7% 10%;\n\tfont-size: calc(12px + .5vw);\n}\n#rulesPopup .modal-content {\n\tbackground-color: transparent;\n\tborder: none;\n}\n.modal-popout-bg {\n\tbackground-image: url(\"./images/Registered_Pop_up.png\");\n\tbackground-size: 100% 100%;\n\tbackground-repeat: no-repeat !important;\n\twidth: 100%;\n}\n.modal-dialog {\n\tmax-width: 1116px !important;\n\tmax-height: 563px !important;\n\ttop: 98px;\n\tmargin: auto;\n}\n#popup-header {\n\tfont-size: 5vw;\n\tfont-weight: 500;\n\tfont-family: Oswald;\n\tline-height: 20px;\n\tcolor: #E1261D;\n\twidth: 100%;\n\ttop: 10px;\n\tposition: relative;\n\ttext-align: center;\n\tz-index: 9;\n}\n#rulesPopup .exitButton {\n\tbackground: url('./images/challenge/ExitBtn_UP.png') no-repeat;\n\twidth: 52px;\n\theight: 52px;\n\tborder: 0;\n\tbackground-position: center;\n\tposition: absolute;\n\ttop: 40px;\n  right: 40px;\n}\n\n#rulesPopup .exitButton:hover {\n\tbackground: url('./images/challenge/ExitBtn_DWN.png') no-repeat;\n\n}\n.modal-body .col {\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n}\n.modal-body .header {\n\tfont-size: calc(32px + .5vw);\n\tline-height: calc(32px + .5vw);\n\tfont-family: Roboto-Medium;\n\ttext-align: center;\n\tpadding-bottom: 50px;\n\tmargin-right: 30px;\n\tmargin-left: 30px;\n}\n.center-img {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-width: 93px;\n\tflex-wrap: wrap;\n}\n.modal-body .col .right {\n\tdisplay: flex;\n\tjustify-content: left;\n\talign-items: center;\n}\n.modal-body .row {\n\tpadding-bottom: 15%;\n}\n.modal-body .row:last-of-type {\n\tpadding-bottom: 20px !important;\n}\n.modal-body .right {\n\tmargin-left: 40px;\n}\n.right img {\n\tdisplay: block !important;\n}\n.block-container>img {\n\tmargin-left: 40px;\n}\n.info-box {\n\tborder: 2px solid lightgray;\n\tposition: absolute;\n\tbackground-color: white;\n\tborder-radius: 15px;\n\ttop: -30px;\n\tleft: 0;\n\tpadding: 15px;\n\tcolor: #6D6D6D;\n\tfont-family: Roboto-Medium;\n\tz-index: 999;\n\tposition: absolute;\n\tright: auto;\n\tdisplay: none;\n}\n\n.more-info-3,.more-info-4 {\n\ttop: -60px;\n}\n.x-btn {\n\tfloat: right;\n\tcursor: pointer;\n}\n\n.x-btn:hover {\ncontent:url('images/challenge/Exit_DWN.png')\n\n}\n.more-info-img {\n\tcursor: pointer;\n}\n\n.more-info-img:hover {\n\tcontent:url('images/challenge/More_Icon_DWN.png')\n}\n.info-box-header {\n\tborder-bottom: 2px solid #E1261C;\n\theight: 30px;\n\tmargin-bottom: 5px;\n}\n@media only screen and (max-width: 705px) {\n\t.modal-body .col {\n\t\tpadding-bottom: 10%;\n\t}\n\t.modal-body .row {\n\t\tpadding-bottom: 0;\n\t}\n\t.modal-dialog {\n\t\ttop: 20px;\n\t}\n}\n",
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

document.write("<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\t<div class=\"modal hide fade\" id=\"rulesPopup\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div id=\"popup-header\" style=\"\">\n\t\t\t\t\tRULES\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body modal-popout-bg\">\n\t\t\t\t\t<button class=\"exitButton\" data-backdrop=\"static\" data-keyboard=\"false\" data-target=\"#rulesPopup\"></button>\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\tVCERT Performance+ Challenge " + thisChallengNumber + ".\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Complete_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasisBold\">\n\t\t\t\t\t\t\t\t\tYOU HAVE 2 WEEKS TO<br>\n\t\t\t\t\t\t\t\t\tCOMPLETE THIS CHALLENGE.\n\t\t\t\t\t\t\t\t</div><!--<img class=\"more-info-img\" onclick=\"moreInfo(1)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-1\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>To palce on the leaderboard, you must earn at lease 65 points. If you score less than 65 points, you automatically get 0 points. Don't worry, you can always Retake the challenge.\n\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Passing%20Score_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasisBold\">\n\t\t\t\t\t\t\t\t\tMINIMUM PASSING<br>\n\t\t\t\t\t\t\t\t\tSCORE = 65 POINTS.\n\t\t\t\t\t\t\t\t</div><img class=\"more-info-img\" onclick=\"moreInfo(2)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-2\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>To place on the leaderboard, you must earn at least 65 points. If you score less than 65 points, you automatically get 0 points. Don\u2019t worry, you can always Retake the challenge.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Available%20Points_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasisBold\">\n\t\t\t\t\t\t\t\t\tTOTAL AVAILABLE<br>\n\t\t\t\t\t\t\t\t\tPOINTS = 80 POINTS.\n\t\t\t\t\t\t\t\t</div><img class=\"more-info-img\" onclick=\"moreInfo(3)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>To earn the highest points possible and be in the running for 1st place, you must answer each question correctly. You can try each question 2x, but every time you miss a question, you lose points.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Retakes_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasisBold\">\n\t\t\t\t\t\t\t\t\tRETAKES\n\t\t\t\t\t\t\t\t</div><img class=\"more-info-img\" onclick=\"moreInfo(4)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>If you fail this challenge, you\u2019ll have to wait 1 week before you can try again. Don\u2019t give up! You can still earn at least 70 points and place on the leaderboard in the next round!\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div><!-- /.modal-content -->\n\t\t</div><!-- /.modal-dialog -->\n\t</div><!-- /.modal -->\n</body>\n</html>");
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