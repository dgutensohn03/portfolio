"use strict";

// Firebase Config
var firebaseConfig = {
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
firebase.initializeApp(firebaseConfig);
var secondaryApp = firebase.initializeApp(firebaseConfig, "Secondary");
const dbLocation = "ProductionUserGroup"
const auth = firebase.auth();
const db = firebase.database();
const functions = firebase.functions();

var intAttempt = 0; //Attempt of current interaction. 3 is a reference retake.
var isDemoMode = false;
auth.onAuthStateChanged(function (user) {
  if (user) {
    //Store last access for inactive notification reference
    var userId = firebase.auth().currentUser.uid;
    //var isDemoMode = checkIfDemoMode(userId);
    //console.log("Is Demo Mode:", isDemoMode);
    
    var updateObj = {
      "LastAccess": (new Date()).toString()
    };
    firebase.database().ref(dbLocation).child(userId).update(updateObj).then().catch();
  } else {

  }
});


// Function to check if the user is in demo mode
function checkIfDemoMode(userId) {
  return firebase.database().ref(dbLocation).child(userId).once('value')
    .then((snapshot) => {
      if (snapshot.exists()) {
        var userData = snapshot.val();
        console.log("User data:", userData);
        // Assume 'isDemoMode' is a property in the user data
        return userData.isDemoMode;
      } else {
        console.log("No data available");
        return false; // Default to false if no data available
      }
    }).catch((error) => {
      console.error("Error reading data:", error);
      return false; // Default to false if there's an error
    });
}

//login
$('#login-form').on('submit', function (e) {
  e.preventDefault();
  var email = document.getElementById('exampleInputEmail1').value;
  var password = document.getElementById('exampleInputPassword1').value;

  auth.signInWithEmailAndPassword(email, password).then(function (cred) {
    //document.getElementById('login-form').reset();
  }).then(function (success) {
    if (password.toLowerCase() == "valvoline") {
      $('.change-pw-instructions').show();
      $('.login-button').hide();
      $('.email-input').hide();
      $('.pw-input-1').hide();
      $('.pw-input-2').show();
      $('.pw-input-3').show();
      $('.initial-login-pw-change').show();
    } else {
      parent.navigateIframe('portal.html')
      //$("#contents", window.parent.document).attr("src", "portal.html");
    }
  }).catch(function (error) {
    $('#auth-error').html(error.message);
  });
});
$('.initial-login-pw-change').on('click', function (e) {
  e.preventDefault();
  var user = firebase.auth().currentUser;
  var newpassword = document.getElementById('exampleInputPassword2').value;
  var passwordConfirm = document.getElementById('exampleInputPasswordConformation').value;
  function updateUserPassword(user,newpassword,passwordConfirm) {
    console.log(user)
  if (newpassword.toLowerCase() != "valvoline" && newpassword === passwordConfirm && newpassword != "" && passwordConfirm != "") {
    user.updatePassword(newpassword).then(function () {
      //alert("Your password has been changed.")
      parent.navigateIframe('portal.html')
      //$("#contents", window.parent.document).attr("src", "portal.html");
    }).catch(function (error) {
      $('#auth-error').html(error.message);
    });
  } else {
    $('#auth-error').html('Please make sure your password and password confirmation match.');
  }
}
updateUserPassword(user,newpassword,passwordConfirm)
});
//admin login
$('#admin-login-form').on('submit', function (e) {
  e.preventDefault();
  var email = document.getElementById('exampleInputEmail1').value;
  var password = document.getElementById('exampleInputPassword1').value;
  auth.signInWithEmailAndPassword(email, password).then(function (cred) {
    //document.getElementById('login-form').reset();
  }).then(function (success) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref('/' + dbLocation + '/' + userId).once('value').then(function (snapshot) {
      var hasAdminRights = (snapshot.val() && snapshot.val().admin) || false;
      if (hasAdminRights == true) {
        //console.log('here')
        $("#contents", window.parent.document).attr("src", "AdminIntro.html");

      } else {
        //console.log('false')
        auth.signOut().then(function () {
          //console.log('user has been logged out');
        });
        $('#auth-error').html('You do not have Admin rights. Please try again or log in through the "User Login" link located at the top of the page.');
      }
    });
  }).catch(function (error) {
    //console.log(error.message);
    $('#auth-error').html(error.message);
  });
});

//logout
$('#log-out').on('click', function (e) {
  e.preventDefault();
  logOut();
});

