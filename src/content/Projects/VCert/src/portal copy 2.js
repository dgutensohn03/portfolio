var dayArrayHD = [
    {days:0,title:"10,000 Mile Drain Extension", implemented:true},
    {days:14,title:"Value to Customer", implemented:true},
    {days:28,title:"Engine Oil Advantage", implemented:true},
    {days:42,title:"One Solution™", implemented:true},
    {days:56,title:"ZEREX™ Approvals", implemented:true},
    {days:70,title:"ZEREX™ Nitrite Free Coolant", implemented:true},
    {days:84,title:"Transmission Fluids", implemented:true},
    {days:98,title:"Gear Oils", implemented:true},
    {days:112,title:"HD Grease", implemented:true},
    {days:126,title:"Why Valvoline™", implemented:true}
];
var dayArrayLD = [
  {
    days: 0,
    title: "SPARK"
  },
  {
    days: 14,
    title: "VPERK$"
  },
  {
    days: 28,
    title: "Valvoline™ Premium Oils"
  },
  {
    days: 42,
    title: "ZEREX™"
  },
  {
    days: 56,
    title: "The Valvoline™ Story"
  },
  {
    days: 70,
    title: "Multi-Vehicle ATF"
  },
  {
    days: 84,
    title: "The Sales Process"
  },
  {
    days: 98,
    title: "The Valvoline™ Reward Program"
  },
  {
    days: 112,
    title: "Added-Value Programs"
  },
  {
    days: 126,
    title: "Why Valvoline™"
  }
];
var dayArrayVPS = [
  {days:0,title:"SPARK", implemented:true},
  {days:14,title:"VPS Guarantee", implemented:true},
  {days:28,title:"VPS Profit Potential", implemented:true},
  {days:42,title:"All Engine Clean First Defense", implemented:true},
  {days:56,title:"Incentives", implemented:true},
  {days:70,title:"Why Valvoline", implemented:true},
  {days:84,title:"15k restoration kit", implemented:true},
  {days:98,title:"VPS Scorecard", implemented:true},
  {days:112,title:"Dealership", implemented:true},
  {days:126,title:"The Sales Process", implemented:true}
];

var truncatedLB = true; //True for top 3 (+ you), false for full chart

var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
function wordDay(theDate)
{
    return monthNames[theDate.getMonth()] + " " + theDate.getDate() + ", " + theDate.getFullYear();
}

let todaysDate = new Date();

