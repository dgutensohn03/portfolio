// let deferredPrompt;

// window.addEventListener('beforeinstallprompt', (e) => {
//   // Prevent the mini-infobar from appearing on mobile
//   e.preventDefault();
//   // Stash the event so it can be triggered later.
//   deferredPrompt = e;
//   // Update UI notify the user they can install the PWA
//   showInstallPromotion();
// });
// console.log("here")


// window.addEventListener('DOMContentLoaded', () => {
//   let displayMode = 'browser tab';
//   if (navigator.standalone) {
//     displayMode = 'standalone-ios';
//   }
//   if (window.matchMedia('(display-mode: standalone)').matches) {
//     displayMode = 'standalone';
//   }
//   // Log launch display mode to analytics
//   console.log('DISPLAY_MODE_LAUNCH:', displayMode);
// });




// document.getElementById('buttonInstall').addEventListener('click', (e) => {
//   console.log('clicked')
//   // Hide the app provided install promotion
//   hideMyInstallPromotion();
//   // Show the install prompt
//   deferredPrompt.prompt();
//   // Wait for the user to respond to the prompt
//   deferredPrompt.userChoice.then((choiceResult) => {
//     if (choiceResult.outcome === 'accepted') {
//       console.log('User accepted the install prompt');
//     } else {
//       console.log('User dismissed the install prompt');
//     }
//   });
// });


let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  addBtn.style.display = 'block';

  addBtn.addEventListener('click', (e) => {
      console.log('clicked')
    // hide our user interface that shows our A2HS button
    addBtn.style.display = 'none';
    // Show the prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
  });
});