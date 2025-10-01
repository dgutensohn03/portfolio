"use strict";

document.addEventListener('DOMContentLoaded', function (event) {
  loadVCertData();
});

function loadVCertData() {
  var tableBody = document.querySelector('#challenges-table tbody');
  tableBody.innerHTML = '';

  for (var track in vcertData) {
    for (var challengeId in vcertData[track]) {
      var challenge = vcertData[track][challengeId];
      var row = document.createElement('tr');
      row.innerHTML = "\n                <td>".concat(track, "</td>\n                <td>").concat(challengeId, "</td>\n                <td><input type=\"text\" value=\"").concat(challenge.challengeTitle, "\" class=\"edit-input\" onchange=\"updateChallenge('").concat(track, "', ").concat(challengeId, ", 'challengeTitle', this.value)\"></td>\n                <td><input type=\"number\" value=\"").concat(challenge.minScore, "\" class=\"edit-input\" onchange=\"updateChallenge('").concat(track, "', ").concat(challengeId, ", 'minScore', this.value)\"></td>\n                <td><input type=\"number\" value=\"").concat(challenge.totalPoints, "\" class=\"edit-input\" onchange=\"updateChallenge('").concat(track, "', ").concat(challengeId, ", 'totalPoints', this.value)\"></td>\n                <td><input type=\"number\" value=\"").concat(challenge.passPercent, "\" class=\"edit-input\" onchange=\"updateChallenge('").concat(track, "', ").concat(challengeId, ", 'passPercent', this.value)\"></td>\n            ");
      tableBody.appendChild(row);
    }
  }
}

function updateChallenge(track, challengeId, field, value) {
  vcertData[track][challengeId][field] = value;
}

function saveChanges() {
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(vcertData, null, 2));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href", dataStr);
  downloadAnchorNode.setAttribute("download", "challenges.json");
  document.body.appendChild(downloadAnchorNode); // Required for Firefox

  downloadAnchorNode.click();
  document.body.removeChild(downloadAnchorNode);
}