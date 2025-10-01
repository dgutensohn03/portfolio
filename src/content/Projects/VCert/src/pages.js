// function navigateIframe(newURL) {
//     var currentURL = $('#contents', window.parent.document).get(0).contentWindow.location.href;
//     console.log(currentURL)
//     if (!currentURL.includes("/" + newURL)) {
//     $('#contents').attr('src', newURL);
//     } else {
//         console.log("already there")
//     }
// }


function navigateIframe(newURL) {
    $('#challenge-btn', window.parent.document).empty();
    $('#contents', window.parent.document).attr('src', newURL);
}