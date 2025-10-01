/* eslint-disable no-redeclare */

//TODO: After next database reset, change i notifications to i+1 notifications (ex. last new challenge notification stored in database as NewInteraction10 instead of NewInteraction9)
//This file is for automatic emails such as monthly challenge availability.

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
//const { ConsoleListener } = require('sp-pnp-js');
const gmailEmail = 'vcertadmin@thelhtgroup.com';
//const gmailPassword = '6jMuH2H/6H94fp';
const gmailPassword = 'wvwijibvfeqigxmg';
const dbLocation = "ProductionUserGroup";
const express = require('express');
const cors = require('cors');
const app = express();

// Automatically allow cross-origin requests
app.use(cors({
  origin: true
}));


var isDemoMode = false;
let todaysDate = new Date();
let dayOfWeek = todaysDate.getDay(); //3 is Wednesday
var challengeStartDate;
if (isDemoMode) {
  challengeStartDate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
} else {
  challengeStartDate = [0, 7, 14, 21, 28, 35, 42, 49, 56, 63];
}
global.dayArrayHD = [{
  days: challengeStartDate[0], //5,000-MILE DRAIN EXTENSION
  title: "5,000 Mile Drain Extension",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[1], //VALUE TO THE CUSTOMER
  title: "Value to the Customer",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[2], //PROTECTING THE ENGINE
  title: "Protecting the Engine",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[3], //MEET ONE SOLUTION™
  title: "Meet One Solution™",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[4], //ZEREX™ APPROVALS
  title: "ZEREX™ Approvals",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[5], //ZEREX™ NITRITE FREE
  title: "ZEREX™ Nitrite Free",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[6], //CUMMINS R&D
  title: "Cummins R&D",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[7], //TRANSMISSION FLUID AND GEAR OIL
  title: "Transmission Fluid and Gear Oil",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[8], //COBALT AND CERULEAN
  title: "Cobalt and Cerulean",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[9], //WHY VALVOLINE
  title: "Why Valvoline™",
  implemented: true,
  skip: false
}];

global.dayArrayLD = [{
  days: challengeStartDate[0],
  //Old Challenge 1
  title: "SPARK",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[1],
  //Old Challenge 3
  title: "Valvoline™ Premium Oils",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[2],
  //Old Challenge 4
  title: "ZEREX™",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[3],
  //Old Challenge 5
  title: "The Valvoline™ Story",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[4],
  //Old Challenge 2
  title: "VPERK$",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[5],
  //Old Challenge 6
  title: "Multi-Vehicle ATF",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[6],
  //Old Challenge 7
  title: "The Sales Process",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[7],
  //Old Challenge 10
  title: "Why Valvoline™",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[8],
  //Old Challenge 8 REMOVED
  title: "The Valvoline™ Reward Program",
  implemented: false,
  skip: true
}, {
  days: challengeStartDate[9],
  //Old Challenge 9 REMOVED
  title: "Added-Value Programs",
  implemented: false,
  skip: true
}];

global.dayArrayVPS = [{
  days: challengeStartDate[0],
  title: "SPARK",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[1],
  title: "VPS Guarantee",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[2],
  title: "VPS Profit Potential",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[3],
  title: "All Engine Clean First Defense",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[4],
  title: "Incentives",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[5],
  title: "Why Valvoline",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[6],
  title: "15k restoration kit",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[7],
  title: "VPS Scorecard",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[8],
  title: "Dealership, High Touch",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[9],
  title: "The Sales Process",
  implemented: true,
  skip: false
}];
global.dayArrayAD = [{
  days: challengeStartDate[0],
  title: "What Dealerships Want",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[1],
  title: "Dealership Departments",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[2],
  title: "Auto Dealership Roles",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[3],
  title: "OEM Programs",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[4],
  title: "Auto Dealer Solutions",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[5],
  title: "ZEREX™ Nitrite Free",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[6],
  title: "A Dealership Customer",
  implemented: true,
  skip: false
}, {
  days: challengeStartDate[7],
  title: "XXX",
  implemented: false,
  skip: true
}, {
  days: challengeStartDate[8],
  title: "XXX",
  implemented: false,
  skip: true
}, {
  days: challengeStartDate[9],
  title: "XXX",
  implemented: false,
  skip: true
}];
admin.initializeApp();

