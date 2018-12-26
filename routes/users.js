var express = require('express');
var router = express.Router();
var Gpio = require('onoff').Gpio;

/* GET users listing. */
router.get('/fan', function(req, res, next) {
  let FAN = new Gpio(4, 'out');
  let status = FAN.readSync();
  console.log("Fan status : " + status);
  if(status === 0 ) {
  	FAN.writeSync(1);
  } else {
  	FAN.writeSync(0);
  	//FAN.unexport();
  }
  
  res.render('index', { title: 'Express' });
});

router.get('/ac', function(req, res, next) {
  let AC = new Gpio(11, 'out');
  let status = AC.readSync();
  console.log("Ac status : " + status);
  if(status === 0 ) {
  	AC.writeSync(1);
  } else {
  	AC.unexport();
  }
  res.render('index', { title: 'Express' });
});

router.get('/bulb', function(req, res, next) {
  let BULB = new Gpio(26, 'out');
  let status = BULB.readSync();
  console.log("Bulb status : " + status);
  if(status === 0 ) {
  	BULB.writeSync(1);
  } else {
  	BULB.unexport();
  }
  res.render('index', { title: 'Express' });
});

router.get('/clean', function(req, res, next) {
  let fan = new Gpio(4, 'out');
  let ac = new Gpio(11, 'out');
  let bulb = new Gpio(26, 'out');
  fan.unexport();
  ac.unexport();
  bulb.unexport();
  res.render('index', { title: 'Express' });
});

module.exports = router;
