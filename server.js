var express = require('express');
var app = express();

app.use(express.static(__dirname + '/styles'));


// Listening
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Listening on port ' + port);
});

// GET
app.get('/', function(req, res, next){
  res.sendFile(__dirname + '/index.html');
});

// Error handling
app.use(function(err, req, res, next){
  console.log(err);
  res.status(500).send(err.message);

});
