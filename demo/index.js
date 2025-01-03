const express = require('express'); // Express import કરો
const app = express(); // App Instance બનાવો

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Express.js!');
});

app.get ('/users',(req , res)=>{    
    res.send('shubham');
});
 app.get ('/about',(req,res)={
    res.send('hello shubham')
 })
// Server Start
const PORT = 3001; // Port Define કરો
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
  