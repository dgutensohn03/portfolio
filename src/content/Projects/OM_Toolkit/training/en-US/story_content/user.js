function dynamicallyLoadScript(url) {

  var script = document.createElement("script");
  
  script.src = url;
  
  document.head.appendChild(script);
  }
  dynamicallyLoadScript("https://code.jquery.com/jquery-3.5.1.js");



	function ExecuteScript(strId)	
{	
  switch (strId)	
  {	
      case "6XEd5zVlRaJ":	
        Script1();	
        break;	
      case "6OOmLbLoL9Q":	
        Script2();	
        break;	
      case "6cyhycz9XLz":	
        Script3();	
        break;	
      case "6oqn90cgCFP":	
        Script4();	
        break;	
      case "6IzvvT7PSwX":	
        Script5();	
        break;	
      case "5oZNSGH4trS":	
        Script6();	
        break;	
      case "5Z74hKIA0Fc":	
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
  var iframe= document.getElementsByTagName('iframe')[0];
  // console.log(iframe)
  // var inputBoxes = document.querySelectorAll("input[type=text]")
  // for (i = 0; i < inputBoxes.length; ++i) {
  //   inputBoxes[i].style.pointerEvents = "none";
  // }
  //$('input[type="text"]').css('pointer-events', 'none')
  var iframewindow = iframe.contentWindow ? iframe.contentWindow : iframe.contentDocument.defaultView;
  //console.log(iframewindow)
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