//Update Portal track visibility based on user track
function updateTrack() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref('/'+ dbLocation +'/' + userId);
      ref.once("value").then(function (snapshot) {
        if (snapshot.child("PrivacyPolicy").val() == false) {
          //First time access. Show Privacy Policy.
          $('#privacyMask', $("#contents").contents()).css('display', 'block');
          $('#prRecommended', $("#contents").contents()).css('display', 'block');
          $('.privacyBG > .closeButton', $("#contents").contents()).css('display', 'none');
        }

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
      ref.once("value")
        .then(function (snapshot) {
          
          var dateNow = Date();
          var dayZero = convertToDate(snapshot.child("ClassCompletion" + thisClass).val());
          //var unlockDate = new Date(dayZero.getTime());
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
          c10UnlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][9].days);

          // Source: http://stackoverflow.com/questions/497790
var dates = {
  convert:function(d) {
      // Converts the date in d to a date-object. The input can be:
      //   a date object: returned without modification
      //  an array      : Interpreted as [year,month,day]. NOTE: month is 0-11.
      //   a number     : Interpreted as number of milliseconds
      //                  since 1 Jan 1970 (a timestamp) 
      //   a string     : Any format supported by the javascript engine, like
      //                  "YYYY/MM/DD", "MM/DD/YYYY", "Jan 31 2009" etc.
      //  an object     : Interpreted as an object with year, month and date
      //                  attributes.  **NOTE** month is 0-11.
      return (
          d.constructor === Date ? d :
          d.constructor === Array ? new Date(d[0],d[1],d[2]) :
          d.constructor === Number ? new Date(d) :
          d.constructor === String ? new Date(d) :
          typeof d === "object" ? new Date(d.year,d.month,d.date) :
          NaN
      );
  },
  compare:function(a,b) {
      // Compare two dates (could be of any type supported by the convert
      // function above) and returns:
      //  -1 : if a < b
      //   0 : if a = b
      //   1 : if a > b
      // NaN : if a or b is an illegal date
      // NOTE: The code inside isFinite does an assignment (=).
      return (
          isFinite(a=this.convert(a).valueOf()) &&
          isFinite(b=this.convert(b).valueOf()) ?
          (a>b)-(a<b) :
          NaN
      );
  },
  inRange:function(d,start,end) {
      // Checks if date in d is between dates in start and end.
      // Returns a boolean or NaN:
      //    true  : if d is between start and end (inclusive)
      //    false : if d is before start or after end
      //    NaN   : if one or more of the dates is illegal.
      // NOTE: The code inside isFinite does an assignment (=).
     return (
          isFinite(d=this.convert(d).valueOf()) &&
          isFinite(start=this.convert(start).valueOf()) &&
          isFinite(end=this.convert(end).valueOf()) ?
          start <= d && d <= end :
          NaN
      );
  }
}

//-1 if a < b
//0 if a = b
//1 if a > b
//NaN if a or b is an illegal date
//dates.compare(a, b)
          if(snapshot.val()["c" + thisClass]["c1" + thisClass] == "1" && dates.compare(dateNow, c2UnlockDate) == 1)
          { 
            cNum = 2;
          }
          if(snapshot.val()["c" + thisClass]["c2" + thisClass] == "1" && dates.compare(dateNow, c3UnlockDate) == 1)
          {
            cNum = 3;
          }
          if(snapshot.val()["c" + thisClass]["c3" + thisClass] == "1" && dates.compare(dateNow, c4UnlockDate) == 1)
          {
            cNum = 4;
          }
          if(snapshot.val()["c" + thisClass]["c4" + thisClass] == "1" && dates.compare(dateNow, c5UnlockDate) == 1)
          {
            cNum = 5;
          }
          if(snapshot.val()["c" + thisClass]["c5" + thisClass] == "1" && dates.compare(dateNow, c6UnlockDate) == 1)
          {
            cNum = 6;
          }
          if(snapshot.val()["c" + thisClass]["c6" + thisClass] == "1" && dates.compare(dateNow, c7UnlockDate) == 1)
          {
            cNum = 7;
          }
          if(snapshot.val()["c" + thisClass]["c7" + thisClass] == "1" && dates.compare(dateNow, c8UnlockDate) == 1)
          {
            cNum = 8;
          }
          if(snapshot.val()["c" + thisClass]["c8" + thisClass] == "1" && dates.compare(dateNow, c9UnlockDate) == 1)
          {
            cNum = 9;
          }
          if(snapshot.val()["c" + thisClass]["c9" + thisClass] == "1" && dates.compare(dateNow, c10UnlockDate) == 1)
          {
            cNum = 10;
          }
          console.log('cNum: ' + cNum)
          parent.navigateIframe("challenge_" + cNum + "_" + thisClass.toLowerCase() + ".html");



          //console.log(dateNow.getTime())
          //console.log(unlockDate.getTime())

          // console.log(snapshot.val()["c" + thisClass])

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
        })
    }
  });
}

function convertToDate(dbDate)
{
  let theMonth = dbDate.substr(5, 2);
  let theDay = dbDate.substr(8, 2);
  let theYear = dbDate.substr(0, 4);
  let theDate = new Date(Number(theYear), Number(theMonth) - 1, Number(theDay), 0, 0, 0, 0);
  theDate.setDate(theDate.getDate() + 1); //Add one day to get second day of class
  return theDate;
}

