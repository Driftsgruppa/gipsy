exports.run = function(port){
	var serialport = require("serialport");
	var SerialPort = serialport.SerialPort;
	var sp = new SerialPort(port, {
	  baudrate: 9600,
	  parser: serialport.parsers.readline("\n")
	});

	sp.on('open', function () {
	  sp.on('data', function(data) {
	  	switch(data){
	  		case 'INITIATE':
	  			console.log('Called INITIATE');
	  		break;
	  		case 'CANCEL':
	  			console.log('Called CANCEL');
	  		break;
	  		case 'QUESTION_RECORD_YES':
	  			console.log('Called QUESTION_RECORD_YES');
	  		break;
	  		case 'QUESTION_UPLOAD_YES':
	  			console.log('Called QUESTION_UPLOAD_YES');
	  		break;
	  	}
	  });
	});
};