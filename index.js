const express = require('express');
const path = require('path');
const port =8000;

const app = express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',function(req,res){
    res.send('home.ejs');
})


app.listen(port,function(err){
if(err){
    console.log(`There is an error in setting up the server:${err}`);
}
console.log(`Server is running on port:${port}`);
})