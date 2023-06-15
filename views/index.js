const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');
const port = 8000;

const db = require('./config/mongoose');
const Contact = require('./models/contact');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('assets'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// var urle = bodyParser.urlencoded({ extended: false });


//Middleware 1
// app.use(function(req,res,next){
//     console.log('MW1');
//     next();
// });
  // Displaying from DB


// var contactList = contactdb;
// console.log(contactList)
//     {name:'raj',phone:'1234567897'},
//     {name:'ram',phone:'1234567897'},
//     {name:'rahu',phone:'1234567897'}

// ];
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

    app.get('/',function(req,res){
        Contact.find({}).then(function(contactList){
            res.render('home',{contact : contactList });
        })

    });

   app.get('/delete',function(req,res){
    let id = req.query.id;
//    let contactIndex = contactList.findIndex(contact => contact.phone == phone );
//    console.log(req.query.phone); 
//    console.log(req.query); 
//    if(contactIndex != -1){
//     contactList.splice(contactIndex,1);
    // res.redirect('back')
    Contact.findByIdAndDelete(id).then(function(){
        return res.redirect('back');
    })})

    app.post('/hi', function(req, res) {
    //   console.log(req.body)
    // contactList.push(req.body);    add function
    Contact.create({
        name: req.body.name,
        phone: req.body.phone
    })
    res.redirect('/');
}
 );


app.listen(port,function(err){
    if(err){
     console.log('there is  an error',err);
    }
    console.log('The server is running on port',port);
});