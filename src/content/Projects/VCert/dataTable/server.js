const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Serve vcertData from challenges.js
const vcertDataPath = path.join(__dirname, 'bin', 'challenges.js');
const vcertData = require(vcertDataPath);

console.log("vcertData", vcertData)
// Serve vcertData from challenges.js

// Route to serve vcertData
app.get('/api/vcertData', (req, res) => {
    try {
        res.json(vcertData);
    } catch (err) {
        console.error('Error fetching vcertData:', err);
        res.status(500).send('Error fetching vcertData');
    }
});


app.get('/api/vcertData', (req, res) => {
    try {
        // Read vcertData from challenges.js
        const vcertDataPath = path.join(__dirname, 'bin', 'challenges.js');
        const vcertData = require(vcertDataPath);

        // Send vcertData as JSON response
        res.json(vcertData);

    } catch (err) {
        console.error('Error fetching vcertData:', err);
        res.status(500).send('Error fetching vcertData');
    }
});

// Save endpoint (for saving data to challenges.js)
app.post('/api/save', (req, res) => {
    const data = JSON.stringify(req.body, null, 2);
    fs.writeFile(path.join(__dirname, 'bin', 'challenges.js'), `module.exports = ${data};`, (err) => {
        if (err) {
            console.error('Error saving data:', err);
            res.status(500).send('Error saving data');
        } else {
            res.send('Data saved successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
