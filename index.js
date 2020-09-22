//require express
var express = require('express')

//create express object, call express
var app = express()

//get for homepage/
app.get('/', function(req, res){
    //return something to home page
    res.send('Hello World');
});


//server setup
app.listen(3000, function(){
    console.log('Listening!')
});
