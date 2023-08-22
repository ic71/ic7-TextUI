window.addEventListener('message', function(event) {
	var ic7 = new Audio('ic7.mp3');
	ic7.volume = 0.8;

	if (event.data.action == 'show') {
		$("body").fadeIn(400);
		$( ".text" ).text( "" + event.data.message + "" );
		ic7.play();
	} else if (event.data.action == 'hide') {

		$("body").fadeOut(400);
	}
})

