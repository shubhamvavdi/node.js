const express = require('express');
const app = express();

app.use((req, res, next) => {
    console.log("hello");
    next();
});

app.get('/', (req, res) => {
    res.send("hello world");
});

// Server શરૂ કરો
app.listen(3000, () => {
    console.log("Server 3000 પર ચાલી રહ્યું છે.");
});