function logOut() {
  auth.signOut().then(function () {
    console.log('user has been logged out');
  }).then(function (success) {
    $("#contents", window.parent.document).attr("src", "LandingPage.html");
  });
} //signup


//signup
$(".submitButton").click(function () {
  $("#signup-form").submit();
});

$('#signup-form').submit(function (e) {
  //console.log('here')
  e.preventDefault();

  //get user info
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var address_1 = document.getElementById('address').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var postalCode = document.getElementById('postalCode').value;
  var country = document.getElementById('country').value;
  var email = document.getElementById('email').value;
  var ADClass = document.getElementById("classAD").checked;
  var HDClass = document.getElementById("classHD").checked;
  var LDClass = document.getElementById("classLD").checked;
  var OHWClass = document.getElementById("classOHW").checked;
  var VPSClass = document.getElementById("classVPS").checked;
  var classCompletionAD = document.getElementById('ADClassInfo').value;
  var classCompletionHD = document.getElementById('HDClassInfo').value;
  var classCompletionLD = document.getElementById('LDClassInfo').value;
  var classCompletionVPS = document.getElementById('VPSClassInfo').value;
  var classCompletionOHW = document.getElementById('OHWClassInfo').value;
  var role = document.getElementById('role').value;
  var password = document.getElementById('password').value;
  var passwordConfirm = document.getElementById('passwordConfirm').value;
  var salesContact = document.getElementById('salesContact').value;
  var salesEmail = document.getElementById('salesEmail').value;
  var regionProvince = document.getElementById('regionProvince').value;
  //var consentCheckbox = document.getElementById('consentCheckbox').checked;
  var consentCheckbox = true; //We'll just have this be true for now until added back in for users.
  var activities = [];


  var monthlyGoalXP = 0;
  var goalXP = 0;
  var totalPoints = 0;
  //check if required fields have values if not element is tagged with is-invalid class
  $('.required').each(function () {
    if ($(this).val() === '') {
      $(this).addClass('is-invalid');
    } else {
      $(this).removeClass('is-invalid');
    }
  });
  //checks if conditions are met and throws error or registers user
  if (firstName != "" && lastName != "" && (ADClass || HDClass || LDClass || OHWClass || VPSClass)) {
console.log(consentCheckbox)
    if (consentCheckbox) {
      if (password === passwordConfirm && password != "" && passwordConfirm != "") {
        secondaryApp.auth().createUserWithEmailAndPassword(email, password).then(function (cred) {
          var userId = secondaryApp.auth().currentUser.uid; //signupForm.reset()
          console.log(userId)
          //create entry in database
          firebase.database().ref(dbLocation).child(userId).set({
            DemoExperience: false,
            AccountType: "test",
            FirstName: firstName,
            LastName: lastName,
            Address_1: address_1,
            City: city,
            State: state,
            PostalCode: postalCode,
            Country: country,
            Email: email,
            ClassAD: ADClass,
            ClassHD: HDClass,
            ClassLD: LDClass,
            ClassOHW: OHWClass,
            ClassVPS: VPSClass,
            ClassCompletionAD: classCompletionAD,
            ClassCompletionHD: classCompletionHD,
            ClassCompletionLD: classCompletionLD,
            ClassCompletionOHW: classCompletionOHW,
            ClassCompletionVPS: classCompletionVPS,
            Role: role,
            SalesContact: salesContact,
            SalesEmail: salesEmail,
            MonthlyGoalXPAD: monthlyGoalXP,
            GoalXPAD: goalXP,
            TotalPointsAD: totalPoints,
            MonthlyGoalXPHD: monthlyGoalXP,
            GoalXPHD: goalXP,
            TotalPointsHD: totalPoints,
            MonthlyGoalXPLD: monthlyGoalXP,
            GoalXPLD: goalXP,
            TotalPointsLD: totalPoints,
            MonthlyGoalXPOHW: monthlyGoalXP,
            GoalXPOHW: goalXP,
            TotalPointsOHW: totalPoints,
            MonthlyGoalXPVPS: monthlyGoalXP,
            GoalXPVPS: goalXP,
            TotalPointsVPS: totalPoints,
            RegionProvince: regionProvince,
            ActivitiesArray: activities,
            PrivacyPolicy: false,
            Notifications: "",
            LastAccess: (new Date()).toString(),
            cAD: {
              c1AD: 0,
              c2AD: 0,
              c3AD: 0,
              c4AD: 0,
              c5AD: 0,
              c6AD: 0,
              c7AD: 0,
              c8AD: 0,
              c9AD: 0,
              c10AD: 0
            },
            cHD: {
              c1HD: 0,
              c2HD: 0,
              c3HD: 0,
              c4HD: 0,
              c5HD: 0,
              c6HD: 0,
              c7HD: 0,
              c8HD: 0,
              c9HD: 0,
              c10HD: 0
            },
            cLD: {
              c1LD: 0,
              c2LD: 0,
              c3LD: 0,
              c4LD: 0,
              c5LD: 0,
              c6LD: 0,
              c7LD: 0,
              c8LD: 0,
              c9LD: 0,
              c10LD: 0
            },
            "cOHW": {
              "c10OHW": 0,
              "c1OHW": 0,
              "c2OHW": 0,
              "c3OHW": 0,
              "c4OHW": 0,
              "c5OHW": 0,
              "c6OHW": 0,
              "c7OHW": 0,
              "c8OHW": 0,
              "c9OHW": 0
            },
            cVPS: {
              c1VPS: 0,
              c2VPS: 0,
              c3VPS: 0,
              c4VPS: 0,
              c5VPS: 0,
              c6VPS: 0,
              c7VPS: 0,
              c8VPS: 0,
              c9VPS: 0,
              c10VPS: 0
            }
          }).then(function (success) {

            $('#signup-form').trigger("reset");
            $("#HDClassInfo").css('display', 'none');
            $("#OHWClassInfo").css('display', 'none');
            $("#LDClassInfo").css('display', 'none');
            $("#VPSClassInfo").css('display', 'none');
            $("#ADClassInfo").css('display', 'none');
            secondaryApp.auth().signOut();
            $("#registrationPopup").modal('show');
            // $("#contents", window.parent.document).attr("src", "portal.html");
            auth.sendPasswordResetEmail(email).then(function () {
              // Email sent.
              console.log("PW RESET SENT")
            }).catch(function (error) {
              // An error happened.
            });
            //Send email to new user. To eventually be moved to after they change their password the first time.
            $.get("https://us-central1-vcert-9568e.cloudfunctions.net/addMessage", {
              theEmail: email,
              theName: firstName + " " + lastName
            });
          });
        }).catch(function (error) {
          console.log(error.code)
          console.log(error.message)
          checkErrors(error.code, error.message);
        });
      } else {
        checkErrors("passwordsDoNotMatch");
        $("#classInfoIF").css('display', 'block');
      }
    } else {
      checkErrors("noConsent");
    }
  }
});

