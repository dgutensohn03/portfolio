console.log('script loadd')

//vcert firebase database
const firebaseConfig = {
  apiKey: "AIzaSyBV7dN8jF3nggPnJuzzWmT5MsiMjWmuz88",
  authDomain: "vcert-9568e.firebaseapp.com",
  databaseURL: "https://vcert-9568e.firebaseio.com",
  projectId: "vcert-9568e",
  storageBucket: "vcert-9568e.appspot.com",
  messagingSenderId: "701025120825",
  appId: "1:701025120825:web:7bf1e3dfd38637652c93e8",
  measurementId: "G-1N0PQ39K3P"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.database();

var completeBtnListener = null,
    interval = 1000,
    value = 0;

var timer = null,
    interval = 10,
    value = 0;
$(".submitButton").on('click', function () {
  $("#signup-form").submit();
});


function sendLoadInformation() {
  console.log('sendLoadInformation()')
  //e.preventDefault();
  firebase.auth().signOut();
  firebase.auth().signInAnonymously().then(function() {
    console.log('get info')
  //get user info
  var dateStarted = NOW();
  var location = String(window.top.location);
  var userAgent = String(window.top.navigator.userAgent);
  var pageTitle = String(window.top.document.title);
  //checks if conditions are met and throws error or registers user
 // if (firstName != "" && lastName != "" && address_1 != "" && city != "" && state != "None" && zipCode != "" && phoneNumber != "" && email != "")  {
       //if (email != "") {
        
    var userId = firebase.auth().currentUser.uid;
    console.log('userId');
    firebase.database().ref('ProductionUserGroup').once('value')
    .then(snapshot => {
      const data = snapshot.val();
      console.log(data)
      //res.statusCode = 200;
      //res.end(JSON.stringify(data));
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      //res.statusCode = 500;
      //res.end(JSON.stringify({ error: 'Internal Server Error' }));
    });

    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
   });
};
window.addEventListener('beforeunload',(event) =>{
  var dateLeft = NOW();
                var userId = firebase.auth().currentUser.uid;
                var pageTitle = String(window.top.document.title);
                console.log(userId)
                // firebase.database().ref('Users/'+ pageTitle + '/' + userId).update({
                //   _04_PageUnloadedOn: dateLeft
                // }).then(function (success) {
                //     console.log('sucess')
                //     auth.signOut().then(function () {
                //         console.log('signOut()')
                //     }).then(function (success) {
                //     });
                // }).catch(function (error) {
                //     checkErrors(error.code, error.message);
                // });
              
});

// function addTo(thisE, btnDBName, pointValue) {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       var userId = firebase.auth().currentUser.uid;
//       var pageTitle = String(window.top.document.title);
//       function getVal(userId) {
//         //return firebase.database().ref('/' + dbLocation + '/' + userId).once("value")
//         return firebase.database().ref('Users/'+ pageTitle + '/' + userId).once("value")
//           .then(function (snapshot) {
//             console.log(snapshot.val())
//             var itemValue = parseInt(snapshot.val()[btnDBName]);
//             return itemValue;
//           });
//       };
//       getVal(userId).then(function (itemValue) {
//         var strPointValue = itemValue + pointValue;
//         var updatePointValue = String(strPointValue);
//         firebase.database().ref('Users/'+ pageTitle + '/' + userId).update({
//           [btnDBName]: updatePointValue
//         }).then(function () {
//           //updatePoints();
// //console.log(thisE)
//           window.open(thisE.href, '_blank');
//         });
//       });
//     };
//   });
// };
$(window.parent.document).ready(function () {




sendLoadInformation();
    // Handler for .ready() called.
    });

function checkErrors(error, message) {
  switch (error) {
    case "auth/email-already-in-use":
      $("#email").addClass('is-invalid');
      $('#alert-message .modal-body').html(message);
      $('#alert-message').modal('show');
      break;
    case "auth/weak-password":
      //Thrown if the new password is not strong enough.
      $("#password").addClass('is-invalid');
      $("#passwordConfirm").addClass('is-invalid');
      $('#alert-message .modal-body').html(message);
      $('#alert-message').modal('show');
      break;
    case "auth/user-not-found":
      //Thrown if there is no user corresponding to the password reset code.
      //This may have happened if the user was deleted between when the code was issued and when this method was called.
      $('#alert-message .modal-body').html("There is no user corresponding to this email address. Please check your spelling.");
      $('#alert-message').modal('show');
      break;
    case "auth/user-disabled":
      //Thrown if the user corresponding to the given password reset code has been disabled.
      $('#alert-message .modal-body').html(message);
      $('#alert-message').modal('show');
      break;
    case "auth/invalid-action-code":
      //Thrown if the password reset code is invalid. This can happen if the code is malformed or has already been used.
      $('#alert-message .modal-body').html(message);
      $('#alert-message').modal('show');
      break;
    case "auth/expired-action-code":
      //Thrown if the password reset code has expired.
      $('#alert-message .modal-body').html(message);
      $('#alert-message').modal('show');
      break;
    case "auth/invalid-email":
      //Thrown if the password reset code has expired.
      $("#email").addClass('is-invalid');
      $('#alert-message .modal-body').html(message);
      $('#alert-message').modal('show');
      break;
    case "passwordsDoNotMatch":
      //Custom error if password and password conformation do not match.
      $("#password").addClass('is-invalid');
      $("#passwordConfirm").addClass('is-invalid');
      $('#alert-message .modal-body').html('Please make sure your password and password confirmation match.');
      $('#alert-message').modal('show');
      break;
    case "noConsent":
      //Custom error if Privacy Policy consent is not given.
      $('#alert-message .modal-body').html('Please read and accept the Privacy Policy');
      $('#alert-message').modal('show');
      break;
  }
}

function NOW() {

  var date = new Date();
  var aaaa = date.getUTCFullYear();
  var gg = date.getUTCDate();
  var mm = (date.getUTCMonth() + 1);

  if (gg < 10)
      gg = "0" + gg;

  if (mm < 10)
      mm = "0" + mm;

  var cur_day = mm + "-" + gg + "-" + aaaa;

  var hours = date.getUTCHours()
  var minutes = date.getUTCMinutes()
  var seconds = date.getUTCSeconds();

  if (hours < 10)
      hours = "0" + hours;

  if (minutes < 10)
      minutes = "0" + minutes;

  if (seconds < 10)
      seconds = "0" + seconds;

  return cur_day + " " + hours + ":" + minutes + ":" + seconds;
  //return cur_day;
}

//console.log(NOW());


function selectChange(event)
{
  if($(event.currentTarget).val() == "None")
  {
      $(event.currentTarget).removeClass('active');
  }
  else
  {
      $(event.currentTarget).addClass("active");
  }
}

$(document).ready(function () {
    //$('#alert-message .modal-body').html('Please read and accept the Privacy Policy');
    //$('#alert-message').modal('show'); 
  });