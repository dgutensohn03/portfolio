// 3: {
//   "challengeTitle": "Title",
//   "challengeDescription": "description text",
//   "minScore": ##,
//   "totalPoints": ##,
//   "passPercent": ##,
//   "rules": {
//     "info_1": "You have 1 week to complete this challenge for its maximum point value.",
//     "info_2": "To place on the leaderboard, you must earn at least 60 points. If you score less than 60 points, you automatically get 0 points. Don’t worry, you can always retake the challenge.",
//     "info_3": "To earn the highest points possible and be in the running for 1st place, you must answer each question correctly. You can try each question 2x, but every time you miss a question, you lose points.",
//     "info_4": "If you fail this challenge, don’t give up! You can still retake it to earn points and place on the leaderboard in the next round!"
//   },
//   "activity": [
//     {
//       points: ##,
//       chances: 2,
//       question: '<p>TEXT TEXT TEXT</p><p>Select the correct answer.</p>',
//       type: 'MC',
//       answers: [
//         'XXX',
//         'XXX',
//         'XXX',
//         'XXX'
//       ],
//       choices: [],
//       correct: 1,
//       correct_rem: '<p>That’s it!</p><p>TEXT TEXT TEXT</p>',
//       incorrect_rem: '<p>That is not the correct response.</p>',
//       fail_rem: '<p>That’s not right.</p><p>TEXT TEXT TEXT</p><p>You will not receive any points for this question.</p>'
//     }
//     // Add more activity objects as needed
//   ]
// }
// // Add more challenges for the track as needed
// },