//send email with password reset link
$('#password-reset').on('submit', function (e) {
  e.preventDefault();
  var email = document.getElementById('exampleInputEmail1').value;
  auth.sendPasswordResetEmail(email).then(function () {
    // Email sent.
    $('#auth-error').html('Please check your email (including promotions and spam folders) and follow the instructions to reset your password.');

  }).catch(function (error) {
    //console.log(error.message);
    $('#auth-error').html(error.message);
  });
});


//update navigation based on if user is signed in or not
function updateNav() {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref('/' + dbLocation + '/' + userId);
      ref.once("value")
        .then(function (snapshot) {
          var childKey = snapshot.child("FirstName").val();
          //console.log('childKey: ' + childKey);
        });
      $('.auth-function').hide();
      $('#log-out').removeClass('hidden').css('display', 'block');
      $('#home').css('cursor', 'pointer').attr('onclick', 'navigateIframe("LandingPage.html")');
      // $('#challenge-btn').css('cursor', 'pointer').attr('onclick', 'navigateIframe("portal.html")');
      $('#auth-divider').css('display', 'block').removeClass('hidden');

      return firebase.database().ref('/' + dbLocation + '/' + userId).once('value').then(function (snapshot) {
        var usersFirstName = (snapshot.val() && snapshot.val().FirstName) || 'Anonymous';
        var hasAdminRights = (snapshot.val() && snapshot.val().admin) || false;

        //console.log(hasAdminRights)
        if (hasAdminRights) {
          $('#admin-home-btn').css('display', 'block').removeClass('hidden');
          $('#register-btn').css('display', 'block').removeClass('hidden');
        }


        $('#greeting').html("Hello, " + usersFirstName + "!").css('display', 'block').removeClass('hidden');
        $('#log-out').css('display', 'block').removeClass('hidden');
        $('body').fadeIn();
      });
    } else {
      $('#home').css('cursor', 'auto').attr('onclick', '');
      $('#challenge-btn').css('cursor', 'auto').attr('onclick', '');
      $('#admin-home-btn').hide();
      $('#register-btn').hide();
      $('#greeting').hide();
      $('#log-out').hide();
      $('.auth-function').show();
      $('#auth-divider').hide();
      $('body').fadeIn();
    }
  });
}
updateNav();

