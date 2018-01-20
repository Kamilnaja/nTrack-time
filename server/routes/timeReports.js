var express = require('express');
var router = express.Router();

var time_reports_ctrl = require('../controllers/timesControllers');

router.get('/reports', time_reports_ctrl.time_reports_list);

module.exports = router;