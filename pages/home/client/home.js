Template.talk.events({
	'click span'(elt, instance){
		var msg = new SpeechSynthesisUtterance('I love meat, but hate broccoli. I wish I could have ketchup without French fries. However, Mama said every meal should be nutrition-balanced.');
		window.speechSynthesis.speak(msg);
	}
})