//Populate classes in Registration page.
function updateRegClasses() {
  var OHWClasses = db.ref('/OHWClass').orderByChild("Value");
  OHWClasses.on("child_added", function (data) {
    $("#OHWClassInfo", $("#contents").contents()).append(
      $('<option></option>').val(data.val()).html(data.key)
    );
  });
  var ADClasses = db.ref('/ADClass').orderByChild("Value");
  ADClasses.on("child_added", function (data) {
    $("#ADClassInfo", $("#contents").contents()).append(
      $('<option></option>').val(data.val()).html(data.key)
    );
  });
  var HDClasses = db.ref('/HDClass').orderByChild("Value");
  HDClasses.on("child_added", function (data) {
    $("#HDClassInfo", $("#contents").contents()).append(
      $('<option></option>').val(data.val()).html(data.key)
    );
  });
  var LDClasses = db.ref('/LDClass').orderByChild("Value");
  LDClasses.on("child_added", function (data) {
    $("#LDClassInfo", $("#contents").contents()).append(
      $('<option></option>').val(data.val()).html(data.key)
    );
  });
  var VPSClasses = db.ref('/VPSClass').orderByChild("Value");
  VPSClasses.on("child_added", function (data) {
    $("#VPSClassInfo", $("#contents").contents()).append(
      $('<option></option>').val(data.val()).html(data.key)
    );
  });
}

function markPPAsViewed() {
  //The user upon their first login accepted the privacy policy. Huzzah!
  $('#privacyMask').css('display', 'none');
  $('#prRecommended', $("#contents").contents()).css('display', 'none');
  $('#privacyBG > .closeButton', $("#contents").contents()).css('display', 'block');
//   window.open(
//     'https://www.valvoline.com/privacy-notice/', 
//     '_blank', 
//     'width=900,height=800,scrollbars=yes,toolbar=no,menubar=no,status=no,resizable=yes'
// );
  
  firebase.auth().onAuthStateChanged(function (user) {
    var userId = firebase.auth().currentUser.uid;
    firebase.database().ref(dbLocation).child(userId).update({
      PrivacyPolicy: true
    });
  });
}

function nextChallenge(thisClass) {
  //TODO: Find current challenge that awaits the learner based on the class passed in, and send them there.
  //For demo purposes, it sends you to challenge 1, unless you've completed it, then to challenge 2 instead.
  parent.challengeClass = thisClass;
  var cNum = 1;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref('/' + dbLocation + '/' + userId);
      ref.once("value")
        .then(function (snapshot) {
          if (snapshot.val()["c" + thisClass]["c1" + thisClass] == "1") {
            cNum = 2;
          }
          parent.navigateIframe("challenge_" + cNum + "_" + thisClass.toLowerCase() + ".html");
        })
    }
  });
}

function makeTwoDigitIfOne(num) {
  var tempText = num.toString();
  if (num < 10) {
    while (tempText.length < 2) {
      tempText = "0" + tempText;
    }
  }
  return tempText;
}

function updateSM() {
  //Update site map page to hide admin links if not an admin
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;
      return firebase.database().ref('/' + dbLocation + '/' + userId).once('value').then(function (snapshot) {
        var hasAdminRights = (snapshot.val() && snapshot.val().admin) || false;
        if (!hasAdminRights) {
          $("#adminLinks", $("#contents").contents()).remove();
        } else {
          $("#adminLinks", $("#contents").contents()).css('display', 'block');
        }
      });
    }
  });
}

function addtoMonthlyXP(pointValue) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;

      function getVal(userId) {
        return firebase.database().ref('/' + dbLocation + '/' + userId).once("value")
          .then(function (snapshot) {
            var FBmonthlyGoalXP = parseInt(snapshot.val().MonthlyGoalXP);
            return FBmonthlyGoalXP;
          });
      };
      getVal(userId).then(function (FBmonthlyGoalXP) {
        var strPointValue = FBmonthlyGoalXP + pointValue;
        var updatePointValue = String(strPointValue);
        firebase.database().ref(dbLocation).child(userId).update({
          MonthlyGoalXP: updatePointValue
        }).then(function () {
          updatePoints();
        });
      });
    };
  });
};