//----------------------------------------------------------------------------------------------------------
var sendRegister = function (sendEmail, eName, attempt = 1) {
  console.log("sendRegister function starting ...");
  console.log("sendEmail: " + sendEmail);
  console.log("eName: " + eName);
  //transporter is a way to send your emails
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    },
    debug: true, // Show debug output
    logger: true // Log information to console
  });

  const mailOptions = {
    from: gmailEmail, // sender address
    to: sendEmail, // list of receivers
    subject: "Welcome to VCERT Performance+", // Subject line
    html: `<table style="width:701px">
    <tr>
    <td
    img src='https://lhtclients.com/Projects/Valvoline/VCert/prod/images/Email/Email_Banner_General.jpg'/><br /><br /><br />
    <b><font style="font-size:16pt;">VCERT Performance+ helps you boost sales and earn rewards</font><br /><br />
    Welcome to VCERT Performance+<br /><br />
    VCERT Performance+ gives certified Valvoline™ sellers the opportunity to take what they learned to the next level, increasing their potential for higher sales and commission bonuses through the REVUP program.<br /><br />
    You will regularly receive a challenge designed to refresh your Valvoline™ product knowledge or critical selling concepts.<br /><br />
    By completing each challenge you’ll be earning points to move up the leaderboard. That’s important because you’ll be competing against your classmates to see who can complete the most challenges and achieve the highest score and ranking.<br /><br />
    ${eName}<br /><br />
    Ready to get started?</a><br /><br />
    <a href='https://lhtclients.com/Projects/Live_Courses/Valvoline/VCert/redirect.html'>Let's Play</a></b><br /><br />
    </td>
    </tr>
    </table>`
  };

  const getDeliveryStatus = function (error, info) {
    if (error) {
      console.log(`sendRegister error on attempt ${attempt}`);
      console.log(error);
      if (attempt < 5) {
        console.log('Resend attempt...');
        sendRegister(sendEmail, eName, attempt + 1);
      } else {
        console.log('SENDING FAILED after 5 attempts');
      }
      return error;
    }
    console.log('sendRegister notification sent: %s', info.messageId);
    return null;
  };

  transporter.sendMail(mailOptions, getDeliveryStatus);
};
//----------------------------------------------------------------------------------------------------------
var sendNewInt = function (sendEmail, cNum, cClass, attempt = 1) {
  console.log("sendNewInt function starting ...");
  console.log("sendEmail: " + sendEmail);
  console.log("cNum: " + cNum);
  console.log("cClass: " + cClass);
  console.log("global['dayArray' + cClass][cNum].title: " + global["dayArray" + cClass][cNum].title);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    },
    debug: true, // Show debug output
    logger: true // Log information to console
  });

  let challengeName = global["dayArray" + cClass][cNum].title;
  const mailOptions = {
    from: gmailEmail, // sender address
    to: sendEmail, // list of receivers
    subject: `A new VCERT challenge is here - ${challengeName}`, // Subject line
    html: `<table style="width:701px">
    <tr>
    <td>
    <img src='https://lhtclients.com/Projects/Valvoline/VCert/prod/images/Email/Email_Banner_General.jpg'/><br /><br /><br />
    <b><font style="font-size:16pt;">The latest VCERT Performance+ challenge is available NOW!</font><br /><br />
    Are you up to the challenge?<br /><br />
    A new challenge has been opened up on the VCERT Performance+ site.<br /><br />
    You have one week to complete this challenge to earn the full amount of available points.<br /><br />
    Login today to get started and claim your place on the leaderboard.<br /><br />
    <a href='https://lhtclients.com/Projects/Live_Courses/Valvoline/VCert/redirect.html'>Start the Challenge</a></b><br /><br />
    </td>
    </tr>
    </table>`
  };

  const getDeliveryStatus = function (error, info) {
    if (error) {
      console.log(`sendNewInt error on attempt ${attempt}`);
      console.log(error);
      if (attempt < 5) {
        console.log('Resend attempt...');
        sendNewInt(sendEmail, cNum, cClass, attempt + 1);
      } else {
        console.log('SENDING FAILED after 5 attempts');
      }
      return error;
    }
    console.log('sendNewInt notification sent: %s', info.messageId);
    return null;
  };

  transporter.sendMail(mailOptions, getDeliveryStatus);
};
//----------------------------------------------------------------------------------------------------------
var sendNotComplete = function (sendEmail, attempt = 1) {
  console.log("sendNotComplete function starting ...");
  console.log("sendEmail: " + sendEmail);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    },
    debug: true, // Show debug output
    logger: true // Log information to console
  });

  const mailOptions = {
    from: gmailEmail, // sender address
    to: sendEmail, // list of receivers
    subject: "Your VCERT challenge is waiting", // Subject line
    html: `<table style="width:701px"><tr><td>
    <img src='https://lhtclients.com/Projects/Valvoline/VCert/prod/images/Email/Email_Banner_General.jpg'/><br /><br /><br />
    <b><font style="font-size:16pt;">Don’t fall behind, complete your VCERT Performance+ challenge today.</font><br /><br />
    Hey, did you forget?<br /><br />
    You have an open challenge in the VCERT Performance+ learning experience.<br /><br />
    These challenges are designed to help you increase your knowledge, boost sales, build your share of the RevUp program, and get you on the Performance+ leaderboard where you can earn prizes, and more importantly, bragging rights over your entire VCERT class!<br /><br />
    So get in there. And good luck!<br /><br />
    <a href='https://lhtclients.com/Projects/Live_Courses/Valvoline/VCert/redirect.html'>Let’s Go</a></b><br /><br />
    </td></tr></table>`,
  };

  const getDeliveryStatus = function (error, info) {
    if (error) {
      console.log(`sendNotComplete error on attempt ${attempt}`);
      console.log(error);
      if (attempt < 5) {
        console.log('Resend attempt...');
        sendNotComplete(sendEmail, attempt + 1);
      } else {
        console.log('SENDING FAILED after 5 attempts');
      }
      return error;
    }
    console.log('sendNotComplete notification sent: %s', info.messageId);
    return null;
  };

  transporter.sendMail(mailOptions, getDeliveryStatus);
};
//----------------------------------------------------------------------------------------------------------
var sendAlmostClosed = function (sendEmail, cNum, cClass, attempt = 1) {
  console.log("sendAlmostClosed function starting ...");
  console.log("sendEmail: " + sendEmail);
  console.log("cNum: " + cNum);
  console.log("cClass: " + cClass);
  console.log("global['dayArray' + cClass][cNum].title: " + global["dayArray" + cClass][cNum].title);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    },
    debug: true, // Show debug output
    logger: true // Log information to console
  });

  let challengeName = global["dayArray" + cClass][cNum].title;

  const mailOptions = {
    from: gmailEmail, // sender address
    to: sendEmail, // list of receivers
    subject: `Did you forget about the ${challengeName} Performance+ challenge?`, // Subject line
    html: `<table style="width:701px"><tr><td>
    <img src='https://lhtclients.com/Projects/Valvoline/VCert/prod/images/Email/Email_Banner_General.jpg'/><br /><br /><br />
    <b><font style="font-size:16pt;">Don’t fall behind, complete your VCERT Performance+ challenge today.</font><br /><br />
    Hey, did you forget?<br /><br />
    ${challengeName} is open in the VCERT Performance+ learning experience.<br /><br />
    These challenges are designed to help you increase your knowledge, boost sales, build your share of the RevUp program, and get you on the Performance+ leaderboard where you can earn prizes, and more importantly, bragging rights over your entire VCERT class!<br /><br />
    Your challenge is now only worth 50% of it’s point value but in this contest, every point counts. So get in there. And good luck!<br /><br />
    <a href='https://lhtclients.com/Projects/Live_Courses/Valvoline/VCert/redirect.html'>Let’s Go!</a></b><br /><br />
    </td></tr></table>`,
  };

  const getDeliveryStatus = function (error, info) {
    if (error) {
      console.log(`sendAlmostClosed error on attempt ${attempt}`);
      console.log(error);
      if (attempt < 5) {
        console.log('Resend attempt...');
        sendAlmostClosed(sendEmail, cNum, cClass, attempt + 1)
      } else {
        console.log('SENDING FAILED after 5 attempts');
      }
      return error;
    }
    console.log('sendAlmostClosed notification sent: %s', info.messageId);
    return null;
  };

  transporter.sendMail(mailOptions, getDeliveryStatus);
};
//----------------------------------------------------------------------------------------------------------
var sendChallengeComplete = function (sendEmail, attempt = 1) {
  console.log("sendChallengeComplete function starting ...");
  console.log("sendEmail: " + sendEmail);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    },
    debug: true, // Show debug output
    logger: true // Log information to console
  });


  const mailOptions = {
    from: gmailEmail, // sender address
    to: sendEmail, // list of receivers
    subject: "Don't slow down now!", // Subject line
    html: `<table style="width:701px"><tr><td>
    <img src='https://lhtclients.com/Projects/Valvoline/VCert/prod/images/Email/Email_Banner_General.jpg'/><br /><br /><br />
    <b><font style="font-size:16pt;">There are more ways to succeed with VCERT Performance+</font><br /><br />
    What more do you want to know?<br /><br />
    You are all caught up with your challenges, but that doesn’t mean the learning should stop.<br /><br />
    These resources can help you gain a deeper knowledge on <a href="https://valvoline.widencollective.com/portals/tjwhya34/MyPortal572020">Heavy Duty Engine Oil</a>.<br /><br />
    Look them over now and refer to them often.<br /><br />
    And be ready, another VCERT Performance+ challenge will be coming soon.</b><br /><br />
    </td></tr></table>`,
  };

  const getDeliveryStatus = function (error, info) {
    if (error) {
      console.log(`sendChallengeComplete error on attempt ${attempt}`);
      console.log(error);
      if (attempt < 5) {
        console.log('Resend attempt...');
        sendChallengeComplete(sendEmail, attempt + 1)
      } else {
        console.log('SENDING FAILED after 5 attempts');
      }
      return error;
    }
    console.log('sendChallengeComplete notification sent: %s', info.messageId);
    return null;
  };

  transporter.sendMail(mailOptions, getDeliveryStatus);
};
//----------------------------------------------------------------------------------------------------------
var sendLapsed = function (sendEmail, attempt = 1) {
  console.log("sendLapsed function starting ...");
  console.log("sendEmail: " + sendEmail);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    },
    debug: true, // Show debug output
    logger: true // Log information to console
  });

  const mailOptions = {
    from: gmailEmail, // sender address
    to: sendEmail, // list of receivers
    subject: "Ready to get back in the game?", // Subject line
    html: `<table style="width:701px"><tr><td><img src='https://lhtclients.com/Projects/Valvoline/VCert/prod/images/Email/Email_Banner_General.jpg'/><br /><br /><br /><b><font style="font-size:16pt;">There is still time to move up the VCERT Performance+ leaderboard</font><br /><br />
    There is still time to move up the VCERT Performance+ leaderboard.<br /><br />
    We get it, you're busy. But...<br /><br />
    You haven’t been active in the VCERT Performance+ learning experience recently.<br /><br />
    Did you know that over time, you forget up to 70% of a topic you learned about.<br /><br />
    VCERT Performance+ was designed to help slow that memory loss while providing you with benefits for yourself and your business.<br /><br />
    You still have time to get into the game. Why not get restarted now?<br /><br />
    <a href='https://lhtclients.com/Projects/Live_Courses/Valvoline/VCert/redirect.html'>Login</a></b><br /><br />
    </td></tr></table>`,
  };

  const getDeliveryStatus = function (error, info) {
    if (error) {
      console.log(`sendLapsed error on attempt ${attempt}`);
      console.log(error);
      if (attempt < 5) {
        console.log('Resend attempt...');
        sendLapsed(sendEmail, attempt + 1)
      } else {
        console.log('SENDING FAILED after 5 attempts');
      }
      return error;
    }
    console.log('sendLapsed notification sent: %s', info.messageId);
    return null;
  };

  transporter.sendMail(mailOptions, getDeliveryStatus);
};
//----------------------------------------------------------------------------------------------------------
var sendThreePeat = function (sendEmail, attempt = 1) {
  console.log("sendThreePeat function starting ...");
  console.log("sendEmail: " + sendEmail);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    },
    debug: true, // Show debug output
    logger: true // Log information to console
  });

  const mailOptions = {
    from: gmailEmail, // sender address
    to: sendEmail, // list of receivers
    subject: "You are crushing it!", // Subject line
    html: `<table style="width:701px"><tr><td>
    <img src='https://lhtclients.com/Projects/Valvoline/VCert/prod/images/Email/Email_Banner_General.jpg'/><br /><br /><br />
    <b><font style="font-size:16pt;">You went long and earned the 3-Peat Bonus.</font><br /><br />
    Congratulations!<br /><br />
    You hit the 3-Peat Bonus or the successful completion of three VCERT Performance+ challenges in a row.<br /><br />
    You just earned some bonus points.<br /><br />Watch for the next challenge to continue your domination of the leaderboard.<br /><br />
    <a href='https://lhtclients.com/Projects/Live_Courses/Valvoline/VCert/redirect.html'>Check My Points</a></b><br /><br />
    </td></tr></table>`,
  };

  const getDeliveryStatus = function (error, info) {
    if (error) {
      console.log(`sendThreePeat error on attempt ${attempt}`);
      console.log(error);
      if (attempt < 5) {
        console.log('Resend attempt...');
        sendThreePeat(sendEmail, attempt + 1)
      } else {
        console.log('SENDING FAILED after 5 attempts');
      }
      return error;
    }
    console.log('sendThreePeat notification sent: %s', info.messageId);
    return null;
  };

  transporter.sendMail(mailOptions, getDeliveryStatus);
};
//----------------------------------------------------------------------------------------------------------
var sendFailed = function (sendEmail, attempt = 1)  {
  console.log("sendFailed function starting ...");
  console.log("sendEmail: " + sendEmail);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    }
  });

  const mailOptions = {
    from: gmailEmail, // sender address
    to: sendEmail, // list of receivers
    subject: "The Challenge was unsuccessful, but the game is still on", // Subject line
    html: `<table style="width:701px"><tr><td>
    <img src='https://lhtclients.com/Projects/Valvoline/VCert/prod/images/Email/Email_Banner_General.jpg'/><br /><br /><br />
    <b><font style="font-size:16pt;">More VCERT Performance+ opportunities are coming.</font><br /><br />
    That did not go as planned.<br /><br />
    It happens right? You failed your attempt at the challenge.<br /><br />
    But don’t worry, you can review the materials and try it again.* <br /><br />
    And don’t forget to visit the VCERT Performance+ site, check your standings, and see what other opportunities may be available.<br /><br />
    <a href='https://lhtclients.com/Projects/Live_Courses/Valvoline/VCert/redirect.html'>Try Again!</a></b><br /><br />
    *Second attempts for any challenge will be done for a reduced number of points.<br /><br />
    </td></tr></table>`,
  };

  const getDeliveryStatus = function (error, info) {
    if (error) {
      console.log(`sendFailed error on attempt ${attempt}`);
      console.log(error);
      if (attempt < 5) {
        console.log('Resend attempt...');
        sendFailed(sendEmail, attempt + 1)
      } else {
        console.log('SENDING FAILED after 5 attempts');
      }
      return error;
    }
    console.log('sendFailed notification sent: %s', info.messageId);
    return null;
  };

  transporter.sendMail(mailOptions, getDeliveryStatus);
};
//----------------------------------------------------------------------------------------------------------

