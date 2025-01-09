const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Middleware for parsing request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route for serving the login page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Route to handle login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple validation
    if (username == '' &   password == '') {
        res.send('<h1>Login Successful</h1><p>Welcome, Admin!</p>');
    } else {
        res.status(401).send('<h1>Login Failed</h1><p>Invalid username or password.</p>');
    }
});

// Start the server
const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
