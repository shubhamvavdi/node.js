const express = require('express')
const app = express()
const path = require('path');

// aa line thi form no data backend ma handle kari saksu
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// aa line thi css ,javascript ,image add kari sako
app.use(express.static(path.join(__dirname,'public')));
// aa line thi page rander thase
app.set('view engine','ejs')


app.get('/', function (req, res) {
    res.render('index')
  })

  app.get('/:profile1', function (req, res) {
    res.send('lets play')
  })  
 

app.listen(3005 , function(){
    console.log("its running");
})