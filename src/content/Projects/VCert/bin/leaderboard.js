"use strict";

var ADState = 0;
var HDState = 0;
var LDState = 0;
var VPSState = 0;
var OHWState = 0;
var ADscoredRadians = 0;
var ADleaderRadians = 0;
var HDscoredRadians = 0;
var HDleaderRadians = 0;
var LDscoredRadians = 0;
var LDleaderRadians = 0;
var OHWscoredRadians = 0;
var OHWleaderRadians = 0;
var VPSscoredRadians = 0;
var VPSleaderRadians = 0;

function updateLB() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      var userId = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref('/' + dbLocation + '/' + userId);
      ref.once("value").then(function (snapshot) {
        console.log("snapshot");
        console.log(snapshot);
        updateLBForClass(snapshot, "AD");
        updateLBForClass(snapshot, "HD");
        updateLBForClass(snapshot, "LD");
        updateLBForClass(snapshot, "OHW");
        updateLBForClass(snapshot, "VPS");
      });
    }
  });
}

updateLB();

function updateLBForClass(snapshot, thisClass) {
  var totalPoints;

  if (thisClass == "OHW") {
    totalPoints = 420;
  }

  if (thisClass == "LD") {
    totalPoints = 630;
  }

  if (thisClass == "AD") {
    totalPoints = 560;
  }

  if (thisClass == "HD") {
    totalPoints = 960;
  }

  if (thisClass == "VPS") {
    totalPoints = 850;
  }

  var scoredPoints = snapshot.child("TotalPoints" + thisClass).val();
  var leaderPoints = 0;

  if (snapshot.child("Class" + thisClass).val()) {
    $("#" + thisClass + "Leader .sectionWidget").css('display', 'block');
    var youOnLB = false;
    var allUsers = db.ref('/' + dbLocation).orderByChild("TotalPoints" + thisClass);
    var onLB = allUsers.once("value", function (data4) {
      $("#" + thisClass + "Leader .expandedSection").html("");
      var rankings = new Array();
      var userClassDate = snapshot.child("ClassCompletion" + thisClass).val();
      data4.forEach(function (value) {
        if (value.val()["Class" + thisClass] && userClassDate == value.val()["ClassCompletion" + thisClass]) {
          rankings.unshift(value.val());
        }
      });
      var i = 0;
      rankings.forEach(function (child) {
        var place = "userRow",
            place2 = "";
        place2 = i + 1 + getCorrectTail(i + 1);
        console.log('here: ', snapshot.child("Email").val());

        if (i <= 2 && child.Email == snapshot.child("Email").val()) {
          youOnLB = true;
        }

        if (i == 0) {
          leaderPoints = child["TotalPoints" + thisClass];
        }

        if (child.Email == snapshot.child("Email").val()) {
          place += " itsMe";
        }

        console.log('here', snapshot.child("Email").val());
        $("#" + thisClass + "Leader .expandedSection").append("<div class=\"".concat(place, "\">\n        <div class=\"sellerPlace\">").concat(place2, "</div>\n        <div class=\"sellerName\">").concat(child.FirstName + " " + child.LastName, "</div>\n        <div class=\"scoreText\">\n            <font class=\"highScore\">").concat(child["TotalPoints" + thisClass], "</font>\n            <font class=\"pointsText\">POINTS</font>\n        </div>\n        </div>"));
        i++;
      });
      window[thisClass + "scoredRadians"] = scoredPoints / totalPoints * 2 - 0.5;
      window[thisClass + "leaderRadians"] = leaderPoints / totalPoints * 2 - 0.5;
      var canvas = document.getElementById(thisClass + "LBCanvas");
      var ctx = canvas.getContext('2d');
      $("#" + thisClass + "Leader .totalPointsPossible").text(totalPoints);
      $("#" + thisClass + "Leader .leaderPoints").text(leaderPoints);
      $("#" + thisClass + "Leader .yourPoints").text(scoredPoints);
      $("#" + thisClass + "Leader .catchUpPoints").text(leaderPoints - scoredPoints);
      drawGraph(ctx, window[thisClass + "scoredRadians"], window[thisClass + "leaderRadians"], thisClass);
    });
  } else {
    $("#" + thisClass + "Leader").css('display', 'none');
  }
}

