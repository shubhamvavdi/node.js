const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3010;

// Middleware Setup
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// Routes
const folderPath = path.join(__dirname, 'public');

// Index Route (Read Folder and Render Page)
app.get('/', (req, res) => {
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            return res.status(500).send('Error reading folder.');
        }
        res.render('index', { files });
    });
});

// Submit Data (Write File and Redirect)
app.post('/add-file', (req, res) => {
    const { fileName, fileContent } = req.body;
    const filePath = path.join(folderPath, fileName + '.txt');
    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            return res.status(500).send('Error writing file.');
        }
        res.redirect('/');
    });
});

// Read More Route (Read File and Render Detail Page)
app.get('/read-more/:fileName', (req, res) => {
    const { fileName } = req.params;
    const filePath = path.join(folderPath, fileName);
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('Error reading file.');
        }
        res.render('detail', { fileName, content: data });
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