const vcertData = {
  "AD": {
    3: {
      "challengeTitle": "Dealership Roles",
      "minScore": 80,
      "totalPoints": 60,
      "passPercent": 80,
      "rules": {
        "info_1": "You have 1 week to complete this challenge for its maximum point value.",
        "info_2": "To place on the leaderboard, you must earn at least 80 percent. If you score less than 80 percent, you automatically get 0 points. Don’t worry, you can always retake the challenge.",
        "info_3": "To earn the highest points possible and be in the running for 1st place, you must answer each question correctly. You can try each question 2x, but every time you miss a question, you lose points.",
        "info_4": "If you fail this challenge, don’t give up! You can still retake it to earn points and place on the leaderboard in the next round!"
      },
      "activity": [
        {
          points: 20,
          chances: 2,
          question: '<p>When you walk into a dealership to sell Valvoline™ products, what role should you speak to? </p><p>Select the correct answer.</p>',
          type: 'MC',
          answers: [
            'Service Manager',
            'Advisor',
            'Technician',
            'Parts Manager'
          ],
          choices: [],
          correct: 1,
          correct_rem: '<p>That’s it!</p><p>The Service Manager will be your primary point of contact on your initial dealership sales calls.</p>',
          incorrect_rem: '<p>That is not the correct response.</p>',
          fail_rem: '<p>That’s not right.</p><p>The Service Manager will be your primary point of contact on your initial dealership sales calls.</p><p>You will not receive any points for this question.</p>'
        },
        {
          points: 20,
          chances: 2,
          question: '<p>Within a car dealership, which positions are most likely to require training?</p><p>Select the correct answer.</p>',
          type: 'MC',
          answers: [
            'Service Advisor and Counter Sales',
            'Service Manager and Technician',
            'Service Advisor and Technician',
            'Sales Manager and Service Advisor'
          ],
          choices: [],
          correct: 3,
          correct_rem: '<p>That’s it!</p><p>Anyone in a Service Advisor or Technician role in a dealership can benefit from product and service training.</p>',
          incorrect_rem: '<p>That is not the correct response.</p>',
          fail_rem: '<p>That’s not right.</p><p>Anyone in a Service Advisor and Technician role in a dealership can benefit from product and service training.</p><p>You will not receive any points for this question.</p>'
        },
        {
          points: 20,
          chances: 2,
          question: '<p>What position within a dealership is most likely to resist moving away from OEM programs?</p><p>Select the correct answer.</p>',
          type: 'MC',
          answers: [
            'Service Manager',
            'Service Advisor',
            'General Manager',
            'Parts Manager'
          ],
          choices: [],
          correct: 1,
          correct_rem: '<p>That’s it!</p><p>You will most likely receive the most resistance around OEM programs from the Parts Manager.</p>',
          incorrect_rem: '<p>That is not the correct response.</p>',
          fail_rem: '<p>That’s not right.</p><p>You will most likely receive the most resistance around OEM programs from the Parts Manager.</p><p>You will not receive any points for this question.</p>'
        }
        // Add more activity objects as needed
      ]
    }
    // Add more challenges for country "AD" as needed
  },
  "HD": {
    1: {
      "challengeTitle": "HD Challenge 1",
      "points": [40, 40],
      "attemptsLeft": [2, 2],
      "passPercent": 80
    },
    2: {
      "challengeTitle": "HD Challenge 2",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    },
    3: {
      "challengeTitle": "HD Challenge 3",
      "points": [20, 20, 20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 2, 2, 1],
      "passPercent": 80
    },
    4: {
      "challengeTitle": "HD Challenge 4",
      "points": [20, 20, 20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 2, 2, 1],
      "passPercent": 80
    },
    5: {
      "challengeTitle": "HD Challenge 5",
      "points": [80],
      "attemptsLeft": null,
      "passPercent": 80
    },
    6: {
      "challengeTitle": "HD Challenge 6",
      "points": [40, 40],
      "attemptsLeft": [2, 2],
      "passPercent": 80
    },
    7: {
      "challengeTitle": "HD Challenge 7",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    },
    8: {
      "challengeTitle": "HD Challenge 8",
      "points": [20, 20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 2, 1],
      "passPercent": 80
    },
    9: {
      "challengeTitle": "HD Challenge 9",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    },
    10: {
      "challengeTitle": "HD Challenge 10",
      "points": [20, 20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 2, 1],
      "passPercent": 80
    }
  },
  "LD": {
    1: {
      "challengeTitle": "LD Challenge 1",
      "points": [20, 20, 20],
      "attemptsLeft": [2, 2, 2],
      "passPercent": 80
    },
    2: {
      "challengeTitle": "LD Challenge 2",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    },
    3: {
      "challengeTitle": "LD Challenge 3",
      "points": [20, 20, 20],
      "attemptsLeft": [2, 2, 2],
      "passPercent": 80
    },
    4: {
      "challengeTitle": "LD Challenge 4",
      "points": [20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 1],
      "passPercent": 80
    },
    5: {
      "challengeTitle": "LD Challenge 5",
      "points": [20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 1],
      "passPercent": 80
    },
    6: {
      "challengeTitle": "LD Challenge 6",
      "points": [20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 1],
      "passPercent": 80
    },
    7: {
      "challengeTitle": "LD Challenge 7",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    },
    8: {
      "challengeTitle": "LD Challenge 8",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    },
    9: {
      "challengeTitle": "LD Challenge 9",
      "points": [20, 20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 2, 1],
      "passPercent": 80
    },
    10: {
      "challengeTitle": "LD Challenge 10",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    }
  },
  "VPS": {
    1: {
      "challengeTitle": "SPARK",
      "challengeDescription": "Installers have seen a 22% increase in Valvoline™ lubricant and chemical services with SPARK. See how you can share, and share in, that increase.",
      "minScore": 0,
      "totalPoints": 0,
      "passPercent": 0,
      "rules": {
        "info_1": "You have 1 week to complete this challenge for its maximum point value.",
        "info_2": "To place on the leaderboard, you must earn at least 60 points. If you score less than 60 points, you automatically get 0 points. Don’t worry, you can always retake the challenge.",
        "info_3": "To earn the highest points possible and be in the running for 1st place, you must answer each question correctly. You can try each question 2x, but every time you miss a question, you lose points.",
        "info_4": "If you fail this challenge, don’t give up! You can still retake it to earn points and place on the leaderboard in the next round!"
      },
      "activity": [{
          points: 0,
          chances: 2,
          question: '<p>TEXT TEXT TEXT</p><p>Select the correct answer.</p>',
          type: 'MC',
          answers: [
            'XXX',
            'XXX',
            'XXX',
            'XXX'
          ],
          choices: [],
          correct: 1,
          correct_rem: '<p>That’s it!</p><p>TEXT TEXT TEXT</p>',
          incorrect_rem: '<p>That is not the correct response.</p>',
          fail_rem: '<p>That’s not right.</p><p>TEXT TEXT TEXT</p><p>You will not receive any points for this question.</p>'
        }
        // Add more activity objects as needed
      ]
    },
    2: {
      "challengeTitle": "VPS Guarantee",
      "challengeDescription": "The VPS Limited Lifetime Guarantee brings protection to consumers and sales growth to their installers.",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    },
    3: {
      "challengeTitle": "Profit Potential in VPS",
      "challengeDescription": "VPS services have the potential to significantly increase an installers bottom line. How do you help them understand this?",
      "points": [20, 20, 20],
      "attemptsLeft": [2, 2, 2],
      "passPercent": 80
    },
    4: {
      "challengeTitle": "Valvoline™ All Engine Clean First Defense",
      "challengeDescription": "As the business of vehicle care and maintenance shifts, Valvoline™ will be ready.",
      "points": [20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 1],
      "passPercent": 80
    },
    5: {
      "challengeTitle": "Valvoline™ Incentive Programs",
      "challengeDescription": "Rev Up, Sticker Bucks, and VSpiff are designed to reward DSRs, Service Writers, and Installers to keep consumer vehicles running smoothly with Valvoline™ products.",
      "points": [20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 1],
      "passPercent": 80
    },
    6: {
      "challengeTitle": "The Valvoline™ Brand",
      "challengeDescription": "Valvoline™ is a leader in lubricants and fluids, always ready to meet the needs of today with an eye towards “what’s next.”",
      "points": [20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 1],
      "passPercent": 80
    },
    7: {
      "challengeTitle": "Low Touch Service",
      "challengeDescription": "Chemistry-based fluid solutions from Valvoline™ help keep vehicles on the road longer while also providing installers a low-touch way to increase their average ticket.",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    },
    8: {
      "challengeTitle": "The Valvoline Scorecard",
      "challengeDescription": "Using the Valvoline Scorecard with an installer helps illustrate the benefits they can realize with Valvoline™ products.",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    },
    9: {
      "challengeTitle": "High Touch Service",
      "challengeDescription": "With quality products, education, and established consumer trust, Valvoline™ can help dealerships maintain, and build, their consumer base.",
      "points": [20, 20, 20, 20, 0],
      "attemptsLeft": [2, 2, 2, 2, 1],
      "passPercent": 80
    },
    10: {
      "challengeTitle": "The Sales Process",
      "challengeDescription": "Valvoline™ sales and marketing tools help installers, service writers, dealerships, and DSRs increase tickets and boost the bottom line.",
      "points": [20, 20, 20, 20],
      "attemptsLeft": [2, 2, 2, 2],
      "passPercent": 80
    }
  }
};



