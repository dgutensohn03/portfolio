var css = `
  .modal {
      overflow: hidden;
  }
  .modal-dialog {
      margin: 50px;
  }
  .modal-header {
    height:30px;
    padding: 20px;
    background-color:gray;
    color:white;
    display: inline-block;
  }
  .modal-title {
    margin-top:-13px;
    font-size:16px;
  }
  .modal-header .close {
    padding: 0 5px 0 0 !important;
    color:#fff;
  }
  .modal-body {
    color:#888;
    padding: 5px 35px 20px;
  }
  .modal-body h3 {
    text-align: center;
  }
  .modal-body p {
    padding-top:10px;
    font-size: 1.1em;
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
document.write(`<div id="consolePopup" class="modal fade">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                 <h4 class="modal-title">Console</h4>  

            </div>
            <div class="modal-body">
                <button id="loadpage" type="button" onclick="addtoTotalPoints("HD", 10);addtoTotalPoints("LD", 10);addtoTotalPoints("VPS", 10);" class="btn btn-primary">addtoTotalPoints</button>
            </div>

            <div class="modal-body">
            <button id="loadpage" type="button" onclick="addtoTotalPoints("HD", 10);addtoTotalPoints("LD", 10);addtoTotalPoints("VPS", 10);" class="btn btn-primary">add</button>
        </div>

        <div class="modal-body">
        <button id="loadpage" type="button" onclick="addtoTotalPoints("HD", 10);addtoTotalPoints("LD", 10);addtoTotalPoints("VPS", 10);" class="btn btn-primary">add</button>
    </div>
            <div class="modal-footer">
                
            </div>
        </div>
        <!-- /.modal-content -->
    </div>
    <!-- /.modal-dialog -->
</div>
<!-- /.modal -->`);

$(window).on('load', function() { 

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