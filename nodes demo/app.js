const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3010;

// Define the data directory path
const dataDir = path.join(__dirname, 'data');

// Ensure 'data' directory exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// Home route: Display folders and form
app.get('/', (req, res) => {
  fs.readdir(dataDir, (err, folders) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).send('Error reading directory.');
    }

    // Read all folder contents for display
    const folderContents = folders.map(folder => {
      const filePath = path.join(dataDir, folder, 'info.txt');
      if (fs.existsSync(filePath)) {
        return {
          folderName: folder,
          content: fs.readFileSync(filePath, 'utf8')
        };
      }
      return { folderName: folder, content: 'No content available' };
    });

    // Pass folderContents to the template
    res.render('index', { folderContents });
  });
});

// Add folder route
app.post('/add-folder', (req, res) => {
  let folderName = req.body.folderName.trim();
  const title = req.body.title.trim();
  const description = req.body.description.trim();

  // Replace spaces in folder name with hyphens
  folderName = folderName.replace(/\s+/g, '');

  if (!folderName || !title || !description) {
    return res.status(400).send('All fields are required.');
  }

  const folderPath = path.join(dataDir, folderName);

  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) {
      console.error('Error creating folder:', err);
      return res.status(500).send('Error creating folder.');
    }

    const filePath = path.join(folderPath, 'info.txt');
    const fileContent = `Title: ${title}\nDescription: ${description}`;
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error('Error writing file:', err);
        return res.status(500).send('Error creating file.');
      }
      res.redirect('/');
    });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