function checkIfInClass(snapshot, thisClass)
{
  if (snapshot.child("Class" + thisClass).val()) {
    $("#" + thisClass + "Widget .sectionWidget,#" + thisClass + "Leader .sectionWidget", $("#contents").contents()).css('display', 'block');
    $("#" + thisClass + "Block", $("#contents").contents()).addClass("active");
    $("#" + thisClass + "Block .learnMoreButton", $("#contents").contents()).html("Start");
    $("#" + thisClass + "Block > a", $("#contents").contents()).click(function () {
      nextChallenge(thisClass);
    });
  }
}

function setChallengeProgressIndicators(snapshot, thisClass)
{
  $.each(snapshot.child('c' + thisClass).val(), function (index, value) 
  {

    console.log(index)
    console.log(value)
    var dayZero = convertToDate(snapshot.child("ClassCompletion" + thisClass).val());
    if (!index.includes("points") && !index.includes("first") && !index.includes("second")) 
    {
      var cNum = Number(index.replace(/[^0-9]+/g, '')); //Number of challenge, 1-10
console.log(cNum)
      if(!window["dayArray" + thisClass][cNum-1].implemented)
      {
        $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      }

      var unlockDate = new Date(dayZero.getTime());
      unlockDate.setDate(dayZero.getDate() + window["dayArray" + thisClass][cNum - 1].days);
      var dateText = wordDay(unlockDate);

      $("#" + thisClass + "Widget .activityDate:eq(" + (cNum - 1) + ")", $("#contents").contents()).text("START DATE • " + dateText);

      var daysLeft = 13 - (Math.floor((todaysDate - unlockDate) / 86400000));
      $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text(daysLeft + " days left");

      daysLeft = 7 - Math.ceil((todaysDate - Date.parse(snapshot.child('c' + thisClass).val()[index + "first"])) / 86400000);
      if((13 - (Math.floor((todaysDate - unlockDate) / 86400000))) >= 14 && window["dayArray" + thisClass][cNum-1].implemented)
      {
        //Course to be unlocked. Only applies to first three challenges at the moment.
        $("#" + thisClass + "Widget .sectionTask:eq(" + (cNum - 1) + ")", $("#contents").contents()).addClass('upcoming');
        $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('upcoming');
        $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Coming Soon');
        $("#" + index, $("#contents").contents()).parent().parent().children('a').attr("onclick", "");
        $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      }
      else if((13 - (Math.floor((todaysDate - unlockDate) / 86400000))) < 0 && window["dayArray" + thisClass][cNum-1].implemented && value != 1 && (snapshot.child('c' + thisClass).val()[index + "first"] === undefined || (7 - (Math.floor(todaysDate - Date.parse(snapshot.child('c' + thisClass).val()[index + "first"])) / 86400000) < 0)))
      {
        //Course is closed due to timeout.
        $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').css('display', 'none');
        $("#" + index, $("#contents").contents()).parent().parent().children('.challengeFailed').css('display', 'block');
        $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #979797 50%, #FFFFFF 0)');
        $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      }
      else if (value == 0) 
      {
        //Course available, not started
        $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #FFFFFF 100%, #78DD36 0)');
      } 
      else if (value == 1) 
      {
        //Course finished
        $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('complete');
        $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').css('display', 'none');
        $("#" + index, $("#contents").contents()).parent().parent().children('.challengeCleared').css('display', 'block');
        $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #78DD36 100%, #FFFFFF 0)');
        $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
      } 
      else if (value == 0.2 && snapshot.child('c' + thisClass).val()[index + "first"]===undefined)
      {
        //Course started, not finished
        $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('incomplete');
        $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #FBB03B 50%, #FFFFFF 0)');
        $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Incomplete');
      }
      else if (value == 0.2 && snapshot.child('c' + thisClass).val()[index + "first"]!==undefined && snapshot.child('c' + thisClass).val()[index + "second"]===undefined)
      {
        //Challenge taken once, started but not finished during second attempt
        $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text(daysLeft + " days left");
        $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('incomplete');
        $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #FBB03B 50%, #FFFFFF 0)');
        $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Incomplete');
      }
      else if (value == 0.5 && snapshot.child('c' + thisClass).val()[index + "first"]!==undefined)
      {
        if(todaysDate >= Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]) && snapshot.child('c' + thisClass).val()[index + "second"]===undefined)
        {
          //Challenge taken once, available to take second time, user has not attempted yet.
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text(daysLeft + " days left");
          $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('retry');
          $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #E1261C 50%, #FFFFFF 0)');
          $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Retake');
        }
        else if (todaysDate < Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]))
        {
          //Challenge taken once and failed, in weeklong cooldown period until second attempt.

          daysLeft = Math.floor((Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]) - todaysDate) / 86400000);
          console.log("snapshot.child('c' + thisClass).val()[index + 'first']: " + snapshot.child('c' + thisClass).val()[index + "first"])
          console.log("Date.parse(snapshot.child('c' + thisClass).val()[index + 'first']): " + Date.parse(snapshot.child('c' + thisClass).val()[index + "first"]))
          console.log('todaysDate: ' + todaysDate);
          console.log('daysLeft: ' + daysLeft);
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).text(daysLeft + " days until retry");
          $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').html('Locked');
          $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').addClass('upcoming');
          $("#" + index, $("#contents").contents()).parent().children('a').attr("onclick", "");
        }
        else if (snapshot.child('c' + thisClass).val()[index + "second"]!==undefined)
        {
          //Challenge taken twice, now locked for good.
          $("#" + index, $("#contents").contents()).parent().parent().children('a').children('.startActivityButton').css('display', 'none');
          $("#" + index, $("#contents").contents()).parent().parent().children('.challengeFailed').css('display', 'block');
          $("#" + index, $("#contents").contents()).css('background', 'linear-gradient(90deg, #979797 50%, #FFFFFF 0)');
          $("#" + thisClass + "Widget .daysLeft:eq(" + (cNum - 1) + ")", $("#contents").contents()).hide();
        }
      }
    }
  })
}