exports.scheduledFunction = functions.pubsub.schedule('every day 9:00').timeZone('America/New_York').onRun((context) => {
//Showtime. Let's skim the database for anyone who needs notifications. First up, new interaction alerts.
var allUsers = admin.database().ref('/' + dbLocation);
var testingEmails = true;

allUsers.orderByChild("Email").once("value", (data) => {

  hdLoop: for (let pkey in data.val()) {
    console.log("Start checking notificateions for HD track:")
     console.log("HD checking data.val()[pkey].Email:", data.val()[pkey].Email);
      if(data.val()[pkey].Email != 'dgutensohn@thelhtgroup.com' && data.val()[pkey].Email != 'bpalchick@thelhtgroup.com' && data.val()[pkey].Email != 'hstoller@thelhtgroup.com' && data.val()[pkey].Email != 'jfernow@thelhtgroup.com' && data.val()[pkey].Email != 'jheiliger@thelhtgroup.com' && data.val()[pkey].Email != 'jmikelman@thelhtgroup.com' && data.val()[pkey].Email != 'mzink@thelhtgroup.com' && data.val()[pkey].Email != 'wtang@thelhtgroup.com' && data.val()[pkey].Email != 'ylarner@thelhtgroup.com' && data.val()[pkey].Email != 'dlonghouse@thelhtgroup.com' && data.val()[pkey].Email != 'okeith@thelhtgroup.com') {
        continue;
     }
           console.log("Start checking notificateions for HD track:")
    //console.log(data.val()[pkey])
    console.log(data.val()[pkey].Notifications)
    console.log(data.val()[pkey].Email)
    //console.log(data.val()[pkey].cHD)
    let inNI = false;
    let inNC = false;
    let inCC = false;
    var updateObj;

    var getHDDate = data.val()[pkey].ClassCompletionHD;
    if (getHDDate == "0000-00-00"){continue hdLoop};
    let dayZeroHD = convertToDate(getHDDate);
    if (dayZeroHD === false) {
      console.log('dayZeroHD', dayZeroHD);
      continue hdLoop;
    }

    let classLength = 0;

    //Start HD Check
    if (data.val()[pkey].ClassHD) {
      var x = dayArrayHD.length;
      var y = dayArrayHD.length;
      var z = dayArrayHD.length;

      //console.log('todaysDate before round down: ' + todaysDate.getTime() / 86400000)
      todaysDate.setHours(0);
      todaysDate.setMinutes(0);
      todaysDate.setSeconds(0);
      todaysDate.setMilliseconds(0);
      console.log('todaysDate after round down: ' + todaysDate.getTime() / 86400000)
      //console.log('dayZeroHD before round down: ' + dayZeroHD.getTime() / 86400000)
      dayZeroHD.setHours(0);
      dayZeroHD.setMinutes(0);
      dayZeroHD.setSeconds(0);
      dayZeroHD.setMilliseconds(0);
      console.log('dayZeroHD after round down: ' + dayZeroHD.getTime() / 86400000)
      let daysSinceZero = Math.floor((todaysDate.getTime() - dayZeroHD.getTime()) / 86400000) + classLength + 1;
      console.log('daysSinceZero: ' + daysSinceZero);

      sendNotCompleteHD: for (var i = dayArrayHD.length; i >= 1; i--) {



        console.log('--------------------------- ' + data.val()[pkey].Email + ' sendNotCompleteHD challenge: ' + (x - 1) + ' ---------------------------');
        console.log('i', i);
        console.log('x', x);
        console.log('Completion Status: ' + data.val()[pkey].cHD["c" + x + "HD"]);
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayHD', dayArrayHD);
        console.log('dayArrayHD[i-1].days: ' + dayArrayHD[i - 1].days);
        console.log('dayArrayHD[i-1].title: ' + dayArrayHD[i - 1].title);
        console.log('(daysSinceZero) - dayArrayHD[i-1].days', ((daysSinceZero) - dayArrayHD[i - 1].days))
        console.log('dayArrayHD[i-1].days', dayArrayHD[i - 1].days)
        console.log('is current challenge unlocked: ', (daysSinceZero) >= dayArrayHD[i - 1].days)
        console.log('dayArrayHD[i-1].days != "Closed": ', dayArrayHD[i - 1].days != "Closed")
        if (daysSinceZero >= dayArrayHD[i - 1].days && dayArrayHD[i - 1].days != "Closed") {
          console.log('daysSinceZero - dayArrayHD[i-1].days >= 3: ' + daysSinceZero - dayArrayHD[i - 1].days >= 3)
          console.log('data.val()[pkey].cHD["c" + i + "HD"] !== 1: ' + data.val()[pkey].cHD["c" + i + "HD"] !== 1)
          console.log('data.val()[pkey].cHD["c" + i + "HDfirst"] === undefined: ' + data.val()[pkey].cHD["c" + i + "HDfirst"] === undefined)
          if ((daysSinceZero) - dayArrayHD[i - 1].days >= 3 && data.val()[pkey].cHD["c" + i + "HD"] !== 1 && data.val()[pkey].cHD["c" + i + "HDfirst"] === undefined) {
            console.log('challengeHD ' + (x - 1) + ' has not been touched by the user.')
            //   console.log('data.val()[pkey].Notifications["sendNotCompleteHD" + (i-1)]',data.val()[pkey].Notifications["sendNotCompleteHD" + (i-1)])
            //Check if this notification has already been sent. If not, send it.
            var alreadySent = data.val()[pkey].Notifications["sendNotCompleteHD" + (i - 1)];
            console.log('alreadySent', alreadySent);
            if (data.val()[pkey].Notifications["sendNotCompleteHD" + (i - 1)] != 1) {
              console.log("sendNotCompleteHD" + (i - 1) + " send to " + data.val()[pkey].Email);
              sendNotComplete(data.val()[pkey].Email);
              var updateObj = {
                ["sendNotCompleteHD" + (i - 1)]: 1
              }
              admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "sendNotCompleteHD has been updated"
    }
  }).catch(err => {
    return err;
  })
            } else {
              console.log("sendNotCompleteHD" + (x - 1) + " ALREADY sent to " + data.val()[pkey].Email);
            }
            break sendNotCompleteHD;
          }

        }
        x--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');

      sendAlmostClosedHD: for (var i = dayArrayHD.length - 1; i >= 1; i--) {
        console.log('--------------------------- ' + data.val()[pkey].Email + ' sendAlmostClosedHD challenge: ' + (y - 1) + ' ---------------------------');
        console.log("i", i)
        console.log("y", y)
        console.log('Completion Status: ' + data.val()[pkey].cHD["c" + y + "HD"])
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayHD', dayArrayHD);
        console.log('dayArrayHD[i-1].days: ' + dayArrayHD[i - 1].days);
        console.log('dayArrayHD[i-1].title: ' + dayArrayHD[i - 1].title);
        console.log('(daysSinceZero) - dayArrayHD[i-1].days', ((daysSinceZero) - dayArrayHD[i - 1].days))
        console.log('dayArrayHD[i-1].days', dayArrayHD[i - 1].days)
        console.log('is current challenge unlocked: ', daysSinceZero >= dayArrayHD[i - 1].days)
        console.log('dayArrayHD[i-1].days != "Closed": ', dayArrayHD[i - 1].days != "Closed")
        if (daysSinceZero >= dayArrayHD[i - 1].days && dayArrayHD[i - 1].days != "Closed") {
          console.log('daysSinceZero - dayArrayHD[i-1].days >= 7: ' + (daysSinceZero) - dayArrayHD[i - 1].days >= 7)
          console.log('data.val()[pkey].cHD["c" + i + "HD"] !== 1: ' + data.val()[pkey].cHD["c" + i + "HD"] !== 1)
          console.log('data.val()[pkey].cHD["c" + i + "HDfirst"] === undefined: ' + data.val()[pkey].cHD["c" + i + "HDfirst"] === undefined)
          //For almost closed interaction notification: In the last two days of interaction, if notification has not been sent yet.
          if ((daysSinceZero) - dayArrayHD[i - 1].days >= 8 && data.val()[pkey].cHD["c" + i + "HD"] !== 1 && data.val()[pkey].cHD["c" + i + "HDfirst"] === undefined) {
            console.log('data.val()[pkey].Notifications["AlmostClosedHD" + (i-1)] === undefined: ' + data.val()[pkey].Notifications["AlmostClosedHD" + (i - 1)] === undefined)
            console.log('data.val()[pkey].Notifications["AlmostClosedHD" + (i-1)] === 0: ' + data.val()[pkey].Notifications["AlmostClosedHD" + (i - 1)] === 0)
            if (data.val()[pkey].Notifications["AlmostClosedHD" + (i - 1)] === undefined || data.val()[pkey].Notifications["AlmostClosedHD" + (i - 1)] === 0) {
              console.log("sendAlmostClosed" + (i - 1) + " send to " + data.val()[pkey].Email);
              sendAlmostClosed(data.val()[pkey].Email, (i - 1), "HD");
              updateObj = {
                ["AlmostClosedHD" + (i - 1)]: 1
              }
              admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "sendAlmostClosedHD has been updated"
    }
  }).catch(err => {
    return err;
  })
            } else {
              console.log("sendAlmostClosed" + (y - 1) + " ALREHDY sent to " + data.val()[pkey].Email);
            }
            break sendAlmostClosedHD;
          }
        }
        y--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');
      NewInteractionHD: for (var i = dayArrayHD.length - 1; i >= 1; i--) {
        console.log('--------------------------- ' + data.val()[pkey].Email + ' NewInteractionHD challenge: ' + (z - 1) + ' ---------------------------');
        console.log("i", i)
        console.log("z", z)
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayHD', dayArrayHD);
        console.log('dayArrayHD[i-1].days: ' + dayArrayHD[i - 1].days);
        console.log('dayArrayHD[i-1].title: ' + dayArrayHD[i - 1].title);
        console.log('(daysSinceZero) - dayArrayHD[i-1].days', ((daysSinceZero) - dayArrayHD[i - 1].days))
        console.log('dayArrayHD[i-1].days', dayArrayHD[i - 1].days)
        console.log('is current challenge unlocked: ', daysSinceZero >= dayArrayHD[i - 1].days)
        console.log('dayArrayHD[i-1].days != "Closed": ', dayArrayHD[i - 1].days != "Closed")

        if (daysSinceZero >= dayArrayHD[i - 1].days && dayArrayHD[i - 1].days != "Closed") {
          console.log('challengeHD ' + (z - 1) + ' has been unlocked')
          console.log('data.val()[pkey].Notifications["NewInteractionHD" + (i-1)] === undefined: ' + data.val()[pkey].Notifications["NewInteractionHD" + (i - 1)] === undefined)
          console.log('data.val()[pkey].Notifications["NewInteractionHD" + (i-1)] === 0: ' + data.val()[pkey].Notifications["NewInteractionHD" + (i - 1)] === 0)
          //Check if this notification has already been sent. If not, send it.
          if ((data.val()[pkey].Notifications["NewInteractionHD" + (i - 1)] === undefined || data.val()[pkey].Notifications["NewInteractionHD" + (i - 1)] === 0)) {
            console.log("NewInteractionHD" + (z - 1) + " send to " + data.val()[pkey].Email);
            //inNI = true;
            sendNewInt(data.val()[pkey].Email, (i - 1), "HD");
            var updateObj = {
              ["NewInteractionHD" + (i - 1)]: 1
            }
            admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "NewInteractionHD has been updated"
    }
  }).catch(err => {
    return err;
  })
          } else {
            console.log("NewInteractionHD" + (z - 1) + " ALREADY sent to " + data.val()[pkey].Email);
          }
          break NewInteractionHD;
        }
        z--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');
    }
  }

    //END LOOP
});

