const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
    res.send('Welcome to thge!');
});

app.get('/about', (req, res) => {
    res.send('This is the About Page!');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
