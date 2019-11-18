var express = require('express');
var router = express.Router();
const logfixturescontroller = require('../controllers/logfixturescontroller');
const fixtureDetailsController=require('../controllers/fixtureDetailsController');
const fixturesController=require('../controllers/fixturesController');

const dashBoardController=require('../controllers/dashBoardController.js')
/* GET home page. */
router.get('/log', logfixturescontroller.getlog);       
router.get('/log/:id', logfixturescontroller.getlogbyid);
router.get('/log',fixturesController.getfixtures);

router.get('/fixturedetails',fixtureDetailsController.getfixturedetails);
router.get('/fixtures',fixturesController.getfixtures);


router.get('/dashboard',dashBoardController.getdashboard);

module.exports = router;