function addtoGoalXP(pointValue) {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;

      function getVal(userId) {
        return firebase.database().ref('/' + dbLocation + '/' + userId).once("value")
          .then(function (snapshot) {
            var FBgoalXP = parseInt(snapshot.val().GoalXP);
            return FBgoalXP;
          });
      };
      getVal(userId).then(function (FBgoalXP) {
        var strPointValue = FBgoalXP + pointValue;
        var updatePointValue = String(strPointValue);
        firebase.database().ref(dbLocation).child(userId).update({
          GoalXP: updatePointValue
        }).then(function () {
          updatePoints();
        });
      });
    };
  });
};

// function addtoTotalPoints(whichClass, pointValue) {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       var userId = firebase.auth().currentUser.uid;

//       function getVal(userId) {
//         return firebase.database().ref('/' + dbLocation + '/' + userId).once("value")
//           .then(function (snapshot) {
//             var FBdata = [];
//             if (whichClass == "HD") {
//               FBdata.push(parseInt(snapshot.val().TotalPointsHD));
//             } else if (whichClass == "LD") {
//               FBdata.push(parseInt(snapshot.val().TotalPointsLD));
//             } else if (whichClass == "VPS") {
//               FBdata.push(parseInt(snapshot.val().TotalPointsVPS));
//             }
//             FBdata.push(whichClass);
//             //console.log(FBdata)
//             return FBdata;
//           });
//       };
//       getVal(userId).then(function (FBdata) {
//         var updatePointValue = FBdata[0] + pointValue;
//         if (whichClass == "HD") {
//           firebase.database().ref(dbLocation).child(userId).update({
//             TotalPointsHD: updatePointValue
//           }).then(function () {
//             updatePoints();
//           });
//         } else if (whichClass == "LD") {
//           firebase.database().ref(dbLocation).child(userId).update({
//             TotalPointsLD: updatePointValue
//           }).then(function () {
//             updatePoints();
//           });
//         } else if (whichClass == "VPS") {
//           firebase.database().ref(dbLocation).child(userId).update({
//             TotalPointsVPS: updatePointValue
//           }).then(function () {
//             updatePoints();
//           });
//         }
//       });
//     };
//   });
// };
function setBookmarking(whichClass, challengeNumber, bookmark) {
  var dbVarName;
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;

      function getVal(userId) {
        return firebase.database().ref('/' + dbLocation + '/' + userId).once("value")
          .then(function (snapshot) {
            var FBdata = [];
            var FBref = [];
            var dbHasThisChallenge = snapshot.child("c" + whichClass).hasChild("c" + challengeNumber + whichClass)
            //Get value from Firebase Database and push it to array for reference
            FBref.push(snapshot.child("c" + whichClass).val());

            FBdata.push(dbHasThisChallenge);
            ////console.log(FBdata[0]);
            return FBdata;
          });
      };
      getVal(userId).then(function (FBdata) {
        var hasTaken = FBdata.pop();

        //console.log('hasTaken: ' + hasTaken)
        //console.log('updatePointValue ' + updatePointValue)
        //console.log('totalPointsForClass ' + totalPointsForClass)
        //console.log('totalUpdatedPoints ' + totalUpdatedPoints)

        //If the challenge in question is finished and replayed 'for fun', don't overwrite progress.
        firebase.database().ref(dbLocation).child(userId).child("c" + whichClass).once("value", function (snapshot2) {
          if (snapshot2.val()["c" + challengeNumber + whichClass] != "1" && snapshot2.val()["c" + challengeNumber + whichClass + "second"] != "1") {
            var updateObj = {
              ["c" + challengeNumber + whichClass]: bookmark
            }
            firebase.database().ref(dbLocation).child(userId).child("c" + whichClass).update(updateObj).then(function () {

            });
          }
        })
      });
    };
  });
};

