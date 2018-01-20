var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = require('./configDb');
var timeReports = require('./routes/timeReports');
var mySchema = require('./models/timeReport');
var bodyParser = require('body-parser');
var accessControl = require('./accessControl');
var app = express();

app.use(accessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('hello');
})

app.use('/api', timeReports);

app.listen(8080, () => {
    console.log('listening on 8080');
})