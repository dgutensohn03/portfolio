const http = require('http');
const cors = require('cors');
const firebase = require('firebase-admin');

// Initialize Firebase Admin SDK
const serviceAccount = require('src/vcert-9568e-firebase-adminsdk-3na19-44c0c54aea.json');
const firebaseConfig = {
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://vcert-9568e.firebaseio.com/'
};
firebase.initializeApp(firebaseConfig);

// Create a server
const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Request-Method', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Set response content type
  res.setHeader('Content-Type', 'application/json');

  // Check if the request is for the specified endpoint
  if (req.url === '/') {
    // Fetch data from Firebase database
    firebase.database().ref('ProductionUserGroup').once('value')
      .then(snapshot => {
        const data = snapshot.val();
        res.statusCode = 200;
        res.end(JSON.stringify(data));
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
      });
  } else {
    // Handle other routes
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Not Found' }));
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
