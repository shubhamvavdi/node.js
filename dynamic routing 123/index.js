const express = require('express');
const path = require('path');
const app = express();

// Static files ke liye middleware
app.use(express.static(path.join(__dirname, 'public')));

// Views engine set karna (optional)
app.set('view engine', 'ejs'); // Agar aap EJS use kar rahe hain
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index'); // Render your main view
});

const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