function challengeComplete(whichClass, challengeNumber, pointValue, passed) {

  console.log('fbauth passed? ' + passed);
  var dbVarName;
  var bookmark = passed ? 1 : 0.5; //Bookmark is 1 if passed, 0.5 if failed.
  var retakeDate = new Date();

  retakeDate.setDate(retakeDate.getDate() + 6);

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;

      function getVal(userId) {
        return firebase.database().ref('/' + dbLocation + '/' + userId).once("value")
          .then(function (snapshot) {

            var FBdata = [];
            var FBref = [];

            var dbHasThisChallenge = snapshot.child("c" + whichClass).hasChild("c" + challengeNumber + whichClass + "points")
console.log()
            //Get value from Firebase Database and push it to array for reference
            FBref.push(snapshot.child("c" + whichClass).val());

            var totalPointsForClass = 0;

            for (var i = 0; i < FBref.length; i++) {
              //console.log(FBref[i])
              for (const key in FBref[i]) {

                if (key.toString().indexOf("points") != -1) {

                  if (key.toString().indexOf(challengeNumber.toString()) != -1) {

                  } else {
                    totalPointsForClass += FBref[i][key];
                  }
                }

              }
            }
            FBdata.push(dbHasThisChallenge);
            FBdata.push(totalPointsForClass);

            ////console.log(FBdata[0]);
            return FBdata;
          });
      };
      getVal(userId).then(function (FBdata) {
        var totalPointsForClass = FBdata.pop();
        var hasTaken = FBdata.pop();
        var updatePointValue = pointValue;
        var totalUpdatedPoints = totalPointsForClass + updatePointValue;
        if (hasTaken) {

        }
        //console.log('hasTaken: ' + hasTaken)
        //console.log('updatePointValue ' + updatePointValue)
        //console.log('totalPointsForClass ' + totalPointsForClass)
        //console.log('totalUpdatedPoints ' + totalUpdatedPoints)

        //If the challenge in question is finished and replayed 'for fun', don't overwrite progress.
        firebase.database().ref(dbLocation).child(userId).once("value", function (snapshot2) {
          if (snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass] != "1" 
          && snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "second"] != "1"
          && snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "third"] != "1" && snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "third"] != "0"
          && passed) {
            var updateObj = {
              ["c" + challengeNumber + whichClass]: bookmark,
              ["c" + challengeNumber + whichClass + "points"]: pointValue
            }
            //Check attempt and send points 
            firebase.database().ref(dbLocation).child(userId).child("c" + whichClass).update(updateObj).then(function () {
              //Check if first attempt is in database
              if (snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "first"] !== undefined) {
                    //Check if second attempt is in database
                    if (snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "second"] !== undefined) {
                          //Check if third attempt is in database
                          if (snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "third"] !== undefined) {
                                //Challenge closed
                                var updateObj = {["c" + challengeNumber + whichClass + "third"]: 0 };
                          } else {
                            var updateObj = {["c" + challengeNumber + whichClass + "third"]: 1 };
                          }
                    } else {
                      var updateObj = {["c" + challengeNumber + whichClass + "second"]: 1};
                    }
              } else {
                var updateObj = {["c" + challengeNumber + whichClass + "first"]: 1};
              }
              firebase.database().ref(dbLocation).child(userId).child("c" + whichClass).update(updateObj);
              //Check for 3-Peat bonus conditions - At least challenge 3, c(i-1)HD = 1, c(i-2)HD = 1, three(i)HD undefined, three(i-1)HD undefined, three(i-2)HD undefined, passed current challenge
              if (challengeNumber >= 3 && snapshot2.child("c" + whichClass).val()["c" + (challengeNumber - 1) + whichClass] == 1 && 
              snapshot2.child("c" + whichClass).val()["c" + (challengeNumber - 2) + whichClass] == 1 && 
              snapshot2.val().Notifications["three" + challengeNumber + whichClass] == undefined && 
              snapshot2.val().Notifications["three" + (challengeNumber - 1) + whichClass] == undefined && 
              snapshot2.val().Notifications["three" + (challengeNumber - 2) + whichClass] == undefined && passed) {
                var updateObj = {
                  ["three" + challengeNumber + whichClass]: 1
                }
                firebase.database().ref(dbLocation).child(userId).child("Notifications").update(updateObj);
                updateObj = {
                  ["three" + challengeNumber + whichClass + "points"]: 20
                }
                firebase.database().ref(dbLocation).child(userId).child("c" + whichClass).update(updateObj);
                totalUpdatedPoints += 20;
                $.get("https://us-central1-vcert-9568e.cloudfunctions.net/sendThreePeat", {
                  theEmail: snapshot2.val().Email
                });
              }  else {
                parent.navigateIframe("portal.html");
              }

              firebase.database().ref(dbLocation).child(userId).update({
                ["TotalPoints" + whichClass]: totalUpdatedPoints
              }).then(function () {
                parent.navigateIframe("portal.html");
                console.log('here now')
              });
            });
            //if failed
          } else if (snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass] != "1" && 
          snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "second"] != "1" && 
          snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "third"] != "1" && snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "third"] != "0" &&
          !passed) {
            var updateObj = {
              ["c" + challengeNumber + whichClass]: bookmark,
              ["c" + challengeNumber + whichClass + "points"]: 0
            }
            firebase.database().ref(dbLocation).child(userId).child("c" + whichClass).update(updateObj).then(function () {
              //Check if first attempt is in database
              if (snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "first"] !== undefined) {
                //Check if second attempt is in database
                if (snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "second"] !== undefined) {
                      //Check if third attempt is in database
                      if (snapshot2.child("c" + whichClass).val()["c" + challengeNumber + whichClass + "third"] !== undefined) {
                            //Challenge closed
                      } else {
                        sendFailEmail();
                        var updateObj = {["c" + challengeNumber + whichClass + "third"]: 0 };
                      }
                } else {
                  sendFailEmail();
                  var updateObj = {["c" + challengeNumber + whichClass + "second"]: retakeDate.toString()};
                }
                firebase.database().ref(dbLocation).child(userId).child("c" + whichClass).update(updateObj).then(function () {
                  parent.navigateIframe("portal.html");
                });
          } else {
            sendFailEmail();
            var updateObj = {["c" + challengeNumber + whichClass + "first"]: retakeDate.toString()};
          
                firebase.database().ref(dbLocation).child(userId).child("c" + whichClass).update(updateObj).then(function () {
                  parent.navigateIframe("portal.html");
                });
              }

              function sendFailEmail() {
                console.log('sendFailed email to: ' + snapshot2.val().Email)
                // $.get("https://us-central1-vcert-9568e.cloudfunctions.net/sendFailed", {
                //   theEmail: snapshot2.val().Email
                // });
              }
            });
          } else {
            parent.navigateIframe("portal.html");
          }
        });
      });
    };
  });
};

