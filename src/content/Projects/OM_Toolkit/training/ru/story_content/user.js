function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ujbS6ncLI1":
        Script1();
        break;
      case "6U1jOuvJvOU":
        Script2();
        break;
      case "6pl7RJDJWRe":
        Script3();
        break;
      case "6OAeyislJzg":
        Script4();
        break;
      case "6JM2rekeRpQ":
        Script5();
        break;
      case "6IjWMCEumXo":
        Script6();
        break;
      case "5qhN8DQC4vr":
        Script7();
        break;
  }
}

function Script1()
{
  document.body.style.backgroundImage = "url('BG.png')";
document.body.style.backgroundSize = "cover";
}

function Script2()
{
  document.body.style.backgroundImage = "url('BG.png')";
document.body.style.backgroundSize = "cover";
}

function Script3()
{
  document.body.style.backgroundImage = "url('BG.png')";
document.body.style.backgroundSize = "cover";
}

function Script4()
{
  document.body.style.backgroundImage = "url('BG.png')";
document.body.style.backgroundSize = "cover";
}

function Script5()
{
  var currentDate = new Date()
var day = currentDate.getDate()
var month = currentDate.getMonth() + 1
var year = currentDate.getFullYear();
var player = GetPlayer();
var newName = day + "/" + month + "/" +year
player.SetVar("DateValue", newName);
}

function Script6()
{
  var iframe= $('iframe')[0];
$('input[type="text"]').css('pointer-events', 'none')
var iframewindow = iframe.contentWindow ? iframe.contentWindow : iframe.contentDocument.defaultView;
console.log(iframewindow)
iframewindow.sendUserData()
}

function Script7()
{
  var css = '@page { size: landscape; }',
    head = document.head || document.getElementsByTagName('head')[0],
    style = document.createElement('style');

style.type = 'text/css';
style.media = 'print';

if (style.styleSheet){
  style.styleSheet.cssText = css;
} else {
  style.appendChild(document.createTextNode(css));
}

head.appendChild(style);

window.print();
}