function populateLeaderboard(snapshot, thisClass)
{
  //Populate the leaderboard
  var youOnLB = false;
  var allUsers = db.ref('/' + dbLocation).orderByChild("TotalPoints" + thisClass);

  var onLBHD = allUsers.once("value", function (data4) {

    console.log('data4'); console.log(data4.value)
    $("#" + thisClass + "Leader .expandedSection", $("#contents").contents()).html("");
    //For top 3 users, print points to console
    var rankings = new Array();
    var userClassDate = snapshot.child("ClassCompletion" + thisClass).val();
    data4.forEach(function(value){
      if(value.val()["Class" + thisClass] && userClassDate == value.val()["ClassCompletion" + thisClass])
      {
        rankings.unshift(value.val());
      }
    });
    var i=0;
    rankings.forEach(function(child){
      var place = "userRow", place2 = "";
      if(i<=2 && child.Email == snapshot.child("Email").val())
      {
        youOnLB = true;
      }
      if(i==0)
      {
        place2 = "1ST";
      }
      else if(i==1)
      {
        place2 = "2ND";
      }
      else if(i==2)
      {
        place2 = "3RD";
      }
      if(truncatedLB==false || (truncatedLB==true && i <= 2))
      {
        $("#" + thisClass + "Leader .expandedSection", $("#contents").contents()).append(`<div class="${place}">
        <div class="sellerPlace">${place2}</div>
        <div class="sellerName">${child.FirstName + " " + child.LastName}</div>
        <div class="scoreText">
            <font class="highScore">${child["TotalPoints" + thisClass]}</font>
            <font class="pointsText">POINTS</font>
        </div>
        </div>`);
      }
      i++;
    });
    if(truncatedLB&&!youOnLB)
    {
      $("#" + thisClass + "Leader .expandedSection", $("#contents").contents()).append(`<div class="userRow">
        <div class="sellerPlace">YOU</div>
        <div class="sellerName">${snapshot.child("FirstName").val() + " " + snapshot.child("LastName").val()}</div>
        <div class="scoreText">
            <font class="highScore">${snapshot["TotalPoints" + thisClass].val()}</font>
            <font class="pointsText">POINTS</font>
        </div>
        </div>`);
    }
  });
}