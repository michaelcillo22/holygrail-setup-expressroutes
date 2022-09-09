// hello world template for testing
var express = require('express');

var app = express();
// serving static files in public directory
app.use(express.static('public'));

app.get('/', function (req, res) {

    res.send('Hello World!');

});

app.listen(3000, function () {

    console.log('Running on port: 3000');

});