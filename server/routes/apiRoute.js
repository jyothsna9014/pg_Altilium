var express = require('express');
var router = express.Router();
const logfixturescontroller = require('../controllers/logfixturescontroller');
const fixtureDetailsController=require('../controllers/fixtureDetailsController');
const fixturesController=require('../controllers/fixturesController');
const batterystatuscontroller=require('../controllers/batterystatuscontroller');
const LuminariesOpModeONController=require('../controllers/LuminariesOpModeONController')
const LuminariesOpModeOFFController=require('../controllers/LuminariesOpModeOFFController')
const LitalityNodesController=require('../controllers/LitalityNodesController')
const ONGridONBatteryController=require('../controllers/ONGridONBatteryController')
const dashBoardController=require('../controllers/dashBoardController.js')
/* GET home page. */
router.get('/log', logfixturescontroller.getlog);       
router.get('/log/:id', logfixturescontroller.getlogbyid);
router.get('/log',fixturesController.getfixtures);

router.get('/fixturedetails',fixtureDetailsController.getfixturedetails);
router.get('/fixtures',fixturesController.getfixtures);

router.get('/batterystatus',batterystatuscontroller.getbatterystatus);
router.get('/opmodeON',LuminariesOpModeONController.getopmodeON);
router.get('/opmodeOFF',LuminariesOpModeOFFController.getopmodeOFF);
router.get('/litalitynodes',LitalityNodesController.getLitalityNodes);

router.get('/ONGrid',ONGridONBatteryController.getONGrid);
router.get('/ONBattery',ONGridONBatteryController.getONBattery);
router.get('/dashboard',dashBoardController.getdashboard);

module.exports = router;