// Challenge helper
// Function to determine the track
var thisClass = function () {
  var ifrm = window.frameElement; // reference to iframe element container
  if (ifrm) {
  if (ifrm.src.includes("hd")) {
    //console.log('HD - track');
    return "HD";
  } else if (ifrm.src.includes("ld")) {
    //console.log('LD - track');
    return "LD";
  } else if (ifrm.src.includes("vps")) {
    //console.log('VPS - track');
    return "VPS";
  } else if (ifrm.src.includes("ad")) {
    //console.log('AD - track');
    return "AD";
  }
}
  return null;
};

// Get the current track
var currentTrack = thisClass();
console.log('currentTrack: ', currentTrack)
// Function to determine the challenge number from iframe src
var getChallengeNumber = function () {
  var ifrm = window.frameElement; // reference to iframe element container
  if(ifrm && ifrm.src){

  var src = ifrm.src;
  
  // Regular expression to match the challenge number
  var match = src.match(/challenge_(\d+)_/);
  if (match) {
    var challengeNumber = parseInt(match[1]); // Extract and parse the challenge number
    return challengeNumber;
  } else {
    console.log('Challenge number not found in src:', src);
    return null;
  }
}
};

// Test function
var challengeNumber = getChallengeNumber();
console.log('challengeNumber: ', challengeNumber); // Output the extracted challenge number

// Access the vcertData based on the current track and challenge number
if (vcertData[currentTrack] && vcertData[currentTrack][challengeNumber]) {
  var challengeTitle = vcertData[currentTrack][challengeNumber].challengeTitle;
  console.log("challengeTitle: ", challengeTitle);
} else {
  console.log("No data available for the current track or challenge.");
}

// Function to gather all points from vcertData
function getAllPoints(data) {
  let pointsArray = [];

  // Iterate over each track in vcertData
  for (const track in data) {
    if (data.hasOwnProperty(track)) {
      // Iterate over each challenge in the current track
      for (const challengeKey in data[track]) {
        if (data[track].hasOwnProperty(challengeKey)) {
          const challenge = data[track][challengeKey];

          // Check if challenge has activity array
          if (challenge.activity && Array.isArray(challenge.activity)) {
            const activities = challenge.activity;
            const points = activities.map(activity => activity.points);
            pointsArray.push(...points); // Push points to pointsArray
          } else {
            console.log(`Activities for track ${track} challenge ${challengeKey} are not valid.`);
          }
        }
      }
    }
  }

  return pointsArray;
}

// Example usage
const points = getAllPoints(vcertData);
console.log("points: ", points);

// Call the getAllPoints function with currentTrack
//var points = getAllPoints(vcertData, currentTrack);
//console.log("points", points);66666666

