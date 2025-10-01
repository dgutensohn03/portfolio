"use strict";

var css = "\n  .modal {\n      overflow: hidden;\n  }\n  .modal-dialog {\n      margin: 50px;\n  }\n  .modal-header {\n    height:30px;\n    padding: 20px;\n    background-color:gray;\n    color:white;\n    display: inline-block;\n  }\n  .modal-title {\n    margin-top:-13px;\n    font-size:16px;\n  }\n  .modal-header .close {\n    padding: 0 5px 0 0 !important;\n    color:#fff;\n  }\n  .modal-body {\n    color:#888;\n    padding: 5px 35px 20px;\n  }\n  .modal-body h3 {\n    text-align: center;\n  }\n  .modal-body p {\n    padding-top:10px;\n    font-size: 1.1em;\n  }\n",
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

document.write("<div id=\"consolePopup\" class=\"modal fade\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n                 <h4 class=\"modal-title\">Console</h4>  \n\n            </div>\n            <div class=\"modal-body\">\n                <button id=\"loadpage\" type=\"button\" onclick=\"addtoTotalPoints(\"HD\", 10);addtoTotalPoints(\"LD\", 10);addtoTotalPoints(\"VPS\", 10);\" class=\"btn btn-primary\">addtoTotalPoints</button>\n            </div>\n\n            <div class=\"modal-body\">\n            <button id=\"loadpage\" type=\"button\" onclick=\"addtoTotalPoints(\"HD\", 10);addtoTotalPoints(\"LD\", 10);addtoTotalPoints(\"VPS\", 10);\" class=\"btn btn-primary\">add</button>\n        </div>\n\n        <div class=\"modal-body\">\n        <button id=\"loadpage\" type=\"button\" onclick=\"addtoTotalPoints(\"HD\", 10);addtoTotalPoints(\"LD\", 10);addtoTotalPoints(\"VPS\", 10);\" class=\"btn btn-primary\">add</button>\n    </div>\n            <div class=\"modal-footer\">\n                \n            </div>\n        </div>\n        <!-- /.modal-content -->\n    </div>\n    <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->");
$(window).on('load', function () {
  var down = {};
  $(window).keydown(function (e) {
    down[e.keyCode] = true;
  }).keyup(function (e) {
    if (down[76] && down[72] && down[84]) {
      $("#consolePopup").modal('show').draggable({
        handle: ".modal-header"
      });
    }

    down[e.keyCode] = false;
  });
});