function onOverCanvas(e) {
  var thisClass = e.currentTarget.id.substr(0, 2);

  if (thisClass == "VP") {
    thisClass = "VPS";
  }

  var radius = 80; //Radius from center that the hitbox for the inner circle should extend

  var p = {
    x: 130,
    y: 130
  };
  var x = p.x - (e.pageX - $(e.currentTarget).offset().left);
  var y = p.y - (e.pageY - $(e.currentTarget).offset().top);
  var distance = Math.sqrt(x * x + y * y);

  if (distance < radius && window[thisClass + "State"] != 1) {
    //Inside circle
    window[thisClass + "State"] = 1;
    drawGraph(document.getElementById(thisClass + "LBCanvas").getContext('2d'), window[thisClass + "scoredRadians"], window[thisClass + "leaderRadians"], thisClass);
  } else if (distance >= radius && window[thisClass + "State"] != 2) {
    //Outside circle
    window[thisClass + "State"] = 2;
    drawGraph(document.getElementById(thisClass + "LBCanvas").getContext('2d'), window[thisClass + "scoredRadians"], window[thisClass + "leaderRadians"], thisClass);
  }
}

function drawGraph(ctx, scoredRadians, leaderRadians, thisClass) {
  var leaderPercent = 100 - Math.floor((leaderRadians + 0.5) / 2 * 100);
  var scoredPercent = 100 - Math.floor((scoredRadians + 0.5) / 2 * 100);
  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 300, 300);
  ctx.fillStyle = "black";
  window[thisClass + "State"] != 1 ? ctx.strokeStyle = "#0082CA" : ctx.strokeStyle = "#D9F0F8";
  ctx.lineWidth = 30;
  ctx.arc(130, 130, 100, -1 / 2 * Math.PI, leaderRadians * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "#D9F0F8";
  ctx.arc(130, 130, 100, leaderRadians * Math.PI, 1.5 * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  window[thisClass + "State"] != 2 ? ctx.strokeStyle = "#E1261C" : ctx.strokeStyle = "#FBDFDC";
  ctx.arc(130, 130, 60, -1 / 2 * Math.PI, scoredRadians * Math.PI);
  ctx.stroke();
  ctx.beginPath();
  ctx.strokeStyle = "#FBDFDC";
  ctx.arc(130, 130, 60, scoredRadians * Math.PI, 1.5 * Math.PI);
  ctx.stroke();
  ctx.font = "bold 18px Roboto";
  ctx.textAlign = "end";

  if (window[thisClass + "State"] == 2) {
    ctx.fillText("LEADER", 120, 36);
    ctx.beginPath();
    ctx.moveTo(140, 30);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineTo(146, 35);
    ctx.stroke();
    ctx.lineTo(152, 30);
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.font = "32px Oswald";
    ctx.fillText(leaderPercent + "%", 130, 130);
    ctx.font = "12px Oswald";
    ctx.fillStyle = "#E1261C";
    ctx.fillText("LEFT TO", 130, 150);
    ctx.fillText("COMPLETE", 130, 165);
    ctx.fillStyle = "black";
  }

  if (window[thisClass + "State"] == 1) {
    ctx.fillText("YOU", 120, 77);
    ctx.beginPath();
    ctx.moveTo(140, 70);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineTo(146, 75);
    ctx.stroke();
    ctx.lineTo(152, 70);
    ctx.stroke();
    ctx.textAlign = "center";
    ctx.font = "32px Oswald";
    ctx.fillText(scoredPercent + "%", 130, 130);
    ctx.font = "12px Oswald";
    ctx.fillStyle = "#E1261C";
    ctx.fillText("LEFT TO", 130, 150);
    ctx.fillText("COMPLETE", 130, 165);
    ctx.fillStyle = "black";
  }

  if (window[thisClass + "State"] == 0) {
    ctx.fillText("LEADER", 120, 36);
    ctx.fillText("YOU", 120, 77);
    ctx.beginPath();
    ctx.moveTo(140, 24);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineTo(145, 30);
    ctx.stroke();
    ctx.lineTo(140, 36);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(140, 64);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#FFFFFF";
    ctx.lineTo(145, 70);
    ctx.stroke();
    ctx.lineTo(140, 76);
    ctx.stroke();
  }
}

function onOutCanvas(e) {
  var thisClass = e.currentTarget.id.substr(0, 2);

  if (thisClass == "VP") {
    thisClass = "VPS";
  }

  window[thisClass + "State"] = 0;
  drawGraph(document.getElementById(thisClass + "LBCanvas").getContext('2d'), window[thisClass + "scoredRadians"], window[thisClass + "leaderRadians"], thisClass);
}

function getCorrectTail(thisPlace) {
  var num = parseInt(thisPlace, 10);
  var lastTwoDigits = num % 100;
  var lastDigit = num % 10;
  var result = "th";

  if (lastTwoDigits < 11 || lastTwoDigits > 13) {
    if (lastDigit === 1) {
      result = "st";
    } else if (lastDigit === 2) {
      result = "nd";
    } else if (lastDigit === 3) {
      result = "rd";
    }
  }

  return result;
}