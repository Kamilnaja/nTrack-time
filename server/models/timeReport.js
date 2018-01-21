var mongoose = require('mongoose');
var mySchema = mongoose.Schema({
    user: {
        type: String
    },
    project: {
        type: String
    },
    time: {
        type: Number
    }
})

module.exports = mySchema;