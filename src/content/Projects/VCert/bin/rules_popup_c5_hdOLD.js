"use strict";

document.write("<!DOCTYPE html>\n<html>\n<head>\n\t<title></title>\n</head>\n<body>\n\t<div class=\"modal hide fade\" id=\"rulesPopup\">\n\t\t<div class=\"modal-dialog\">\n\t\t\t<div class=\"modal-content\">\n\t\t\t\t<div id=\"popup-header\" style=\"\">\n\t\t\t\t\tRULES\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-body modal-popout-bg\">\n\t\t\t\t\t<button class=\"exitButton\" data-backdrop=\"static\" data-keyboard=\"false\" data-target=\"#rulesPopup\"></button>\n\t\t\t\t\t<div class=\"header\">\n\t\t\t\t\t\tVCERT Performance+ Challenge 5.\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Complete_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasisBold\">\n\t\t\t\t\t\t\t\t\tYOU HAVE 2 WEEKS TO<br>\n\t\t\t\t\t\t\t\t\tCOMPLETE THIS CHALLENGE.\n\t\t\t\t\t\t\t\t</div><!--<img class=\"more-info-img\" onclick=\"moreInfo(1)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-1\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>To place on the leaderboard, you must earn at least 80 points. If you score less than 80 points, you automatically get 0 points. Don't worry, you can always Retake the challenge.\n\t\t\t\t\t\t\t\t</div>-->\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Passing%20Score_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasisBold\">\n\t\t\t\t\t\t\t\t\tMINIMUM PASSING<br>\n\t\t\t\t\t\t\t\t\tSCORE = 80 POINTS.\n\t\t\t\t\t\t\t\t</div><img class=\"more-info-img\" onclick=\"moreInfo(2)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-2\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>To place on the leaderboard, you must earn at least 80 points. If you score less than 80 points, you automatically get 0 points. Don\u2019t worry, you can always Retake the challenge.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class='row'>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Available%20Points_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasisBold\">\n\t\t\t\t\t\t\t\t\tTOTAL AVAILABLE<br>\n\t\t\t\t\t\t\t\t\tPOINTS = 100 POINTS.\n\t\t\t\t\t\t\t\t</div><img class=\"more-info-img\" onclick=\"moreInfo(3)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-3\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>To earn the highest points possible and be in the running for 1st place, you must answer each question correctly. You can try each question 2x, but every time you miss a question, you lose points.\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class='col'>\n\t\t\t\t\t\t\t<div class=\"center-img\"><img src=\"images/challenge/Retakes_Icon.png\"></div>\n\t\t\t\t\t\t\t<div class=\"block-container\" style=\" display: block\">\n\t\t\t\t\t\t\t\t<div class=\"right emphasisBold\">\n\t\t\t\t\t\t\t\t\tRETAKES\n\t\t\t\t\t\t\t\t</div><img class=\"more-info-img\" onclick=\"moreInfo(4)\" src=\"images/challenge/More_Icon_UP.png\">\n\t\t\t\t\t\t\t\t<div class=\"info-box more-info-4\">\n\t\t\t\t\t\t\t\t\t<div class=\"info-box-header\"><img class='x-btn' src=\"images/challenge/Exit_UP.png\"></div>If you fail this challenge, you\u2019ll have to wait 1 week before you can try again. Don\u2019t give up! You can still earn at least 80 points and place on the leaderboard in the next round!\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div><!-- /.modal-content -->\n\t\t</div><!-- /.modal-dialog -->\n\t</div><!-- /.modal -->\n</body>\n</html>");
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