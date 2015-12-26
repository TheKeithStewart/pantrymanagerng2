var express = require('express');
var app = express();

// serve static files from current directory
app.use(express.static('./src'));
app.use(express.static('./'));
process.chdir('./');
app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});

var server = app.listen(3000);