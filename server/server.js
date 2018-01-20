var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./configDb');
var timeReports = require('./routes/timeReports');
var mySchema = require('./models/timeReport');
var accessControl = require('./accessControl');
var app = express();
var port = 8080;

app.use(accessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('hello');
})

app.use('/api', timeReports);

app.listen(port, () => {
    console.log(`listening on ${port}`);
})