document.addEventListener('DOMContentLoaded', (event) => {
    loadVCertData();
});

function loadVCertData() {
    const tableBody = document.querySelector('#challenges-table tbody');
    tableBody.innerHTML = '';

    for (const track in vcertData) {
        for (const challengeId in vcertData[track]) {
            const challenge = vcertData[track][challengeId];

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${track}</td>
                <td>${challengeId}</td>
                <td><input type="text" value="${challenge.challengeTitle}" class="edit-input" onchange="updateChallenge('${track}', ${challengeId}, 'challengeTitle', this.value)"></td>
                <td><input type="number" value="${challenge.minScore}" class="edit-input" onchange="updateChallenge('${track}', ${challengeId}, 'minScore', this.value)"></td>
                <td><input type="number" value="${challenge.totalPoints}" class="edit-input" onchange="updateChallenge('${track}', ${challengeId}, 'totalPoints', this.value)"></td>
                <td><input type="number" value="${challenge.passPercent}" class="edit-input" onchange="updateChallenge('${track}', ${challengeId}, 'passPercent', this.value)"></td>
            `;

            tableBody.appendChild(row);
        }
    }
}

function updateChallenge(track, challengeId, field, value) {
    vcertData[track][challengeId][field] = value;
}

function saveChanges() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(vcertData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "challenges.json");
    document.body.appendChild(downloadAnchorNode); // Required for Firefox

    downloadAnchorNode.click();
    document.body.removeChild(downloadAnchorNode);
}
