var express = require('express');
var app = express();

// serve static files from current directory
app.use(express.static('./src/client'));
app.use(express.static('./'));
process.chdir('./');
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/client/index.html')
});

var server = app.listen(3000);