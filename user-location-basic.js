
$(document).ready(function(){

	if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(function(position){
		$("#location").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
		});
	}
	
});