allUsers.orderByChild("Email").once("value", (data) => {
    //HERE1
    vpsLoop: for (let pkey in data.val()) {
    console.log("Start checking notificateions for VPS track:")
     console.log("VPS checking data.val()[pkey].Email:", data.val()[pkey].Email);
      if(data.val()[pkey].Email != 'dgutensohn@thelhtgroup.com' && data.val()[pkey].Email != 'bpalchick@thelhtgroup.com' && data.val()[pkey].Email != 'hstoller@thelhtgroup.com' && data.val()[pkey].Email != 'jfernow@thelhtgroup.com' && data.val()[pkey].Email != 'jheiliger@thelhtgroup.com' && data.val()[pkey].Email != 'jmikelman@thelhtgroup.com' && data.val()[pkey].Email != 'mzink@thelhtgroup.com' && data.val()[pkey].Email != 'wtang@thelhtgroup.com' && data.val()[pkey].Email != 'ylarner@thelhtgroup.com' && data.val()[pkey].Email != 'dlonghouse@thelhtgroup.com' && data.val()[pkey].Email != 'okeith@thelhtgroup.com') {
        continue;
     }
      console.log("Start checking notificateions for VPS track:")
      //console.log(data.val()[pkey])
      console.log(data.val()[pkey].Notifications)
      console.log(data.val()[pkey].Email)
      //console.log(data.val()[pkey].cHD)
      let inNI = false;
      let inNC = false;
      let inCC = false;
      var updateObj;
  
      var getVPSDate = data.val()[pkey].ClassCompletionVPS;
          if (getVPSDate == "0000-00-00"){continue vpsLoop};
      let dayZeroVPS = convertToDate(getVPSDate);
      if (dayZeroVPS === false) {
        console.log('dayZeroVPS', dayZeroVPS);
        continue vpsLoop;
      }

      let classLength = 0;
    

        //Start VPS Check
    if (data.val()[pkey].ClassVPS) {
      var x = dayArrayVPS.length;
      var y = dayArrayVPS.length;
      var z = dayArrayVPS.length;

      //console.log('todaysDate before round down: ' + todaysDate.getTime() / 86400000)
      todaysDate.setHours(0);
      todaysDate.setMinutes(0);
      todaysDate.setSeconds(0);
      todaysDate.setMilliseconds(0);
      console.log('todaysDate after round down: ' + todaysDate.getTime() / 86400000)
      //console.log('dayZeroVPS before round down: ' + dayZeroVPS.getTime() / 86400000)
      dayZeroVPS.setHours(0);
      dayZeroVPS.setMinutes(0);
      dayZeroVPS.setSeconds(0);
      dayZeroVPS.setMilliseconds(0);
      console.log('dayZeroVPS after round down: ' + dayZeroVPS.getTime() / 86400000)
      let daysSinceZero = Math.floor((todaysDate.getTime() - dayZeroVPS.getTime()) / 86400000) + classLength + 1;
      console.log('daysSinceZero: ' + daysSinceZero);

      sendNotCompleteVPS: for (var i = dayArrayVPS.length; i >= 1; i--) {



        console.log('--------------------------- ' + data.val()[pkey].Email + ' sendNotCompleteVPS challenge: ' + (x - 1) + ' ---------------------------');
        console.log('i', i);
        console.log('x', x);
        console.log('Completion Status: ' + data.val()[pkey].cVPS["c" + x + "VPS"]);
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayVPS', dayArrayVPS);
        console.log('dayArrayVPS[i-1].days: ' + dayArrayVPS[i - 1].days);
        console.log('dayArrayVPS[i-1].title: ' + dayArrayVPS[i - 1].title);
        console.log('(daysSinceZero) - dayArrayVPS[i-1].days', ((daysSinceZero) - dayArrayVPS[i - 1].days))
        console.log('dayArrayVPS[i-1].days', dayArrayVPS[i - 1].days)
        console.log('is current challenge unlocked: ', (daysSinceZero) >= dayArrayVPS[i - 1].days)
        console.log('dayArrayVPS[i-1].days != "Closed": ', dayArrayVPS[i - 1].days != "Closed")
        if (daysSinceZero >= dayArrayVPS[i - 1].days && dayArrayVPS[i - 1].days != "Closed") {
          console.log('daysSinceZero - dayArrayVPS[i-1].days >= 3: ' + daysSinceZero - dayArrayVPS[i - 1].days >= 3)
          console.log('data.val()[pkey].cVPS["c" + i + "VPS"] !== 1: ' + data.val()[pkey].cVPS["c" + i + "VPS"] !== 1)
          console.log('data.val()[pkey].cVPS["c" + i + "VPSfirst"] === undefined: ' + data.val()[pkey].cVPS["c" + i + "VPSfirst"] === undefined)
          if ((daysSinceZero) - dayArrayVPS[i - 1].days >= 3 && data.val()[pkey].cVPS["c" + i + "VPS"] !== 1 && data.val()[pkey].cVPS["c" + i + "VPSfirst"] === undefined) {
            console.log('challengeVPS ' + (x - 1) + ' has not been touched by the user.')
            //   console.log('data.val()[pkey].Notifications["sendNotCompleteVPS" + (i-1)]',data.val()[pkey].Notifications["sendNotCompleteVPS" + (i-1)])
            //Check if this notification has already been sent. If not, send it.
            var alreadySent = data.val()[pkey].Notifications["sendNotCompleteVPS" + (i - 1)];
            console.log('alreadySent', alreadySent);
            if (data.val()[pkey].Notifications["sendNotCompleteVPS" + (i - 1)] != 1) {
              console.log("sendNotCompleteVPS" + (i - 1) + " send to " + data.val()[pkey].Email);
              sendNotComplete(data.val()[pkey].Email);
              var updateObj = {
                ["sendNotCompleteVPS" + (i - 1)]: 1
              }
              admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "sendNotCompleteVPS has been updated"
    }
  }).catch(err => {
    return err;
  })
            } else {
              console.log("sendNotCompleteVPS" + (x - 1) + " ALREADY sent to " + data.val()[pkey].Email);
            }
            break sendNotCompleteVPS;
          }

        }
        x--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');

      sendAlmostClosedVPS: for (var i = dayArrayVPS.length - 1; i >= 1; i--) {
        console.log('--------------------------- ' + data.val()[pkey].Email + ' sendAlmostClosedVPS challenge: ' + (y - 1) + ' ---------------------------');
        console.log("i", i)
        console.log("y", y)
        console.log('Completion Status: ' + data.val()[pkey].cVPS["c" + y + "VPS"])
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayVPS', dayArrayVPS);
        console.log('dayArrayVPS[i-1].days: ' + dayArrayVPS[i - 1].days);
        console.log('dayArrayVPS[i-1].title: ' + dayArrayVPS[i - 1].title);
        console.log('(daysSinceZero) - dayArrayVPS[i-1].days', ((daysSinceZero) - dayArrayVPS[i - 1].days))
        console.log('dayArrayVPS[i-1].days', dayArrayVPS[i - 1].days)
        console.log('is current challenge unlocked: ', daysSinceZero >= dayArrayVPS[i - 1].days)
        console.log('dayArrayVPS[i-1].days != "Closed": ', dayArrayVPS[i - 1].days != "Closed")
        if (daysSinceZero >= dayArrayVPS[i - 1].days && dayArrayVPS[i - 1].days != "Closed") {
          console.log('daysSinceZero - dayArrayVPS[i-1].days >= 7: ' + (daysSinceZero) - dayArrayVPS[i - 1].days >= 7)
          console.log('data.val()[pkey].cVPS["c" + i + "VPS"] !== 1: ' + data.val()[pkey].cVPS["c" + i + "VPS"] !== 1)
          console.log('data.val()[pkey].cVPS["c" + i + "VPSfirst"] === undefined: ' + data.val()[pkey].cVPS["c" + i + "VPSfirst"] === undefined)
          //For almost closed interaction notification: In the last two days of interaction, if notification has not been sent yet.
          if ((daysSinceZero) - dayArrayVPS[i - 1].days >= 8 && data.val()[pkey].cVPS["c" + i + "VPS"] !== 1 && data.val()[pkey].cVPS["c" + i + "VPSfirst"] === undefined) {
            console.log('data.val()[pkey].Notifications["AlmostClosedVPS" + (i-1)] === undefined: ' + data.val()[pkey].Notifications["AlmostClosedVPS" + (i - 1)] === undefined)
            console.log('data.val()[pkey].Notifications["AlmostClosedVPS" + (i-1)] === 0: ' + data.val()[pkey].Notifications["AlmostClosedVPS" + (i - 1)] === 0)
            if (data.val()[pkey].Notifications["AlmostClosedVPS" + (i - 1)] === undefined || data.val()[pkey].Notifications["AlmostClosedVPS" + (i - 1)] === 0) {
              console.log("sendAlmostClosed" + (i - 1) + " send to " + data.val()[pkey].Email);
              sendAlmostClosed(data.val()[pkey].Email, (i - 1), "VPS");
              updateObj = {
                ["AlmostClosedVPS" + (i - 1)]: 1
              }
              admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "sendAlmostClosedVPS has been updated"
    }
  }).catch(err => {
    return err;
  })
            } else {
              console.log("sendAlmostClosed" + (y - 1) + " ALREVPSY sent to " + data.val()[pkey].Email);
            }
            break sendAlmostClosedVPS;
          }
        }
        y--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');
      NewInteractionVPS: for (var i = dayArrayVPS.length - 1; i >= 1; i--) {
        console.log('--------------------------- ' + data.val()[pkey].Email + ' NewInteractionVPS challenge: ' + (z - 1) + ' ---------------------------');
        console.log("i", i)
        console.log("z", z)
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayVPS', dayArrayVPS);
        console.log('dayArrayVPS[i-1].days: ' + dayArrayVPS[i - 1].days);
        console.log('dayArrayVPS[i-1].title: ' + dayArrayVPS[i - 1].title);
        console.log('(daysSinceZero) - dayArrayVPS[i-1].days', ((daysSinceZero) - dayArrayVPS[i - 1].days))
        console.log('dayArrayVPS[i-1].days', dayArrayVPS[i - 1].days)
        console.log('is current challenge unlocked: ', daysSinceZero >= dayArrayVPS[i - 1].days)
        console.log('dayArrayVPS[i-1].days != "Closed": ', dayArrayVPS[i - 1].days != "Closed")

        if (daysSinceZero >= dayArrayVPS[i - 1].days && dayArrayVPS[i - 1].days != "Closed") {
          console.log('challengeVPS ' + (z - 1) + ' has been unlocked')
          console.log('data.val()[pkey].Notifications["NewInteractionVPS" + (i-1)] === undefined: ' + data.val()[pkey].Notifications["NewInteractionVPS" + (i - 1)] === undefined)
          console.log('data.val()[pkey].Notifications["NewInteractionVPS" + (i-1)] === 0: ' + data.val()[pkey].Notifications["NewInteractionVPS" + (i - 1)] === 0)
          //Check if this notification has already been sent. If not, send it.
          if ((data.val()[pkey].Notifications["NewInteractionVPS" + (i - 1)] === undefined || data.val()[pkey].Notifications["NewInteractionVPS" + (i - 1)] === 0)) {
            console.log("NewInteractionVPS" + (z - 1) + " send to " + data.val()[pkey].Email);
            //inNI = true;
            sendNewInt(data.val()[pkey].Email, (i - 1), "VPS");
            var updateObj = {
              ["NewInteractionVPS" + (i - 1)]: 1
            }
            admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "NewInteractionVPS has been updated"
    }
  }).catch(err => {
    return err;
  })
          } else {
            console.log("NewInteractionVPS" + (z - 1) + " ALREADY sent to " + data.val()[pkey].Email);
          }
          break NewInteractionVPS;
        }
        z--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');
    }
  }
    //END LOOP
});

