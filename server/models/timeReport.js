var mongoose = require('mongoose');
var mySchema = mongoose.Schema({
    user: {
        type: String
    }
})

module.exports = mySchema;