function retrieveAttempt(cNum, cClass) {
  console.log('retrieveAttempt')

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;
      firebase.database().ref('/' + dbLocation + '/' + userId).child("c" + cClass).once("value").then(function (snapshot) {
        //if completed on first, second, or third attempt
        if (snapshot.child("c" + cNum + cClass + "third").val() == 1 ||snapshot.child("c" + cNum + cClass + "second").val() == 1 || snapshot.child("c" + cNum + cClass).val() == 1) {
          intAttempt = 4;
          //if not taken
          console.log('Challenge Completed');
        } else if (snapshot.child("c" + cNum + cClass + "first").val() != undefined) {
            if (snapshot.child("c" + cNum + cClass + "second").val() != undefined) {
              if (snapshot.child("c" + cNum + cClass + "third").val() != undefined) {
                intAttempt = 5;
                console.log('Challenge Closed');
              } else {
                intAttempt = 3;
                checkForPoints(.25);
                console.log('Third Attempt');
              }
          } else {
            intAttempt = 2;
            checkForPoints(.5);
            console.log('Second Attempt');
          }

        } else {
          intAttempt = 1;
          console.log('First Attempt');
        }
        
        console.log("intAttempt: " + intAttempt);



      })
    }


  });
}
function checkForPoints(scale) {
  console.log('scaling points based on attempt')
  // if (document.getElementsByTagName("iframe")[0].contentWindow.questionPointsPossible) {
  //   document.getElementsByTagName("iframe")[0].contentWindow.questionPointsPossible = document.getElementsByTagName("iframe")[0].contentWindow.questionPointsPossible * scale
  //   console.log("questionPointsPossible: " + document.getElementsByTagName("iframe")[0].contentWindow.questionPointsPossible)
  // }
  if (document.getElementsByTagName("iframe")[0].contentWindow.totalPoints) {
    document.getElementsByTagName("iframe")[0].contentWindow.totalPoints = document.getElementsByTagName("iframe")[0].contentWindow.totalPoints * scale
    console.log("totalPoints: " + document.getElementsByTagName("iframe")[0].contentWindow.totalPoints)
  }
  // if (document.getElementsByTagName("iframe")[0].contentWindow.passPercent) {
  //   document.getElementsByTagName("iframe")[0].contentWindow.passPercent = document.getElementsByTagName("iframe")[0].contentWindow.passPercent * scale; 
  //   console.log("passPercent: " + document.getElementsByTagName("iframe")[0].contentWindow.passPercent)
  // }
  console.log("passPercent: " + document.getElementsByTagName("iframe")[0].contentWindow.passPercent)
  if (document.getElementsByTagName("iframe")[0].contentWindow.points) {
    document.getElementsByTagName("iframe")[0].contentWindow.points.forEach(divideByHalf);
    function divideByHalf(item, index) {
      document.getElementsByTagName("iframe")[0].contentWindow.points[index] = document.getElementsByTagName("iframe")[0].contentWindow.points[index] * scale; 
    }    
    console.log("points: ")
    console.log(document.getElementsByTagName("iframe")[0].contentWindow.points)
  }
  document.getElementsByTagName("iframe")[0].contentWindow.updateProgressTracker() 
}
// function challengeBookmark(whichActivity, place, value) {
//   firebase.auth().onAuthStateChanged(function (user) {
//     if (user) {
//       var userId = firebase.auth().currentUser.uid;

