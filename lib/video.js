exports.record = function(){
	var Spaghetti = require('spaghetti'),
		path = require('path')

	Spaghetti.streamVideoWithAudio('webcam', {dest: './test.mp4', encoder: 'x264enc'}, function(success){
		if(success)
			console.log('Video streamed!');
		else
			console.log('Stream no workie.');
	});
};