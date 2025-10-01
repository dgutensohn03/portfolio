"use strict";

var css = "\n\n#registrationPopup {\n  display: none;\n}\n#registrationPopup .modal-dialog{\n  overflow: visible;\n  max-width: 1116px;\n}\n.modal-body {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 16% 13%;\n}\n#registrationPopup .modal-content {\n  background-color: transparent;\n  border: none;\n}\n.modal-popout-bg {\n  background-image: url(\"./images/Registered_Pop_up.png\");\n  background-size: contain;\n  background-repeat: no-repeat !important;\n  width: 100%;\n}\n.modal-dialog {\n  max-width: 1116px !important;\n  max-height: 563px !important;\n  margin: 8rem auto;\n}\n#popup-header {\n  font-size: 5vw;\n  font-weight: 500;\n  font-family: Oswald;\n  line-height: 20px;\n  color: #E1261D;\n  width: 100%;\n  top: 10px;\n  position: relative;\n  text-align: center;\n  z-index: 9;\n}\n#registrationPopup #continue-btn {\n  background: url('./images/challenge_2/images/Start_Bttn_UP.png') no-repeat;\n  background-size: 100%;\n  max-width: 631px;\n  width: 100%;\n  height: auto;\n  border: 0;\n  background-position: center;\n  color: white;\n  font-family: Oswald;\n  font-size: 2.5vw;\n  line-height: 40px;\n  font-weight: normal;\n  text-align: left;\n  padding: 10%;\n  cursor: pointer;\n}\n#registrationPopup #continue-btn:hover {\n  background-image: url('/images/LargeBttn_DWN.png');\n  color: #E1261C;\n}\n\u200B\n",
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

document.write("<div id=\"registrationPopup\" class=\"modal hide fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content \"><div id=\"popup-header\" style=\" \">REGISTERED!</div>\n            <div class=\"modal-body modal-popout-bg\"> <button id=\"continue-btn\" class=\"next\" data-target=\"#registrationPopup\" data-backdrop=\"static\" data-keyboard=\"false\" >CONTINUE</button></div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->");
$(window).on('load', function () {
  $("#registrationPopup").modal({
    backdrop: 'static',
    keyboard: false,
    show: false
  });
  $('#registrationPopup').on('show.bs.modal', function () {
    $(this).find('.modal-body').css({
      'max-height': '100%'
    });
  });
  $("#continue-btn").on('click', function () {
    $('#registrationPopup').modal('hide');
  });

  function showRegContinue() {
    $("#registrationPopup").modal('show');
  }
});