var mongoose = require('mongoose');
var TimeReportSchema = require('../models/timeReport');
var TimeReportModel = mongoose.model('Report', TimeReportSchema);

exports.time_reports_list = (req, res) => {
    TimeReportModel.find({})
        .exec((err, data) => {
            if (err) { return (err) }
            res.send(data);
        })
}

exports.time_reports_save = (req, res) => {
    var recordInstance = new TimeReportModel({
        user: req.body.user
    })
    recordInstance.save((err) => {
        if (err) { return (err) }
    })
    res.send('zapisano')
}

exports.time_reports_add_project = (req, res) => {
    var recordInstance = new TimeReportModel({
        project: req.body.project
    })
    recordInstance.save((err) => {
        if (err) { return (err) }
    })
    res.send('zapisano');
}

exports.time_reports_projects_list = (req, res) => {
    TimeReportModel.find({ "project": { $ne: null } })
        .sort('-project')
        .exec((err, data) => {
            if (err) { return (err) }
            res.send(data);
        })
}