//       function getVal(userId) {
//         return firebase.database().ref('/' + dbLocation + '/' + userId).once("value")
//           .then(function (snapshot) {
//             var activityData = [];

//             activityData.push(snapshot.val().ActivityArray);

//             //console.log('activityData: ' + snapshot.val().ActivityArray)
//             return activityData;
//           });
//       };
//       getVal(userId).then(function (activityData) {
//           // activityData

//           var thisActivityArray = activityData
//           thisActivityArray[place] = value
//           //console.log(thisActivityArray)


//           firebase.database().ref(dbLocation).child(userId).update({
//             ActivityArray: [place] = thisActivityArray
//           }).then(function () {
//             //console.log('Bookmarking Updated')
//           });

//           //   if(whichClass=="HD")
//           //   {
//           //     firebase.database().ref(dbLocation).child(userId).update({
//           //       TotalPointsHD: thisActivityArray
//           //     }).then(function () {
//           //      //console.log('Bookmarking Updated')
//           //     });
//           //   }
//         }

//       );
//     };
//   });
// };

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

// $(document).ready(function () {
//   //console.log('HERE')
//   $('#contents').on("ready", function () {
//     var currentURL = $('#contents').get(0).contentWindow.location.href;

//     //auth.onAuthStateChanged(function (user) {
//       //var currentURL = $('#contents').get(0).contentWindow.location.href;
     
//       console.log(currentURL)
//       if (user) {
//         if (currentURL.includes("challenge")) {
//           $('#header-image').show();
//         } else {
//           //console.log('yes')
//           $('#header-image').hide();
//           $('#challenge-btn', window.parent.document).html('');
//           parent.exitChallenge()
//         }
//         // if (currentURL.includes("LandingPage")) {
//         //   $("#contents", window.parent.document).attr("src", "portal.html");
//         // }
//       } else {
//         //   if (currentURL.includes("LandingPage"))  {
//         parent.exitChallenge()
//         //   $("#contents", window.parent.document).attr("src", "LandingPage.html");
//         // }
//       }
//     });
//   });
//});

// function navigateToIfUser() {
//   auth.onAuthStateChanged(function (user) {
//   if (user) {
//     $("#contents", window.parent.document).attr("src", "portal.html");
//     //parent.navigateIframe("portal.html")
//   } else {
//     $("#contents", window.parent.document).attr("src", "LandingPage.html");
//     //parent.navigateIframe("LandingPage.html")
//   }
// });

// }

function navigateUserLoggedInCheck() {
  auth.onAuthStateChanged(function (user) {
    if (user) {
      parent.navigateIframe('portal.html')
      //$("#contents", window.parent.document).attr("src", "./portal.html");
      //navigateIframe("portal.html")
    } else {
      parent.navigateIframe('LoginPage.html')
      //$("#contents", window.parent.document).attr("src", "./LoginPage.html");
      //navigateIframe("LoginPage.html")
    }
});

}





  

var thisClass = function () {
  var ifrm = window.frameElement; // reference to iframe element container
  console.log(window)
  if (ifrm.src.includes("hd")) {
    console.log("HD Challenge Started ...")
      return "HD";
  } else if (ifrm.src.includes("ld")) {
    console.log("LD Challenge Started ...")
      return "LD";
  } else if (ifrm.src.includes("vps")) {
    console.log("VPS Challenge Started ...")
      return "VPS";
  } else if (ifrm.src.includes("ad")) {
    console.log("AD Challenge Started ...")
      return "AD";
  } else if (ifrm.src.includes("ohw")) {
    console.log("OHW Challenge Started ...")
      return "OHW";
  }
}