// Function to determine total points for a challenge
function calculateTotalPoints(track, challengeNumber) {
  if (vcertData[track] && vcertData[track][challengeNumber] && vcertData[track][challengeNumber].activity) {
    const activities = vcertData[track][challengeNumber].activity;
    // Sum up points from all activities
    const totalPoints = activities.reduce((total, activity) => total + activity.points, 0);
    return totalPoints;
  } else {
    return 0; // Return 0 if track or challenge is not found, or if there are no activities
  }
}
//console.log(currentTrack)
//console.log(challengeNumber)
const totalPoints = calculateTotalPoints(currentTrack, challengeNumber);
console.log("totalPoints: ", totalPoints);

// Initialize an empty array to store attemptsLeft values
let attemptsLeft = [];

// Function to add chances to attemptsLeft for the currentTrack
function addChancesToAttemptsLeft(data, currentTrack) {
  if (data[currentTrack]) {
    for (const challengeKey in data[currentTrack]) {
      if (data[currentTrack].hasOwnProperty(challengeKey)) {
        const challenge = data[currentTrack][challengeKey];

        // Check if challenge has activity array
        if (challenge.activity && Array.isArray(challenge.activity)) {
          const activities = challenge.activity;
          const attempts = activities.map(activity => activity.chances);
          attemptsLeft.push(...attempts); // Push attemptsLeft values to attemptsLeft array
          challenge.attemptsLeft = attempts;
        } else {
          console.log(`Activities for track ${currentTrack} challenge ${challengeKey} are not valid.`);
        }
      }
    }
    console.log(data); // Output the modified data object
    return attemptsLeft;
  } else {
    console.log(`No data available for track ${currentTrack}`);
    return [];
  }
}

addChancesToAttemptsLeft(vcertData, currentTrack);
console.log("attemptsLeft: ", attemptsLeft);

// Initialize an empty array to store the IDs
let boxArray = [];

// Select all elements with an id that starts with 'box' and is followed by one or more digits
let elements = document.querySelectorAll('[id^="box"]');
console.log(elements)
// Iterate over the selected elements
elements.forEach(element => {
  if (/^box\d+$/.test(element.id)) {
    boxArray.push(element.id);
  }
});

if (boxArray.length > 0) { 
  let lastBox = boxArray[boxArray.length - 1];
  let lastNumber = parseInt(lastBox.match(/\d+$/)[0]);
 let newNumber = lastNumber;
  let newId = 'box' + newNumber;

  console.log("Last box ID:", lastBox);
  console.log("New box ID:", newId);
  console.log("New box ID:", newId);

        // Define the HTML content
        var challegneCompleteBox = `
            <div id="${newId}" class="box" -template->
                <div class="row align-middle full-box-height" id="content">
                    <div class="col topCenterText">
                        <div class='center-text-box'>
                            <h1>Challenge Complete!</h1>
                            <div id='result-incorrect'>
                                <p>It was a good try, but to successfully complete a challenge, you need a score of 80% or higher on the challenge questions.</p>
                                <p>You earned 0 points this time.</p>
                                <p>You do have the opportunity to retake this challenge and earn some points!</p>
                                <p>Better luck next time!</p>
                            </div>
                            <div id='result-closed'>
                                <p>Looks like you still have some work to do with this topic. You did not earn a passing score and no additional points will be added to your total.</p>
                                <p>While you wait for the next challenge to hit your inbox, you might want to return to your class materials and review some of the information around this specific topic.</p>
                                <p>This challenge will remain open so you can put that review to the test by taking the challenge again. (No points can be earned any longer for this challenge.)</p>
                                <p>A new challenge will be coming soon. Better luck next time!</p>
                            </div>
                            <div id='result-three'>
                                <p>You’ve completed this challenge review. If you would like to review this topic in greater depth, you may want to return to your class materials and review some of the information presented there.</p>
                                <p>As a reminder, no points will be earned for completing a challenge review.</p>
                            </div>
                            <div id='result-correct'>
                                <p>Great work!</p>
                                <p>You just earned yourself <span id="score">10</span> points.</p>
                                <p>Remember, you can’t earn any additional points from this challenge, but you can use it as reference.</p>
                                <p>Look for your next challenge soon.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col topCenterText col-sm">
                        <div>
                            <button id="gameover-btn" type="submit">CONTINUE</button>
                        </div>
                    </div>
                </div>
            </div>`;

        // Add the HTML content to the container
       var lastBoxDiv = document.getElementById(boxArray[boxArray.length - 1]);
       //lastBoxDiv.insertAdjacentHTML('afterend', challegneCompleteBox);

        console.log(lastBox)

      } else {
        console.log("The boxArray is empty.");
      }