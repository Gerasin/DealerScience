$(document).ready(function(){

	

	// Попап
	var popupOpen;
	$(".popup_open").click(function(){
		$('.popup:visible').fadeOut(200);
		popupStatus = 0;
		popupOpen = $(this).attr('rel');
		loadPopup(popupOpen);
		var popupTop = $(window).scrollTop() + 40;
		$(popupOpen).css({'top' : popupTop + 'px'});
		return false;
	});
	$(".popup_close, .popup-close, .popup_bg, .close").click(function(){
		disablePopup();
		return false;
	});
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});


	

});





// Попап
var popupStatus = 0;

function loadPopup(popupOpen){
	if(popupStatus==0){
		$(".popup_bg").css({
			"opacity": "0.7"
		});
		$(".popup_bg").fadeIn(200);
		$(popupOpen).fadeIn(200);
		popupStatus = 1;
	}
}

function disablePopup(){
	if(popupStatus==1){
		$(".popup_bg").fadeOut(200);
		$(".popup").fadeOut(200);
		popupStatus = 0;
	}
}
