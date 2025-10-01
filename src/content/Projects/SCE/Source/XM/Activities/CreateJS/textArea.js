// (function(){

//      console.log('there')
//     //  console.log($('.ui-textarea'))
//     $('.ui-textarea').attr('maxlength','2');



// })();
// // var textEntryt_L1S1 = document.getElementById('textEntry_L1S1_Entry_1');
// // textEntry_L1S1.setAttribute

// // var L1S1_Entry_1 = document.getElementById('textEntry_L1S1_Entry_1').value;

//function maxLength(el) {    
//     if (!('maxLength' in el)) {
//         var max = 2;
//         el.onkeypress = function () {
//             console.log('entry');
//             if (this.value.length >= max) return false;

            
//         };
//     }
// }

// maxLength(document.getElementsByClassName(".ui-textarea"));

setTimeout(function(){ $('.ui-textarea').attr('maxlength', '2').css('resize', 'none')

var maxLength = $('.ui-textarea').attr('maxlength')

$('.ui-textarea').keypress(function(){
 
    if(this.value.length > maxLength){
        return false;
    }
    $("#charLeft").html("Remaining characters : " +(maxLength - this.value.length));
});
}, 500);

// (function ($) {
//     $.fn.characterCounter = function (limit) {
//         return this.filter("textarea, input:text").each(function () {
//             var $this = $(this),
//               checkCharacters = function (event) {

//                   if ($this.val().length > limit) {

//                       // Trim the string as paste would allow you to make it 
//                       // more than the limit.
//                       $this.val($this.val().substring(0, limit))
//                       // Cancel the original event
//                       event.preventDefault();
//                       event.stopPropagation();

//                   }
//               };

//             $this.keyup(function (event) {

//                 // Keys "enumeration"
//                 var keys = {
//                     BACKSPACE: 8,
//                     TAB: 9,
//                     LEFT: 37,
//                     UP: 38,
//                     RIGHT: 39,
//                     DOWN: 40
//                 };

//                 // which normalizes keycode and charcode.
//                 switch (event.which) {

//                     case keys.UP:
//                     case keys.DOWN:
//                     case keys.LEFT:
//                     case keys.RIGHT:
//                     case keys.TAB:
//                         break;
//                     default:
//                         checkCharacters(event);
//                         break;
//                 }   

//             });

//             // Handle cut/paste.
//             $this.bind("paste cut", function (event) {
//                 // Delay so that paste value is captured.
//                 setTimeout(function () { checkCharacters(event); event = null; }, 150);
//             });
//         });
//     };
// } (jQuery));