allUsers.orderByChild("Email").once("value", (data) => {
    //HERE 2
    ldLoop: for (let pkey in data.val()) {
    console.log("Start checking notificateions for LD track:")
     console.log("LD checking data.val()[pkey].Email:", data.val()[pkey].Email);
      if(data.val()[pkey].Email != 'dgutensohn@thelhtgroup.com' && data.val()[pkey].Email != 'bpalchick@thelhtgroup.com' && data.val()[pkey].Email != 'hstoller@thelhtgroup.com' && data.val()[pkey].Email != 'jfernow@thelhtgroup.com' && data.val()[pkey].Email != 'jheiliger@thelhtgroup.com' && data.val()[pkey].Email != 'jmikelman@thelhtgroup.com' && data.val()[pkey].Email != 'mzink@thelhtgroup.com' && data.val()[pkey].Email != 'wtang@thelhtgroup.com' && data.val()[pkey].Email != 'ylarner@thelhtgroup.com' && data.val()[pkey].Email != 'dlonghouse@thelhtgroup.com' && data.val()[pkey].Email != 'okeith@thelhtgroup.com') {
        continue;
     }
      console.log("Start checking notificateions for LD track:")
      //console.log(data.val()[pkey])
      console.log(data.val()[pkey].Notifications)
      console.log(data.val()[pkey].Email)
      //console.log(data.val()[pkey].cHD)
      let inNI = false;
      let inNC = false;
      let inCC = false;
      var updateObj;
  
      var getLDDate = data.val()[pkey].ClassCompletionLD;
          if (getLDDate == "0000-00-00"){continue ldLoop};
      let dayZeroLD = convertToDate(getLDDate);
      if (dayZeroLD === false) {
        console.log('dayZeroLD', dayZeroLD);
        continue ldLoop;
      }

      let classLength = 0;

    if (data.val()[pkey].ClassLD) {
      var x = dayArrayLD.length;
      var y = dayArrayLD.length;
      var z = dayArrayLD.length;

      //console.log('todaysDate before round down: ' + todaysDate.getTime() / 86400000)
      todaysDate.setHours(0);
      todaysDate.setMinutes(0);
      todaysDate.setSeconds(0);
      todaysDate.setMilliseconds(0);
      console.log('todaysDate after round down: ' + todaysDate.getTime() / 86400000)
      //console.log('dayZeroLD before round down: ' + dayZeroLD.getTime() / 86400000)
      dayZeroLD.setHours(0);
      dayZeroLD.setMinutes(0);
      dayZeroLD.setSeconds(0);
      dayZeroLD.setMilliseconds(0);
      console.log('dayZeroLD after round down: ' + dayZeroLD.getTime() / 86400000)
      let daysSinceZero = Math.floor((todaysDate.getTime() - dayZeroLD.getTime()) / 86400000) + classLength + 1;
      console.log('daysSinceZero: ' + daysSinceZero);

      sendNotCompleteLD: for (var i = dayArrayLD.length; i >= 1; i--) {



        console.log('--------------------------- ' + data.val()[pkey].Email + ' sendNotCompleteLD challenge: ' + (x - 1) + ' ---------------------------');
        console.log('i', i);
        console.log('x', x);
        console.log('Completion Status: ' + data.val()[pkey].cLD["c" + x + "LD"]);
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayLD', dayArrayLD);
        console.log('dayArrayLD[i-1].days: ' + dayArrayLD[i - 1].days);
        console.log('dayArrayLD[i-1].title: ' + dayArrayLD[i - 1].title);
        console.log('(daysSinceZero) - dayArrayLD[i-1].days', ((daysSinceZero) - dayArrayLD[i - 1].days))
        console.log('dayArrayLD[i-1].days', dayArrayLD[i - 1].days)
        console.log('is current challenge unlocked: ', (daysSinceZero) >= dayArrayLD[i - 1].days)
        console.log('dayArrayLD[i-1].days != "Closed": ', dayArrayLD[i - 1].days != "Closed")
        if (daysSinceZero >= dayArrayLD[i - 1].days && dayArrayLD[i - 1].days != "Closed") {
          console.log('daysSinceZero - dayArrayLD[i-1].days >= 3: ' + daysSinceZero - dayArrayLD[i - 1].days >= 3)
          console.log('data.val()[pkey].cLD["c" + i + "LD"] !== 1: ' + data.val()[pkey].cLD["c" + i + "LD"] !== 1)
          console.log('data.val()[pkey].cLD["c" + i + "LDfirst"] === undefined: ' + data.val()[pkey].cLD["c" + i + "LDfirst"] === undefined)
          if ((daysSinceZero) - dayArrayLD[i - 1].days >= 3 && data.val()[pkey].cLD["c" + i + "LD"] !== 1 && data.val()[pkey].cLD["c" + i + "LDfirst"] === undefined) {
            console.log('challengeLD ' + (x - 1) + ' has not been touched by the user.')
            //   console.log('data.val()[pkey].Notifications["sendNotCompleteLD" + (i-1)]',data.val()[pkey].Notifications["sendNotCompleteLD" + (i-1)])
            //Check if this notification has already been sent. If not, send it.
            var alreadySent = data.val()[pkey].Notifications["sendNotCompleteLD" + (i - 1)];
            console.log('alreadySent', alreadySent);
            if (data.val()[pkey].Notifications["sendNotCompleteLD" + (i - 1)] != 1) {
              console.log("sendNotCompleteLD" + (i - 1) + " send to " + data.val()[pkey].Email);
              sendNotComplete(data.val()[pkey].Email);
              var updateObj = {
                ["sendNotCompleteLD" + (i - 1)]: 1
              }
              admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "sendNotCompleteLD has been updated"
    }
  }).catch(err => {
    return err;
  })
            } else {
              console.log("sendNotCompleteLD" + (x - 1) + " ALREADY sent to " + data.val()[pkey].Email);
            }
            break sendNotCompleteLD;
          }

        }
        x--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');

      sendAlmostClosedLD: for (var i = dayArrayLD.length - 1; i >= 1; i--) {
        console.log('--------------------------- ' + data.val()[pkey].Email + ' sendAlmostClosedLD challenge: ' + (y - 1) + ' ---------------------------');
        console.log("i", i)
        console.log("y", y)
        console.log('Completion Status: ' + data.val()[pkey].cLD["c" + y + "LD"])
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayLD', dayArrayLD);
        console.log('dayArrayLD[i-1].days: ' + dayArrayLD[i - 1].days);
        console.log('dayArrayLD[i-1].title: ' + dayArrayLD[i - 1].title);
        console.log('(daysSinceZero) - dayArrayLD[i-1].days', ((daysSinceZero) - dayArrayLD[i - 1].days))
        console.log('dayArrayLD[i-1].days', dayArrayLD[i - 1].days)
        console.log('is current challenge unlocked: ', daysSinceZero >= dayArrayLD[i - 1].days)
        console.log('dayArrayLD[i-1].days != "Closed": ', dayArrayLD[i - 1].days != "Closed")
        if (daysSinceZero >= dayArrayLD[i - 1].days && dayArrayLD[i - 1].days != "Closed") {
          console.log('daysSinceZero - dayArrayLD[i-1].days >= 7: ' + (daysSinceZero) - dayArrayLD[i - 1].days >= 7)
          console.log('data.val()[pkey].cLD["c" + i + "LD"] !== 1: ' + data.val()[pkey].cLD["c" + i + "LD"] !== 1)
          console.log('data.val()[pkey].cLD["c" + i + "LDfirst"] === undefined: ' + data.val()[pkey].cLD["c" + i + "LDfirst"] === undefined)
          //For almost closed interaction notification: In the last two days of interaction, if notification has not been sent yet.
          if ((daysSinceZero) - dayArrayLD[i - 1].days >= 8 && data.val()[pkey].cLD["c" + i + "LD"] !== 1 && data.val()[pkey].cLD["c" + i + "LDfirst"] === undefined) {
            console.log('data.val()[pkey].Notifications["AlmostClosedLD" + (i-1)] === undefined: ' + data.val()[pkey].Notifications["AlmostClosedLD" + (i - 1)] === undefined)
            console.log('data.val()[pkey].Notifications["AlmostClosedLD" + (i-1)] === 0: ' + data.val()[pkey].Notifications["AlmostClosedLD" + (i - 1)] === 0)
            if (data.val()[pkey].Notifications["AlmostClosedLD" + (i - 1)] === undefined || data.val()[pkey].Notifications["AlmostClosedLD" + (i - 1)] === 0) {
              console.log("sendAlmostClosed" + (i - 1) + " send to " + data.val()[pkey].Email);
              sendAlmostClosed(data.val()[pkey].Email, (i - 1), "LD");
              updateObj = {
                ["AlmostClosedLD" + (i - 1)]: 1
              }
              admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "sendAlmostClosedLD has been updated"
    }
  }).catch(err => {
    return err;
  })
            } else {
              console.log("sendAlmostClosed" + (y - 1) + " ALREADY sent to " + data.val()[pkey].Email);
            }
            break sendAlmostClosedLD;
          }
        }
        y--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');
      NewInteractionLD: for (var i = dayArrayLD.length - 1; i >= 1; i--) {
        console.log('--------------------------- ' + data.val()[pkey].Email + ' NewInteractionLD challenge: ' + (z - 1) + ' ---------------------------');
        console.log("i", i)
        console.log("z", z)
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayLD', dayArrayLD);
        console.log('dayArrayLD[i-1].days: ' + dayArrayLD[i - 1].days);
        console.log('dayArrayLD[i-1].title: ' + dayArrayLD[i - 1].title);
        console.log('(daysSinceZero) - dayArrayLD[i-1].days', ((daysSinceZero) - dayArrayLD[i - 1].days))
        console.log('dayArrayLD[i-1].days', dayArrayLD[i - 1].days)
        console.log('is current challenge unlocked: ', daysSinceZero >= dayArrayLD[i - 1].days)
        console.log('dayArrayLD[i-1].days != "Closed": ', dayArrayLD[i - 1].days != "Closed")

        if (daysSinceZero >= dayArrayLD[i - 1].days && dayArrayLD[i - 1].days != "Closed") {
          console.log('challengeLD ' + (z - 1) + ' has been unlocked')
          console.log('data.val()[pkey].Notifications["NewInteractionLD" + (i-1)] === undefined: ' + data.val()[pkey].Notifications["NewInteractionLD" + (i - 1)] === undefined)
          console.log('data.val()[pkey].Notifications["NewInteractionLD" + (i-1)] === 0: ' + data.val()[pkey].Notifications["NewInteractionLD" + (i - 1)] === 0)
          //Check if this notification has already been sent. If not, send it.
          if ((data.val()[pkey].Notifications["NewInteractionLD" + (i - 1)] === undefined || data.val()[pkey].Notifications["NewInteractionLD" + (i - 1)] === 0)) {
            console.log("NewInteractionLD" + (z - 1) + " send to " + data.val()[pkey].Email);
            //inNI = true;
            sendNewInt(data.val()[pkey].Email, (i - 1), "LD");
            var updateObj = {
              ["NewInteractionLD" + (i - 1)]: 1
            }
            admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "NewInteractionLD has been updated"
    }
  }).catch(err => {
    return err;
  })
          } else {
            console.log("NewInteractionLD" + (z - 1) + " ALREADY sent to " + data.val()[pkey].Email);
          }
          break NewInteractionLD;
        }
        z--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');
    }
  }
    //END LOOP
});

