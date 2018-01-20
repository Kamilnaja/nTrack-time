var express = require('express');
var router  = express.Router();

var time_reports_ctrl = require('../controllers/timesControllers');

router.get('/reports', time_reports_ctrl.time_reports_list);
router.post('/reports', time_reports_ctrl.time_reports_save);
router.post('/projects', time_reports_ctrl.time_reports_add_project);
router.get('/projects', time_reports_ctrl.time_reports_projects_list);

module.exports = router;