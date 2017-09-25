var express = require('express');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
//app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
//app.use('/style',  express.static(__dirname + '/style'));
//app.use('/dist',  express.static(__dirname + '/node_modules/jquery/dist'));
// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
   res.sendFile('playaudio.html',{'root': __dirname + '/'});
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});



