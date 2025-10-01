"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }
  return _typeof(obj);
}
var challengeStartDate;



            if (parent.isDemoMode) {
              challengeStartDate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            } else {
              challengeStartDate = [0, 7, 14, 21, 28, 35, 42, 49, 56, 63];
            }


            var dayArrayHD = [{
              days: challengeStartDate[0], //5,000-MILE DRAIN EXTENSION
              title: "5,000 Mile Drain Extension",
              implemented: true
            }, {
              days: challengeStartDate[1], //VALUE TO THE CUSTOMER
              title: "Value to the Customer",
              implemented: true
            }, {
              days: challengeStartDate[2], //PROTECTING THE ENGINE
              title: "Protecting the Engine",
              implemented: true
            }, {
              days: challengeStartDate[3], //MEET ONE SOLUTION™
              title: "Meet One Solution™",
              implemented: true
            }, {
              days: challengeStartDate[4], //ZEREX™ APPROVALS
              title: "ZEREX™ Approvals",
              implemented: true
            }, {
              days: challengeStartDate[5], //ZEREX™ NITRITE FREE
              title: "ZEREX™ Nitrite Free",
              implemented: true
            }, {
              days: challengeStartDate[6], //CUMMINS R&D
              title: "Cummins R&D",
              implemented: true
            }, {
              days: challengeStartDate[7], //TRANSMISSION FLUID AND GEAR OIL
              title: "Transmission Fluid and Gear Oil",
              implemented: true
            }, {
              days: challengeStartDate[8], //COBALT AND CERULEAN
              title: "Cobalt and Cerulean",
              implemented: true
            }, {
              days: challengeStartDate[9], //WHY VALVOLINE
              title: "Why Valvoline™",
              implemented: true
            }];

            var dayArrayLD = [{
              days: challengeStartDate[0], //Old Challenge 1
              title: "SPARK",
              implemented: true // skip: true
            }, {
              days: challengeStartDate[1], //Old Challenge 3
              title: "Valvoline™ Premium Oils",
              implemented: true
            }, {
              days: challengeStartDate[2], //Old Challenge 4
              title: "ZEREX™",
              implemented: true
            }, {
              days: challengeStartDate[3], //Old Challenge 5
              title: "The Valvoline™ Story",
              implemented: true
            }, {
              days: challengeStartDate[4], //Old Challenge 2
              title: "VPERK$",
              implemented: true 
            }, {
              days: challengeStartDate[5], //Old Challenge 6
              title: "Multi-Vehicle ATF",
              implemented: true
            }, {
              days: challengeStartDate[6], //Old Challenge 7
              title: "The Sales Process",
              implemented: true
            }, {
              days: challengeStartDate[7], //Old Challenge 10
              title: "Why Valvoline™",
              implemented: true
            }, {
              days: challengeStartDate[8], //Old Challenge 8 REMOVED
              title: "The Valvoline™ Reward Program",
              implemented: false,
              skip: true
            }, {
              days: challengeStartDate[9], //Old Challenge 9 REMOVED
              title: "Added-Value Programs",
              implemented: false,
              skip: true
            }];

            var dayArrayVPS = [{
              days: challengeStartDate[0],
              title: "SPARK",
              implemented: true
            }, {
              days: challengeStartDate[1],
              title: "VPS Guarantee",
              implemented: true
            }, {
              days: challengeStartDate[2],
              title: "VPS Profit Potential",
              implemented: true
            }, {
              days: challengeStartDate[3],
              title: "All Engine Clean First Defense",
              implemented: true
            }, {
              days: challengeStartDate[4],
              title: "Incentives",
              implemented: true
            }, {
              days: challengeStartDate[5],
              title: "Why Valvoline",
              implemented: true
            }, {
              days: challengeStartDate[6],
              title: "15k restoration kit",
              implemented: true
            }, {
              days: challengeStartDate[7],
              title: "VPS Scorecard",
              implemented: true
            }, {
              days: challengeStartDate[8],
              title: "Dealership, High Touch",
              implemented: true
            }, {
              days: challengeStartDate[9],
              title: "The Sales Process",
              implemented: true
            }];
            var dayArrayAD = [{
              days: challengeStartDate[0], //5,000-MILE DRAIN EXTENSION
              title: "XXX",
              implemented: true
            }, {
              days: challengeStartDate[1], //VALUE TO THE CUSTOMER
              title: "XXX",
              implemented: true
            }, {
              days: challengeStartDate[2], //PROTECTING THE ENGINE
              title: "XXX",
              implemented: true
            }, {
              days: challengeStartDate[3], //MEET ONE SOLUTION™
              title: "XXX",
              implemented: true
            }, {
              days: challengeStartDate[4], //ZEREX™ APPROVALS
              title: "XXX",
              implemented: true
            }, {
              days: challengeStartDate[5], //ZEREX™ NITRITE FREE
              title: "XXX",
              implemented: true
            }, {
              days: challengeStartDate[6], //CUMMINS R&D
              title: "XXX",
              implemented: true
            }, {
              days: challengeStartDate[7], //TRANSMISSION FLUID AND GEAR OIL
              title: "XXX",
              implemented: true
            }, {
              days: challengeStartDate[8], //COBALT AND CERULEAN
              title: "XXX",
              implemented: true
            }, {
              days: challengeStartDate[9], //WHY VALVOLINE
              title: "XXX",
              implemented: true
            }];

      var truncatedLB = true; //True for top 3 (+ you), false for full chart

      var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

      function wordDay(theDate) {
        return monthNames[theDate.getMonth()] + " " + theDate.getDate() + ", " + theDate.getFullYear();
      }

      var todaysDate = new Date(); //Update Portal track visibility based on user track

      function updateTrack() {
        firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
            var userId = firebase.auth().currentUser.uid;
            var ref = firebase.database().ref('/' + dbLocation + '/' + userId);
            ref.once("value").then(function (snapshot) {
              if (snapshot.child("PrivacyPolicy").val() == false) {
                //First time access. Show Privacy Policy.
                $('#privacyMask', $("#contents").contents()).css('display', 'block');
                $('#prRecommended', $("#contents").contents()).css('display', 'block');
                $('.privacyBG > .closeButton', $("#contents").contents()).css('display', 'none');
              } //console.log(snapshot.child("FirstName").val() + " " + snapshot.child("LastName").val());
              //console.log("is this a test account?")
              //console.log((snapshot.child("AccountType").val() != "test"))

              //checkIfInClass(snapshot, "AD");
             //setChallengeProgressIndicators(snapshot, "AD");
              //populateLeaderboard(snapshot, "AD");
              checkIfInClass(snapshot, "HD");
              setChallengeProgressIndicators(snapshot, "HD");
              populateLeaderboard(snapshot, "HD");
              checkIfInClass(snapshot, "LD");
              setChallengeProgressIndicators(snapshot, "LD");
              populateLeaderboard(snapshot, "LD");
              checkIfInClass(snapshot, "VPS");
              setChallengeProgressIndicators(snapshot, "VPS");
              populateLeaderboard(snapshot, "VPS");
            });
          }
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
            ref.once("value").then(function (snapshot) {
              var dateNow = Date();
              var dayZero = convertToDate(snapshot.child("ClassCompletion" + thisClass).val()); //var unlockDate = new Date(dayZero.getTime());
              console.log('Current user ClassCompletion'+ thisClass +' date value: ' + snapshot.child("ClassCompletion" + thisClass).val())
              //unlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][cNum - 1].days);

              var c1UnlockDate = new Date(dayZero.getTime());
              c1UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][0].days);
              var c2UnlockDate = new Date(dayZero.getTime());
              c2UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][1].days);
              var c3UnlockDate = new Date(dayZero.getTime());
              c3UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][2].days);
              var c4UnlockDate = new Date(dayZero.getTime());
              c4UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][3].days);
              var c5UnlockDate = new Date(dayZero.getTime());
              c5UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][4].days);
              var c6UnlockDate = new Date(dayZero.getTime());
              c6UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][5].days);
              var c7UnlockDate = new Date(dayZero.getTime());
              c7UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][6].days);
              var c8UnlockDate = new Date(dayZero.getTime());
              c8UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][7].days);
              var c9UnlockDate = new Date(dayZero.getTime());
              c9UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][8].days);
              var c10UnlockDate = new Date(dayZero.getTime());
              c10UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][9].days); // Source: http://stackoverflow.com/questions/497790

              var dates = {
                convert: function convert(d) {
                  // Converts the date in d to a date-object. The input can be:
                  //   a date object: returned without modification
                  //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
                  //   a number     : Interpreted as number of milliseconds
                  //                  since 1 Jan 1970 (a timestamp) 
                  //   a string     : Any format supported by the javascript engine, like
                  //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
                  //  an object     : Interpreted as an object with year, month and date
                  //                  attributes.  **NOTE** month is 0-11.
                  return d.constructor === Date ? d : d.constructor === Array ? new Date(d[0], d[1], d[2]) : d.constructor === Number ? new Date(d) : d.constructor === String ? new Date(d) : _typeof(d) === "object" ? new Date(d.year, d.month, d.date) : NaN;
                },
                compare: function compare(a, b) {
                  // Compare two dates (could be of any type supported by the convert
                  // function above) and returns:
                  //  -1 : if a < b
                  //   0 : if a = b
                  //   1 : if a > b
                  // NaN : if a or b is an illegal date
                  // NOTE: The code inside isFinite does an assignment (=).
                  return isFinite(a = this.convert(a).valueOf()) && isFinite(b = this.convert(b).valueOf()) ? (a > b) - (a < b) : NaN;
                },
                inRange: function inRange(d, start, end) {
                  // Checks if date in d is between dates in start and end.
                  // Returns a boolean or NaN:
                  //    true  : if d is between start and end (inclusive)
                  //    false : if d is before start or after end
                  //    NaN   : if one or more of the dates is illegal.
                  // NOTE: The code inside isFinite does an assignment (=).
                  return isFinite(d = this.convert(d).valueOf()) && isFinite(start = this.convert(start).valueOf()) && isFinite(end = this.convert(end).valueOf()) ? start <= d && d <= end : NaN;
                }
              }; //-1 if a < b
              //0 if a = b
              //1 if a > b
              //NaN if a or b is an illegal date
              //dates.compare(a, b)

              if (snapshot.val()["c" + thisClass]["c1" + thisClass] == "1" && dates.compare(dateNow, c2UnlockDate) == 1) {
                cNum = 2;
              }

              if (snapshot.val()["c" + thisClass]["c2" + thisClass] == "1" && dates.compare(dateNow, c3UnlockDate) == 1) {
                cNum = 3;
              }

              if (snapshot.val()["c" + thisClass]["c3" + thisClass] == "1" && dates.compare(dateNow, c4UnlockDate) == 1) {
                cNum = 4;
              }

              if (snapshot.val()["c" + thisClass]["c4" + thisClass] == "1" && dates.compare(dateNow, c5UnlockDate) == 1) {
                cNum = 5;
              }

              if (snapshot.val()["c" + thisClass]["c5" + thisClass] == "1" && dates.compare(dateNow, c6UnlockDate) == 1) {
                cNum = 6;
              }

              if (snapshot.val()["c" + thisClass]["c6" + thisClass] == "1" && dates.compare(dateNow, c7UnlockDate) == 1) {
                cNum = 7;
              }

              if (snapshot.val()["c" + thisClass]["c7" + thisClass] == "1" && dates.compare(dateNow, c8UnlockDate) == 1) {
                cNum = 8;
              }

              if (snapshot.val()["c" + thisClass]["c8" + thisClass] == "1" && dates.compare(dateNow, c9UnlockDate) == 1) {
                cNum = 9;
              }

              if (snapshot.val()["c" + thisClass]["c9" + thisClass] == "1" && dates.compare(dateNow, c10UnlockDate) == 1) {
                cNum = 10;
              } //console.log('cNum: ' + cNum)

              console.log("Start button directing user to - challenge_" + cNum + "_" + thisClass.toLowerCase() + ".html");
              parent.navigateIframe("challenge_" + cNum + "_" + thisClass.toLowerCase() + ".html"); ////console.log(dateNow.getTime())
              ////console.log(unlockDate.getTime())
              // //console.log(snapshot.val()["c" + thisClass])
              // if (dateNow < unlockDate) {
              //   alert(true)
              // } else {
              //   alert(false)
              // }
              // if(snapshot.val()["c" + thisClass]["c1" + thisClass] == "1")
              // {
              //   cNum = 2;
              // }
              // parent.navigateIframe("challenge_" + cNum + "_" + thisClass.toLowerCase() + ".html");
            });
          }
        });
      }

      function convertToDate(dbDate) {
         console.log(dbDate)
        var theMonth = dbDate.substr(5, 2);
        var theDay = dbDate.substr(8, 2);
        var theYear = dbDate.substr(0, 4);
        var theDate = new Date(Number(theYear), Number(theMonth) - 1, Number(theDay), 0, 0, 0, 0);
        theDate.setDate(theDate.getDate()); //Add one day to get second day of class

        return theDate;
      }

      function checkIfInClass(snapshot, thisClass) {
        if (snapshot.child("Class" + thisClass).val()) {
          $("#" + thisClass + "Widget .sectionWidget,#" + thisClass + "Leader .sectionWidget", $("#contents").contents()).css('display', 'block');
          $("#" + thisClass + "Block", $("#contents").contents()).addClass("active");
          $("#" + thisClass + "Block .learnMoreButton", $("#contents").contents()).html("Start");
          $("#" + thisClass + "Block > a", $("#contents").contents()).click(function () {
            nextChallenge(thisClass);
          });
        }
      }

      // function setChallengeProgressIndicators(snapshot, thisClass) {
      //   $.each(snapshot.child('c' + thisClass).val(), function (index, value) {
      //     //console.log('Current Challenge id: ' + index)
      //     //console.log('Current Challenge bookmarking: ' + value)
      //     var dayZero = convertToDate(snapshot.child("ClassCompletion" + thisClass).val()); //console.log("Current Class Start Date: " + dayZero);

      //     //If not taken
      //     if (!index.includes("points") && !index.includes("first") && !index.includes("second") && !index.includes("third")) {
      //       var cNum = Number(index.replace(/[^0-9]+/g, '')); //Number of challenge, 1-10

      //       if (window["dayArray" + thisClass][cNum - 1].skip) {
      //         console.log("skipping " + cNum);
      //         console.log($("#" + thisClass + "Widget .sectionTask:eq(" + (cNum - 1) + ")", $("#contents").contents()));
      //         $("#" + thisClass + "Widget .sectionTask:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      //         $("#" + thisClass + "Widget .sectionHorizontalLine:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      //       }

      //       if (!window["dayArray" + thisClass][cNum - 1].implemented) {
      //         $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      //       }

      //       var unlockDate = new Date(dayZero.getTime());
      //       var unlockTime = new Date(dayZero.getTime()); // //console.log("challenge number: " + cNum);
      //       // function millisToMinutesAndSeconds(millis) {
      //       //   var minutes = Math.floor(millis / 60000);
      //       //   var seconds = ((millis % 60000) / 1000).toFixed(0);
      //       //   //console.log(minutes + ":" + (seconds < 10 ? '0' : '') + seconds);
      //       //   return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      //       // }
      //       // millisToMinutesAndSeconds(window["dayArray" + thisClass][cNum - 1].time);
      //       //Start Class date + dayArray interval
      //       //unlockTime.setTime(dayZero.getTime() + window["dayArray" + thisClass][cNum - 1].time);

      //       unlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][cNum - 1].days); //console.log("unlockDate: " + unlockDate);
      //       ////console.log('Day of challenge unlock: ' + window["dayArray" + thisClass][cNum - 1].days);

      //       var dateText = wordDay(unlockDate);
      //       $("#" + thisClass + "Widget .activityDate:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("START DATE • " + dateText);
      //       var timeLimitInitialAttempt;
      //       var timeUntilRetry;
      //       var retryAvailableFor;
      //       var coolDown;
      //       var retryAvailableUntil;

      //       if (parent.isDemoMode) {
      //         timeLimitInitialAttempt = 7;
      //         timeUntilRetry = 0;
      //         retryAvailableFor = 7;
      //         coolDown = 7;
      //       } else {
      //         timeLimitInitialAttempt = 7;
      //         timeUntilRetry = 0;
      //         retryAvailableFor = 7;
      //       } //console.log('timeLimitInitialAttempt: ' + timeLimitInitialAttempt)
      //       //console.log('timeUntilRetry: ' + timeUntilRetry)
      //       ////console.log(Math.floor((todaysDate - unlockDate) / 86400000))
      //       ////console.log('Miliseconds into ou window that is open for the challenge: ' + (Math.floor((todaysDate - unlockDate) / 86400000)))                                                        


      //       var daysLeft = Math.floor((unlockDate - todaysDate) / 86400000) + timeLimitInitialAttempt;
      //       var timeLeft = Math.floor((todaysDate - unlockDate) / 86400000);
      //       var challengeClosed = false;
      //       var retryAvailable = false; //console.log('daysLeft: ' + daysLeft)
      //       //console.log('todaysDate: ' + todaysDate);
      //       //console.log('unlockDate: ' + unlockDate);
      //       //console.log('(todaysDate - unlockDate): ' + (unlockDate - todaysDate))
      //       //console.log('(Math.floor((todaysDate - unlockDate) / 86400000)): ' + (Math.floor((unlockDate - todaysDate) / 86400000) + timeLimitInitialAttempt) )

      //       if (daysLeft > 1) {
      //         $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text(daysLeft + " days left");
      //       } else {
      //         $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("Time is running out");
      //       } //Tracks first attempt


      //       if (snapshot.child('c' + thisClass).val()[index + "first"] != undefined) {
      //         if (snapshot.child('c' + thisClass).val()[index + "second"] != undefined) {
      //           if (snapshot.child('c' + thisClass).val()[index + "third"] != undefined) {
      //             challengeClosed = true;
      //           } else {
      //             retryAvailableUntil = Date.parse(snapshot.child('c' + thisClass).val()[index + "second"]) + retryAvailableFor * 86400000; //console.log(Date.parse(todaysDate))
      //             //console.log(Date.parse(snapshot.child('c' + thisClass).val()[index + "second"]))
      //             //console.log('retryAvailableUntil: ' + retryAvailableUntil);

      //             retryAvailable = Date.parse(todaysDate) > Date.parse(snapshot.child('c' + thisClass).val()[index + "second"]) && Date.parse(todaysDate) < retryAvailableUntil;
      //             timeUntilRetry = Date.parse(snapshot.child('c' + thisClass).val()[index + "second"]) - todaysDate - coolDown * 86400000; //console.log('retryAvailable: ' + retryAvailable)
      //             //console.log('timeUntilRetry: ' + timeUntilRetry)
      //           }
      //         } else {
      //           ////console.log('retryAvailableFor: ' + retryAvailableFor);
      //           ////console.log(((todaysDate - Date.parse(snapshot.child('c' + thisClass).val()[index + "first"])) - (retryAvailableFor * 86400000)))
      //           ////console.log(Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]))
      //           retryAvailableUntil = Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]) + retryAvailableFor * 86400000; //console.log(Date.parse(todaysDate))
      //           //console.log(Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]))
      //           //console.log('retryAvailableUntil: ' + retryAvailableUntil);

      //           retryAvailable = Date.parse(todaysDate) > Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]) && Date.parse(todaysDate) < retryAvailableUntil;
      //           timeUntilRetry = Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]) - todaysDate; //console.log('retryAvailable: ' + retryAvailable)
      //           //console.log('timeUntilRetry: ' + timeUntilRetry)
      //         }
      //       } else {//console.log('timeUntilRetry: ' + timeUntilRetry)
      //         } //console.log('daysLeft: ' + daysLeft)
      //       //var timeLeft = Math.floor((todaysDate - unlockDate) / 86400000);
      //       ////console.log("timeLeft: " + timeLeft);


      //       if (timeLimitInitialAttempt - 1 - Math.floor((todaysDate - unlockDate) / 86400000) >= timeLimitInitialAttempt && window["dayArray" + thisClass][cNum - 1].implemented) {
      //         //console.log('Course to be unlocked. Only applies to first three challenges at the moment');
      //         //Course to be unlocked.
      //         $("#" + thisClass + "Widget .sectionTask:eq(" + (cNum - 1) + ")", $("#contents").contents()).addClass('upcoming');
      //         $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('upcoming');
      //         $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Coming Soon');
      //         $("#" + index, $("#contents").contents()).parent().parent().children('a').css('pointer-events', 'none');
      //         $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      //       } else if (timeLimitInitialAttempt - 1 - Math.floor((todaysDate - unlockDate) / 86400000) < 0 && window["dayArray" + thisClass][cNum - 1].implemented && value != 1) {
      //         //console.log('Course is closed due to timeout.')
      //         //Course is closed due to timeout.
      //         $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').css('display', 'none');
      //         $("#" + index, $("#contents").contents()).parent().parent().children('.challengeFailed').css('display', 'block');
      //         $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #979797 50%, #FFFFFF 0)');
      //         $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      //       } else if (value == 0) {
      //         //console.log('Course available, not started')
      //         //Course available, not started
      //         $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #FFFFFF 100%, #78DD36 0)');
      //       } else if (value == 1) {
      //         //console.log('Course finished')
      //         //Course finished
      //         $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('complete');
      //         $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').css('display', 'none');
      //         $("#" + index, $("#contents").contents()).parent().parent().children('.challengeCleared').css('display', 'block');
      //         $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #78DD36 100%, #FFFFFF 0)');
      //         $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      //       } else if (value == 0.2 && snapshot.child('c' + thisClass).val()[index + "first"] === undefined) {
      //         //console.log('Course started, not finished')
      //         //Course started, not finished
      //         $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('incomplete');
      //         $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #FBB03B 50%, #FFFFFF 0)');
      //         $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Incomplete');
      //       } else if (value == 0.2 && snapshot.child('c' + thisClass).val()[index + "first"] !== undefined && snapshot.child('c' + thisClass).val()[index + "second"] === undefined && snapshot.child('c' + thisClass).val()[index + "third"] === undefined) {
      //         //console.log('Challenge taken once, started but not finished during second attempt')
      //         //Challenge taken once, started but not finished during second attempt
      //         $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text(daysLeft + " days left");
      //         $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('incomplete');
      //         $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #FBB03B 50%, #FFFFFF 0)');
      //         $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Incomplete');
      //       } else if (value == 0.5 && snapshot.child('c' + thisClass).val()[index + "first"] !== undefined || value == 0.5 && snapshot.child('c' + thisClass).val()[index + "second"] !== undefined || snapshot.child('c' + thisClass).val()[index + "third"] === 0) {
      //         //console.log("case 0")
      //         //console.log(todaysDate >= Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]))
      //         //console.log(retryAvailable)
      //         //console.log(snapshot.child('c' + thisClass).val()[index + "second"]===undefined)
      //         //console.log("////////////")
      //         //console.log(todaysDate < Date.parse(snapshot.child('c' + thisClass).val()[index + "first"] ))
      //         //console.log(snapshot.child('c' + thisClass).val()[index + "second"]===undefined)
      //         if (todaysDate >= Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]) && retryAvailable && snapshot.child('c' + thisClass).val()[index + "second"] === undefined || todaysDate >= Date.parse(snapshot.child('c' + thisClass).val()[index + "second"]) && retryAvailable && snapshot.child('c' + thisClass).val()[index + "third"] === undefined && snapshot.child('c' + thisClass).val()[index + "third"] != 0) {
      //           //console.log("case 1")
      //           //console.log(Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]))
      //           //Challenge taken once, available to take second time, user has not attempted yet.
      //           if (daysLeft >= 1) {
      //             $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text(daysLeft + " days left");
      //           } else {
      //             $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("Time is running out");
      //           }

      //           $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('retry');
      //           $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #E1261C 50%, #FFFFFF 0)');
      //           $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Retake');
      //         } else if (todaysDate < Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]) && snapshot.child('c' + thisClass).val()[index + "second"] === undefined && !retryAvailable || todaysDate < Date.parse(snapshot.child('c' + thisClass).val()[index + "second"]) && !retryAvailable && snapshot.child('c' + thisClass).val()[index + "third"] === undefined && snapshot.child('c' + thisClass).val()[index + "third"] != 0) {
      //           //console.log("case 2")
      //           //console.log(todaysDate < Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]))
      //           //console.log(snapshot.child('c' + thisClass).val()[index + "second"]===undefined)
      //           //console.log(todaysDate < Date.parse(snapshot.child('c' + thisClass).val()[index + "second"]))
      //           //console.log(snapshot.child('c' + thisClass).val()[index + "third"]===undefined)
      //           //Challenge taken once and failed, in weeklong cooldown period until second attempt.
      //           daysLeft = Math.ceil(timeUntilRetry / 86400000); //console.log("snapshot.child('c' + thisClass).val()[index + 'first']: " + snapshot.child('c' + thisClass).val()[index + "first"])
      //           //console.log("Date.parse(snapshot.child('c' + thisClass).val()[index + 'first']): " + Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]))
      //           //console.log('todaysDate: ' + todaysDate);
      //           //console.log('daysLeft: ' + daysLeft);

      //           $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text(daysLeft + " days until retry");
      //           $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Locked');
      //           $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('upcoming');
      //           $("#" + index, $("#contents").contents()).parent().parent().children('a').css('pointer-events', 'none');
      //         } else if (todaysDate < Date.parse(snapshot.child('c' + thisClass).val()[index + "second"]) && snapshot.child('c' + thisClass).val()[index + "third"] !== undefined) {
      //           //console.log("case 3")
      //           //Challenge taken once and failed, in weeklong cooldown period until second attempt.
      //           daysLeft = Math.floor((Date.parse(snapshot.child('c' + thisClass).val()[index + "second"]) - todaysDate) / 86400000 + timeUntilRetry); //console.log('daysLeft: ' + daysLeft);
      //           //console.log("Date.parse(snapshot.child('c' + thisClass).val()[index + 'second']): " + Date.parse(snapshot.child('c' + thisClass).val()[index + "second"]));
      //           //console.log("snapshot.child('c' + thisClass).val()[index + 'second']: " + snapshot.child('c' + thisClass).val()[index + 'second']);
      //           //console.log("todaysDate: " + todaysDate);

      //           $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text(daysLeft + " days until retry");
      //           $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Locked');
      //           $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('upcoming');
      //           $("#" + index, $("#contents").contents()).parent().parent().children('a').css('pointer-events', 'none');
      //         } else if (snapshot.child('c' + thisClass).val()[index + "third"] !== undefined || todaysDate > unlockDate + timeLimitInitialAttempt * 86400000) {
      //           //console.log("case 4")
      //           //Challenge taken three times, now locked for good.
      //           $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').css('display', 'none');
      //           $("#" + index, $("#contents").contents()).parent().parent().children('.challengeFailed').css('display', 'block');
      //           $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #979797 50%, #FFFFFF 0)');
      //           $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      //         }
      //       }
      //     }
      //   });
      // }
      function setChallengeProgressIndicators(snapshot, thisClass) {
        var dayZero = convertToDate(snapshot.child("ClassCompletion" + thisClass).val());
        var todaysDate = new Date(); // Assuming this is initialized somewhere

        $.each(snapshot.child('c' + thisClass).val(), function (index, value) {
          var indexId = index;
          var valueBookmarking = value;

          if (!indexId.includes("points") && !indexId.includes("first") &&
            !indexId.includes("second") && !indexId.includes("third")) {
            var cNum = Number(indexId.replace(/[^0-9]+/g, ''));

            console.log('Processing challenge ' + cNum);

            if (window["dayArray" + thisClass][cNum - 1].skip) {
              console.log("Skipping challenge " + cNum);
              $("#" + thisClass + "Widget .sectionTask:eq(" + (cNum - 1) + "), " +
                  "#" + thisClass + "Widget .sectionHorizontalLine:eq(" + (cNum - 1) + ")",
                  $("#contents").contents())
                .hide();
            }

            if (!window["dayArray" + thisClass][cNum - 1].implemented) {
              console.log("Challenge " + cNum + " is not implemented.");
              $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
            }

            var unlockDate = new Date(dayZero.getTime());
            unlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][cNum - 1].days);

            console.log('Unlock date for challenge ' + cNum + ': ' + unlockDate);


            var challengeState = getChallengeState(snapshot, thisClass, indexId, unlockDate, value);
            console.log(thisClass + ' - Challenge - ' + cNum + ' state: ' + challengeState);
            updateChallengeUI(thisClass, indexId, cNum, challengeState, unlockDate, value);
            setActivityDate(thisClass, cNum, unlockDate);

          }
        });
      }

      function updateChallengeUI(thisClass, indexId, cNum, challengeState, unlockDate, value) {
        var todaysDate = new Date(); // Assuming this is initialized somewhere

        console.log('Updating UI for challenge ' + cNum + ' with state: ' + challengeState);

        if (challengeState === "closed") {
          console.log('Challenge ' + cNum + ' is closed.');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').css('display', 'none');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('.challengeFailed').css('display', 'block');
          $("#" + indexId, $("#contents").contents()).css('background', 'linear-gradient(90deg, #979797 50%, #FFFFFF 0)');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("");
        } else if (challengeState === "finished") {
          console.log('Challenge ' + cNum + ' is finished.');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('complete').css('display', 'none');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('.challengeCleared').css('display', 'block');
          $("#" + indexId, $("#contents").contents()).css('background', 'linear-gradient(90deg, #78DD36 100%, #FFFFFF 0)');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("");
        } else if (challengeState.includes("started_not_finished_first")) {
          console.log('Challenge ' + cNum + ' is started but not finished (First attempt).');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('incomplete');
          $("#" + indexId, $("#contents").contents()).css('background', 'linear-gradient(90deg, #FBB03B 50%, #FFFFFF 0)');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Incomplete');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("1st attempt");
        } else if (challengeState.includes("started_not_finished_second")) {
          console.log('Challenge ' + cNum + ' is started but not finished (Second attempt).');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('incomplete');
          $("#" + indexId, $("#contents").contents()).css('background', 'linear-gradient(90deg, #FBB03B 50%, #FFFFFF 0)');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Incomplete');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("2nd attempt");
        } else if (challengeState.includes("started_not_finished_third")) {
          console.log('Challenge ' + cNum + ' is started but not finished (Third attempt).');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('incomplete');
          $("#" + indexId, $("#contents").contents()).css('background', 'linear-gradient(90deg, #FBB03B 50%, #FFFFFF 0)');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Incomplete');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("3rd attempt");
        } else if (challengeState.includes("retry_available_first")) {
          console.log('Challenge ' + cNum + ' is available for retry (First attempt).');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('retry');
          $("#" + indexId, $("#contents").contents()).css('background', 'linear-gradient(90deg, #E1261C 50%, #FFFFFF 0)');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Retake');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("1st attempt");
        } else if (challengeState.includes("retry_available_second")) {
          console.log('Challenge ' + cNum + ' is available for retry (Second attempt).');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('retry');
          $("#" + indexId, $("#contents").contents()).css('background', 'linear-gradient(90deg, #E1261C 50%, #FFFFFF 0)');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Retake');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("2nd attempt");
        } else if (challengeState.includes("retry_available_third")) {
          console.log('Challenge ' + cNum + ' is available for retry (Third attempt).');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('retry');
          $("#" + indexId, $("#contents").contents()).css('background', 'linear-gradient(90deg, #E1261C 50%, #FFFFFF 0)');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Retake');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("3rd attempt");
        } else if (challengeState === "upcoming") {
          console.log('Challenge ' + cNum + ' is upcoming.');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Locked').addClass('upcoming');
          $("#" + indexId, $("#contents").contents()).parent().parent().children('a').css('pointer-events', 'none');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("Coming Soon!");
        } else if (challengeState === "unlocked") {
          console.log('Challenge ' + cNum + ' is unlocked.');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("Get Started!");
        }
      }


      function setActivityDate(thisClass, cNum, unlockDate) {
        var dateText = wordDay(unlockDate);
        console.log('Setting activity date for challenge ' + cNum + ': ' + dateText);
        $("#" + thisClass + "Widget .activityDate:eq(" + (cNum - 1) + ")", $("#contents").contents())
          .text("START DATE • " + dateText);
      }

      // Helper function to determine challenge state based on snapshot data
      function getChallengeState(snapshot, thisClass, indexId, unlockDate, value) {
        var todaysDate = new Date(); // Assuming this is initialized somewhere
        console.log("challenge # - " + indexId + " - " + thisClass);
        console.log("value: " + value);
        console.log('first - ' + snapshot.child('c' + thisClass).val()[indexId + "first"]);
        console.log('second - ' + snapshot.child('c' + thisClass).val()[indexId + "second"]);
        console.log('third - ' + snapshot.child('c' + thisClass).val()[indexId + "third"]);
        console.log(snapshot.child('c' + thisClass).val()[indexId + "first"] === undefined)
        if (snapshot.child('c' + thisClass).val()[indexId + "third"] !== undefined) {
          console.log("closed");
          return "closed";
        } else if (value == 1) {
          console.log("finished");
          return "finished";
        } else if (value == 0.5 && snapshot.child('c' + thisClass).val()[indexId + "first"] && snapshot.child('c' + thisClass).val()[indexId + "second"] && snapshot.child('c' + thisClass).val()[indexId + "third"] === undefined) {
          console.log("retry_available_third");
          return "retry_available_third";
        } else if (value == 0.2 && snapshot.child('c' + thisClass).val()[indexId + "first"] && snapshot.child('c' + thisClass).val()[indexId + "second"] && snapshot.child('c' + thisClass).val()[indexId + "third"] === undefined) {
          console.log("started_not_finished_third");
          return "started_not_finished_third";
        } else if (value == 0.5 && snapshot.child('c' + thisClass).val()[indexId + "first"] && snapshot.child('c' + thisClass).val()[indexId + "second"] === undefined) {
          console.log("retry_available_second");
          return "retry_available_second";
        } else if (value == 0.2 && snapshot.child('c' + thisClass).val()[indexId + "first"] && snapshot.child('c' + thisClass).val()[indexId + "second"] === undefined) {
          console.log("started_not_finished_second");
          return "started_not_finished_second";
        } else if (value == 0.5 && snapshot.child('c' + thisClass).val()[indexId + "first"]) {
          console.log("retry_available_first"); //unnecessary?
          return "retry_available_first";
        } else if (value == 0.2 && snapshot.child('c' + thisClass).val()[indexId + "first"] === undefined) {
          console.log("started_not_finished_first");
          return "started_not_finished_first";
        } else {
          if (todaysDate < unlockDate) { //value == 0
            console.log("upcoming");
            return "upcoming";
          } else {
            console.log("unlocked");
            return "unlocked";
          }
        }
      }






      function populateLeaderboard(snapshot, thisClass) {
        //Populate the leaderboard
        var youOnLB = false;
        var allUsers = db.ref('/' + dbLocation).orderByChild("TotalPoints" + thisClass); // allUsers.on('value', function (snapshot) {
        //   const data = snapshot.val();
        //   //console.log(data)
        //   snapshot.forEach(function(value){
        //     var thisVal = value.val();
        //     //console.log(thisVal)
        //   });
        // });
        // //console.log("snapshot")
        // //console.log(snapshot)
        // var thisVal = allUsers;
        // console.log(thisVal)

        var onLBHD = allUsers.once("value", function (data4) {
          //console.log
          $("#" + thisClass + "Leader .expandedSection", $("#contents").contents()).html(""); //For top 3 users, print points to console

          var rankings = new Array();
          var accountType = snapshot.child("AccountType").val();
          var isTestAccount;

          if (accountType == "test") {
            isTestAccount = true;
          } else {
            isTestAccount = false;
          }

          var userClassDate = snapshot.child("ClassCompletion" + thisClass).val(); //console.log("accountType")
          //console.log(accountType)
          //console.log(accountType == "test")
          //console.log(snapshot.key)
          //console.log(snapshot.value)

          data4.forEach(function (value) {
            var thisVal = value.val();
            //console.log(thisVal); //console.log(data4.value)
            //console.log("data4")

            if (value.val()["Class" + thisClass] && userClassDate == value.val()["ClassCompletion" + thisClass] && value.val()["AccountType"] != "test") {
              rankings.unshift(value.val());
            }
          });
          var i = 0;
          rankings.forEach(function (child) {
            var place = "userRow",
              place2 = "";

            if (i <= 2 && child.Email == snapshot.child("Email").val()) {
              youOnLB = true;
            }

            if (i == 0) {
              place2 = "1ST";
            } else if (i == 1) {
              place2 = "2ND";
            } else if (i == 2) {
              place2 = "3RD";
            }

            if (truncatedLB == false || truncatedLB == true && i <= 2) {
              $("#" + thisClass + "Leader .expandedSection", $("#contents").contents()).append("<div class=\"".concat(place, "\">\n        <div class=\"sellerPlace\">").concat(place2, "</div>\n        <div class=\"sellerName\">").concat(child.FirstName + " " + child.LastName, "</div>\n        <div class=\"scoreText\">\n            <font class=\"highScore\">").concat(child["TotalPoints" + thisClass], "</font>\n            <font class=\"pointsText\">POINTS</font>\n        </div>\n        </div>"));
            }

            i++;
          });

          if (truncatedLB && !youOnLB && !isTestAccount) {
            //console.log(snapshot.child('TotalPoints' + thisClass).val());
            //console.log(isTestAccount);
            var firstName = snapshot.child("FirstName").val();
            var lastName = snapshot.child("LastName").val();
            var totalPoints = snapshot.child('TotalPoints' + thisClass).val(); // //console.log(firstName)
            // //console.log(lastName)
            // //console.log(totalPoints)

            $("#" + thisClass + "Leader .expandedSection", $("#contents").contents()).append("<div class=\"userRow\">\n        <div class=\"sellerPlace\">YOU</div>\n        <div class=\"sellerName\">".concat(firstName + " " + lastName, "</div>\n        <div class=\"scoreText\">\n            <font class=\"highScore\">").concat(totalPoints, "</font>\n            <font class=\"pointsText\">POINTS</font>\n        </div>\n        </div>"));
          }
        });
      }