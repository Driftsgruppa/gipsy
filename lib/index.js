var serialPort = require("serialport");
serialPort.list(function (err, ports) {
  ports.forEach(function(port) {
  	if(port.manufacturer == 'Arduino (www.arduino.cc)'){
  		var coms = require('./coms.js');
  		coms.run(port.comName);
  	}
  });
});

var video = require('./video.js');
video.record();