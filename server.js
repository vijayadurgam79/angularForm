var express = require('express');
var app = express();

app.use(express.static('public'));
app.set('port', 9000);

app.use(function( req, res, next ) {
    return res.sendFile(__dirname + '/public/index.html');
});

app.listen(app.get('port'), function(  ) {
    console.log( "Server running on port", app.get('port'));
});
