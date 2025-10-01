var css = `

#registrationPopup {
  display: none;
}
#registrationPopup .modal-dialog{
  overflow: visible;
  max-width: 1116px;
}
.modal-body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16% 13%;
}
#registrationPopup .modal-content {
  background-color: transparent;
  border: none;
}
.modal-popout-bg {
  background-image: url("./images/Registered_Pop_up.png");
  background-size: contain;
  background-repeat: no-repeat !important;
  width: 100%;
}
.modal-dialog {
  max-width: 1116px !important;
  max-height: 563px !important;
  margin: 8rem auto;
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
#registrationPopup #continue-btn {
  background: url('./images/challenge_2/images/Start_Bttn_UP.png') no-repeat;
  background-size: 100%;
  max-width: 631px;
  width: 100%;
  height: auto;
  border: 0;
  background-position: center;
  color: white;
  font-family: Oswald;
  font-size: 2.5vw;
  line-height: 40px;
  font-weight: normal;
  text-align: left;
  padding: 10%;
  cursor: pointer;
}
#registrationPopup #continue-btn:hover {
  background-image: url('/images/LargeBttn_DWN.png');
  color: #E1261C;
}
​
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
document.write(`<div id="registrationPopup" class="modal hide fade">
    <div class="modal-dialog">
        <div class="modal-content "><div id="popup-header" style=" ">REGISTERED!</div>
            <div class="modal-body modal-popout-bg"> <button id="continue-btn" class="next" data-target="#registrationPopup" data-backdrop="static" data-keyboard="false" >CONTINUE</button></div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->`);

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