allUsers.orderByChild("Email").once("value", (data) => {
    //HERE 3
    adLoop: for (let pkey in data.val()) {
      console.log("AD checking data.val()[pkey].Email:", data.val()[pkey].Email);
      if(data.val()[pkey].Email != 'dgutensohn@thelhtgroup.com' && data.val()[pkey].Email != 'bpalchick@thelhtgroup.com' && data.val()[pkey].Email != 'hstoller@thelhtgroup.com' && data.val()[pkey].Email != 'jfernow@thelhtgroup.com' && data.val()[pkey].Email != 'jheiliger@thelhtgroup.com' && data.val()[pkey].Email != 'jmikelman@thelhtgroup.com' && data.val()[pkey].Email != 'mzink@thelhtgroup.com' && data.val()[pkey].Email != 'wtang@thelhtgroup.com' && data.val()[pkey].Email != 'ylarner@thelhtgroup.com' && data.val()[pkey].Email != 'dlonghouse@thelhtgroup.com' && data.val()[pkey].Email != 'okeith@thelhtgroup.com') {
        continue;
     }
      console.log("Start checking notificateions for AD track:")
      //console.log(data.val()[pkey])
      console.log(data.val()[pkey].Notifications)
      console.log(data.val()[pkey].Email)
      //console.log(data.val()[pkey].cHD)
      let inNI = false;
      let inNC = false;
      let inCC = false;
      var updateObj;

      var getADDate = data.val()[pkey].ClassCompletionAD;
          if (getADDate == "0000-00-00"){continue adLoop};
      let dayZeroAD = convertToDate(getADDate);
      if (dayZeroAD === false) {
        console.log('dayZeroAD', dayZeroAD);
        continue adLoop;
      }
      let classLength = 0;

    //Start AD Check
    if (data.val()[pkey].ClassAD) {
      var x = dayArrayAD.length;
      var y = dayArrayAD.length;
      var z = dayArrayAD.length;

      //console.log('todaysDate before round down: ' + todaysDate.getTime() / 86400000)
      todaysDate.setHours(0);
      todaysDate.setMinutes(0);
      todaysDate.setSeconds(0);
      todaysDate.setMilliseconds(0);
      console.log('todaysDate after round down: ' + todaysDate.getTime() / 86400000)
      //console.log('dayZeroAD before round down: ' + dayZeroAD.getTime() / 86400000)
      dayZeroAD.setHours(0);
      dayZeroAD.setMinutes(0);
      dayZeroAD.setSeconds(0);
      dayZeroAD.setMilliseconds(0);
      console.log('dayZeroAD after round down: ' + dayZeroAD.getTime() / 86400000)
      let daysSinceZero = Math.floor((todaysDate.getTime() - dayZeroAD.getTime()) / 86400000) + classLength + 1;
      console.log('daysSinceZero: ' + daysSinceZero);

      sendNotCompleteAD: for (var i = dayArrayAD.length; i >= 1; i--) {



        console.log('--------------------------- ' + data.val()[pkey].Email + ' sendNotCompleteAD challenge: ' + (x - 1) + ' ---------------------------');
        console.log('i', i);
        console.log('x', x);
        console.log('Completion Status: ' + data.val()[pkey].cAD["c" + x + "AD"]);
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayAD', dayArrayAD);
        console.log('dayArrayAD[i-1].days: ' + dayArrayAD[i - 1].days);
        console.log('dayArrayAD[i-1].title: ' + dayArrayAD[i - 1].title);
        console.log('(daysSinceZero) - dayArrayAD[i-1].days', ((daysSinceZero) - dayArrayAD[i - 1].days))
        console.log('dayArrayAD[i-1].days', dayArrayAD[i - 1].days)
        console.log('is current challenge unlocked: ', (daysSinceZero) >= dayArrayAD[i - 1].days)
        console.log('dayArrayAD[i-1].days != "Closed": ', dayArrayAD[i - 1].days != "Closed")
        if (daysSinceZero >= dayArrayAD[i - 1].days && dayArrayAD[i - 1].days != "Closed") {
          console.log('daysSinceZero - dayArrayAD[i-1].days >= 3: ' + daysSinceZero - dayArrayAD[i - 1].days >= 3)
          console.log('data.val()[pkey].cAD["c" + i + "AD"] !== 1: ' + data.val()[pkey].cAD["c" + i + "AD"] !== 1)
          console.log('data.val()[pkey].cAD["c" + i + "ADfirst"] === undefined: ' + data.val()[pkey].cAD["c" + i + "ADfirst"] === undefined)
          if ((daysSinceZero) - dayArrayAD[i - 1].days >= 3 && data.val()[pkey].cAD["c" + i + "AD"] !== 1 && data.val()[pkey].cAD["c" + i + "ADfirst"] === undefined) {
            console.log('challengeHD ' + (x - 1) + ' has not been touched by the user.')
            //   console.log('data.val()[pkey].Notifications["sendNotCompleteAD" + (i-1)]',data.val()[pkey].Notifications["sendNotCompleteAD" + (i-1)])
            //Check if this notification has already been sent. If not, send it.
            var alreadySent = data.val()[pkey].Notifications["sendNotCompleteAD" + (i - 1)];
            console.log('alreadySent', alreadySent);
            if (data.val()[pkey].Notifications["sendNotCompleteAD" + (i - 1)] != 1) {
              console.log("sendNotCompleteAD" + (i - 1) + " send to " + data.val()[pkey].Email);
              sendNotComplete(data.val()[pkey].Email);
              var updateObj = {
                ["sendNotCompleteAD" + (i - 1)]: 1
              }
              admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "sendNotCompleteAD has been updated"
    }
  }).catch(err => {
    return err;
  })
            } else {
              console.log("sendNotCompleteAD" + (x - 1) + " ALREADY sent to " + data.val()[pkey].Email);
            }
            break sendNotCompleteAD;
          }

        }
        x--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');

      sendAlmostClosedAD: for (var i = dayArrayAD.length - 1; i >= 1; i--) {
        console.log('--------------------------- ' + data.val()[pkey].Email + ' sendAlmostClosedAD challenge: ' + (y - 1) + ' ---------------------------');
        console.log("i", i)
        console.log("y", y)
        console.log('Completion Status: ' + data.val()[pkey].cAD["c" + y + "AD"])
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayAD', dayArrayAD);
        console.log('dayArrayAD[i-1].days: ' + dayArrayAD[i - 1].days);
        console.log('dayArrayAD[i-1].title: ' + dayArrayAD[i - 1].title);
        console.log('(daysSinceZero) - dayArrayAD[i-1].days', ((daysSinceZero) - dayArrayAD[i - 1].days))
        console.log('dayArrayAD[i-1].days', dayArrayAD[i - 1].days)
        console.log('is current challenge unlocked: ', daysSinceZero >= dayArrayAD[i - 1].days)
        console.log('dayArrayAD[i-1].days != "Closed": ', dayArrayAD[i - 1].days != "Closed")
        if (daysSinceZero >= dayArrayAD[i - 1].days && dayArrayAD[i - 1].days != "Closed") {
          console.log('daysSinceZero - dayArrayAD[i-1].days >= 7: ' + (daysSinceZero) - dayArrayAD[i - 1].days >= 7)
          console.log('data.val()[pkey].cAD["c" + i + "AD"] !== 1: ' + data.val()[pkey].cAD["c" + i + "AD"] !== 1)
          console.log('data.val()[pkey].cAD["c" + i + "ADfirst"] === undefined: ' + data.val()[pkey].cAD["c" + i + "ADfirst"] === undefined)
          //For almost closed interaction notification: In the last two days of interaction, if notification has not been sent yet.
          if ((daysSinceZero) - dayArrayAD[i - 1].days >= 8 && data.val()[pkey].cAD["c" + i + "AD"] !== 1 && data.val()[pkey].cAD["c" + i + "ADfirst"] === undefined) {
            console.log('data.val()[pkey].Notifications["AlmostClosedAD" + (i-1)] === undefined: ' + data.val()[pkey].Notifications["AlmostClosedAD" + (i - 1)] === undefined)
            console.log('data.val()[pkey].Notifications["AlmostClosedAD" + (i-1)] === 0: ' + data.val()[pkey].Notifications["AlmostClosedAD" + (i - 1)] === 0)
            if (data.val()[pkey].Notifications["AlmostClosedAD" + (i - 1)] === undefined || data.val()[pkey].Notifications["AlmostClosedAD" + (i - 1)] === 0) {
              console.log("sendAlmostClosed" + (i - 1) + " send to " + data.val()[pkey].Email);
              sendAlmostClosed(data.val()[pkey].Email, (i - 1), "AD");
              updateObj = {
                ["AlmostClosedAD" + (i - 1)]: 1
              }
              admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "sendAlmostClosedAD has been updated"
    }
  }).catch(err => {
    return err;
  })
            } else {
              console.log("sendAlmostClosed" + (y - 1) + " ALREADY sent to " + data.val()[pkey].Email);
            }
            break sendAlmostClosedAD;
          }
        }
        y--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');
      NewInteractionAD: for (var i = dayArrayAD.length - 1; i >= 1; i--) {
        console.log('--------------------------- ' + data.val()[pkey].Email + ' NewInteractionAD challenge: ' + (z - 1) + ' ---------------------------');
        console.log("i", i)
        console.log("z", z)
        console.log('daysSinceZero: ' + daysSinceZero);
        //console.log('dayArrayAD', dayArrayAD);
        console.log('dayArrayAD[i-1].days: ' + dayArrayAD[i - 1].days);
        console.log('dayArrayAD[i-1].title: ' + dayArrayAD[i - 1].title);
        console.log('(daysSinceZero) - dayArrayAD[i-1].days', ((daysSinceZero) - dayArrayAD[i - 1].days))
        console.log('dayArrayAD[i-1].days', dayArrayAD[i - 1].days)
        console.log('is current challenge unlocked: ', daysSinceZero >= dayArrayAD[i - 1].days)
        console.log('dayArrayAD[i-1].days != "Closed": ', dayArrayAD[i - 1].days != "Closed")

        if (daysSinceZero >= dayArrayAD[i - 1].days && dayArrayAD[i - 1].days != "Closed") {
          console.log('challengeAD ' + (z - 1) + ' has been unlocked')
          console.log('data.val()[pkey].Notifications["NewInteractionAD" + (i-1)] === undefined: ' + data.val()[pkey].Notifications["NewInteractionAD" + (i - 1)] === undefined)
          console.log('data.val()[pkey].Notifications["NewInteractionAD" + (i-1)] === 0: ' + data.val()[pkey].Notifications["NewInteractionAD" + (i - 1)] === 0)
          //Check if this notification has already been sent. If not, send it.
          if ((data.val()[pkey].Notifications["NewInteractionAD" + (i - 1)] === undefined || data.val()[pkey].Notifications["NewInteractionAD" + (i - 1)] === 0)) {
            console.log("NewInteractionAD" + (z - 1) + " send to " + data.val()[pkey].Email);
            //inNI = true;
            sendNewInt(data.val()[pkey].Email, (i - 1), "AD");
            var updateObj = {
              ["NewInteractionAD" + (i - 1)]: 1
            }
            admin.database().ref(dbLocation).child(pkey).child("Notifications").update(updateObj).then(() => {
    return {
      message: "NewInteractionAD has been updated"
    }
  }).catch(err => {
    return err;
  })
          } else {
            console.log("NewInteractionAD" + (z - 1) + " ALREADY sent to " + data.val()[pkey].Email);
          }
          break NewInteractionAD;
        }
        z--;
      }
      console.log('------------------------------------------------------------------------------------------------------------');
    }

    //END AD IF
  }

  //END LOOP
});
return null;
});

