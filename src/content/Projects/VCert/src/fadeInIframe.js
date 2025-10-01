document.body.style.display = "none";
document.body.classList.add('fade');

var css3 = `
body {
    opacity: 1;
    transition: 2s opacity;
  }
  
  body.fade {
      opacity: 0;
      transition: none;
  }
`,
  head = document.head || document.getElementsByTagName('head')[0],
  style = document.createElement('style');

head.appendChild(style);

style.type = 'text/css';
if (style.styleSheet) {
  // This is required for IE8 and below.
  style.styleSheet.cssText = css3;
} else {
  style.appendChild(document.createTextNode(css3));
}

// document.addEventListener("DOMContentLoaded", function(e) {
//     document.body.classList.remove('fade');
//   });
