exports.record = function(){
	var ffmpeg = require('fluent-ffmpeg');

	ffmpeg()
		.input('/dev/video0')
		.videoCodec('mpeg4')
		.size('1280x960')
		.native()
		.input('hw:0')
		.audioCodec('alsa')
		.audioFilters('volume=3')
		.outputOptions([
			'-t 10',
			'-thread_queue_size 1024'
			]);
		.output('output.mp4')
		.on('end', function() {
			console.log('Finished processing');
		})
		.run();
};