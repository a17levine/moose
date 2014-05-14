soundManager.setup({
  // where to find flash audio SWFs, as needed
  url: '.',
  // optional: prefer HTML5 over Flash for MP3/MP4
  preferFlash: false,
  onready: function() {
    // SM2 is ready to play audio!
  }
});


reactions = ["oh dear...", "whoa...", "easy now...", "whoa moose...", "moosie!", "whoa there...", "easy moosie..."];

function react() {
	setTimeout(function(){
		$('#reaction').text(reactions[Math.floor(Math.random() * reactions.length)]);
	}, 900)
	setTimeout(function(){
		$('#reaction').text("");
	}, 2000);

}

function playSound(audioFilePath) {
	var mySound = soundManager.createSound({
  	url: audioFilePath
	});
	mySound.play();
}

$(document).ready(function(){

	$('#head').click(function(){
		playSound('head.m4a');
		react();
	})

	$('#body').click(function(){
		playSound('head.m4a');
		react();
	})

	$('#hoofs').click(function(){
		playSound('hoofs.m4a');
	})

	$('#mouth').click(function(){
		playSound('lick.m4a');
		$('#mouth').click(function(){
			playSound('spit.m4a')
			react();
		})
	})

	$('#nose').click(function(){
		playSound('sniff.m4a');
		react();
	})

})