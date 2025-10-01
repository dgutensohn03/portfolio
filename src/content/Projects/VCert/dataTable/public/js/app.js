document.addEventListener('DOMContentLoaded', () => {
    loadVCertData();
});

function loadVCertData() {
    fetch('https://us-central1-vcert-9568e.cloudfunctions.net/getVCertData/api/load')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            vcertData = data; // Assume vcertData is defined globally
            renderVCertData();
        })
        .catch(error => {
            console.error('Error loading vcertData:', error);
        });
}

function renderVCertData() {
    console.log('Loading vcertData:', vcertData); // Log vcertData for debugging
    const container = document.getElementById('challenges-container');
    container.innerHTML = '';

    for (const track in vcertData) {
        for (const challengeId in vcertData[track]) {
            const challenge = vcertData[track][challengeId];
            console.log('challenge', challenge);
            const challengeDiv = document.createElement('div');
            challengeDiv.classList.add('challenge');

            const table = document.createElement('table');
            table.innerHTML = `
                <thead>
                    <tr>
                        <th>Track</th>
                        <th>Challenge ID</th>
                        <th>Challenge Title</th>
                        <th>Minimum Score</th>
                        <th>Total Points</th>
                        <th>Pass Percent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${track}</td>
                        <td>${challengeId}</td>
                        <td><input type="text" value="${challenge.challengeTitle || ''}" class="edit-input" onblur="updateChallenge('${track}', '${challengeId}', 'challengeTitle', this.value)"></td>
                        <td><input type="number" value="${challenge.minScore || ''}" class="edit-input" onblur="updateChallenge('${track}', '${challengeId}', 'minScore', this.value)"></td>
                        <td><input type="number" value="${challenge.totalPoints || ''}" class="edit-input" onblur="updateChallenge('${track}', '${challengeId}', 'totalPoints', this.value)"></td>
                        <td><input type="number" value="${challenge.passPercent || ''}" class="edit-input" onblur="updateChallenge('${track}', '${challengeId}', 'passPercent', this.value)"></td>
                    </tr>
                </tbody>
            `;

            const rulesDiv = document.createElement('div');
            rulesDiv.innerHTML = '<h3>Rules</h3>';
            for (const rule in challenge.rules) {
                const ruleInput = document.createElement('input');
                ruleInput.type = 'text';
                ruleInput.value = challenge.rules[rule] || '';
                ruleInput.classList.add('edit-input');
                ruleInput.onblur = () => updateChallengeRule(track, challengeId, rule, ruleInput.value);
                rulesDiv.appendChild(ruleInput);
                rulesDiv.appendChild(document.createElement('br'));
            }

            const activitiesDiv = document.createElement('div');
            activitiesDiv.innerHTML = '<h3>Activities</h3>';
            challenge.activity.forEach((activity, index) => {
                const activityDiv = document.createElement('div');
                activityDiv.classList.add('activity');

                activityDiv.innerHTML = `
                    <h4>Activity ${index + 1}</h4>
                    <p>Points: <input type="number" value="${activity.points || ''}" class="edit-input" onblur="updateActivity('${track}', '${challengeId}', ${index}, 'points', this.value)"></p>
                    <p>Chances: <input type="number" value="${activity.chances || ''}" class="edit-input" onblur="updateActivity('${track}', '${challengeId}', ${index}, 'chances', this.value)"></p>
                    <p>Question: <textarea class="textarea-input" onblur="updateActivity('${track}', '${challengeId}', ${index}, 'question', this.value)">${activity.question || ''}</textarea></p>
                `;

                const answersList = document.createElement('ul');
                activity.answers.forEach((answer, aIndex) => {
                    const answerItem = document.createElement('li');
                    answerItem.innerHTML = `<input type="text" value="${answer || ''}" class="edit-input" onblur="updateActivityAnswer('${track}', '${challengeId}', ${index}, ${aIndex}, this.value)">`;
                    answersList.appendChild(answerItem);
                });

                activityDiv.appendChild(answersList);
                activitiesDiv.appendChild(activityDiv);
            });

            challengeDiv.appendChild(table);
            challengeDiv.appendChild(rulesDiv);
            challengeDiv.appendChild(activitiesDiv);
            container.appendChild(challengeDiv);
        }
    }
}

function updateChallenge(track, challengeId, field, value) {
    vcertData[track][challengeId][field] = value;
    saveVCertData();
}

function updateChallengeRule(track, challengeId, rule, value) {
    vcertData[track][challengeId].rules[rule] = value;
    saveVCertData();
}

function updateActivity(track, challengeId, activityIndex, field, value) {
    vcertData[track][challengeId].activity[activityIndex][field] = value;
    saveVCertData();
}

function updateActivityAnswer(track, challengeId, activityIndex, answerIndex, value) {
    vcertData[track][challengeId].activity[activityIndex].answers[answerIndex] = value;
    saveVCertData();
}

function saveVCertData() {
    console.log('Saving vcertData:', vcertData); // Log data being sent
    fetch('https://us-central1-vcert-9568e.cloudfunctions.net/getVCertData/api/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vcertData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log('Data saved successfully:', data);
    })
    .catch(error => {
        console.error('Error saving vcertData:', error);
    });
}
