(function(window){
	var byeSpeaker = {};
	var speakword = "GoodBye";
	byeSpeaker.speak = function(name){
		console.log(speakword + " " + name);
	}

	window.byeSpeaker = byeSpeaker;

})(window);

