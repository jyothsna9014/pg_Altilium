var express = require('express');
var router = express.Router();
const logfixturescontroller = require('../controllers/logfixturescontroller');
const fixtureDetailsController=require('../controllers/fixtureDetailsController');
const fixturesController=require('../controllers/fixturesController');
const batterystatuscontroller=require('../controllers/batterystatuscontroller');
const LuminariesOpModeONController=require('../controllers/LuminariesOpModeONController')
const LuminariesOpModeOFFController=require('../controllers/LuminariesOpModeOFFController')
/* GET home page. */
router.get('/log', logfixturescontroller.getlog);       
router.get('/log/:id', logfixturescontroller.getlogbyid);
router.get('/log',fixturesController.getfixtures);

router.get('/fixturedetails',fixtureDetailsController.getfixturedetails);
router.get('/fixtures',fixturesController.getfixtures);

router.get('/batterystatus',batterystatuscontroller.getbatterystatus);
router.get('/opmodeON',LuminariesOpModeONController.getopmodeON);
router.get('/opmodeOFF',LuminariesOpModeOFFController.getopmodeOFF);
module.exports = router;