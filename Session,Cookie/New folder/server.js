const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse cookies and form data
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Static files (HTML, CSS, JS)

app.get('/', (req, res) => {
    // Display the login page if no user is logged in
    if (!req.cookies.username) {
        res.sendFile(__dirname + '/public/login.html');
    } else {
        res.redirect('/dashboard');
    }
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Basic validation
    if (username === 'admin' && password === 'password') {
        // Set session cookie
        res.cookie('username', username, { maxAge: 3600000, httpOnly: true });
        res.redirect('/dashboard');
    } else {
        res.send('Invalid username or password!');
    }
});

app.get('/dashboard', (req, res) => {
    // Check if the user is logged in
    if (!req.cookies.username) {
        return res.redirect('/');
    }
    res.send('Welcome to your Dashboard, ' + req.cookies.username);
});

app.get('/logout', (req, res) => {
    // Clear the session cookie
    res.clearCookie('username');
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