function convertToDate(dbDate) {
  if (!dbDate) {
    console.log('User does not have class date defined in database.')
    return false; // or any other value that makes sense in your context
  }

  let theMonth = dbDate.substr(5, 2);
  let theDay = dbDate.substr(8, 2);
  let theYear = dbDate.substr(0, 4);
  let theDate = new Date(Number(theYear), Number(theMonth) - 1, Number(theDay), 0, 0, 0, 0);
  theDate.setDate(theDate.getDate() + 1); // Add one day to get the second day of class
  return theDate;
}

exports.addMessage = functions.https.onRequest(async (req, res) => {
  sendRegister(req.query.theEmail, req.query.theName);
});

exports.sendThreePeat = functions.https.onRequest(async (req, res) => {
  sendThreePeat(req.query.theEmail);
});

exports.sendFailed = functions.https.onRequest(async (req, res) => {
  sendFailed(req.query.theEmail);
});

exports.checkTracks = functions.https.onCall((data, context) => {
  var allUsers = admin.database().ref('/' + dbLocation);

  allUsers.orderByChild("Email").once("value", (data) => {
    //HERE 3
for (let pkey in data.val()) {
  console.log("data.val()[pkey].Email:", data.val()[pkey].Email);
var tracksAvailable = ["AD", "LD", "HD", "VPS"];

// Loop through each track in tracksAvailable and check ClassCompletion+track
for (let track of tracksAvailable) {
  let classCompletionDate = user[`ClassCompletion${track}`];
  if (classCompletionDate && classCompletionDate !== "0000-00-00") {
    console.log(`User is in the ${track} track class.`);
    
    let cTrack = user[`c${track}`];
    if (cTrack) {
      console.log(`Values for ${track}:`);
      for (let i = 1; i <= 10; i++) {
        let value = cTrack[`c${i}${track}`];
        if (value !== undefined) {
          console.log(`c${i}${track}: ${value}`);
        }
      }
    }
  }
}
}
});
});

exports.updateUserProfileEmail = functions.https.onCall((data, context) => {

  return admin.auth().getUser(data.uid).then(user => {
    return admin.auth().updateUser(user.uid, {
        email: data.email
      }).then((userRecord) => {
        // See the UserRecord reference doc for the contents of userRecord.
        console.log('Successfully updated user', userRecord.toJSON());
        return userRecord.toJSON();
      })
      .catch((error) => {
        console.log('Error updating user:', error);
      });

  }).then(() => {
    return {
      message: "has email has been updated?"
    }

  }).catch(err => {
    return err;
  })

});