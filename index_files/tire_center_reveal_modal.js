function tireCenterPopUp_Call(e){

	if(e){
		var event = e || window.event;
		event.preventDefault();		
	}

	// if it's already fired, don't show again.  Happens during eventbubbling/capturing.
	if(!_L.events.tirecenter){
		_L.events.tirecenter = true;
	} else {
		return false;
	}
	
	$('#tireCenterPopUp iframe').remove();
	$('#tireCenterPopUp .js-iframeErrorMessage').remove();

	var tireCenterContent = '<iframe id="js-TCP" style="height:100%; z-index:3000;" class="columns large-12" src="'+tireCenterPopUp_DealerCode+'"></iframe>';

   	var ww = document.body.clientWidth;
   	var leftover = (ww - 1075)/2;

  	if (!$('html').hasClass('ie')) {
      $('#tireCenterPopUp').css('margin-left',leftover);
  	};

	$('#tireCenterPopUp').append(tireCenterContent).foundation('reveal', 'open').height('1080px').css({'left':'inherit'});

	// add event to the Reveal background only if it exists and only once.
	if( !$('.reveal-modal-bg').hasClass('js-ltc') ){
		$('.reveal-modal-bg').addClass('js-ltc');

		$('.reveal-modal-bg').on('click', function(){
			if(_L.events.tirecenter) _L.events.tirecenter=false;
		});
	}

	
};

tireCenterPopUp_DealerCode = '';

$(document).ready(function(){

	_L.events.tirecenter = false;

	//Check to see if the obj exists first (doctype that creates obj might not be present)
	if(typeof _L.LexusSettings !== "undefined"){

		if(_L.LexusSettings.TireCenterUID.length){
			var tireCenterContent = '<div id="tireCenterPopUp" class="reveal-modal row" data-reveal>';
			tireCenterContent += '<a class="close-reveal-modal">x</a>';
			tireCenterContent += '</div>';
			$('body').append(tireCenterContent);
			tireCenterPopUp_DealerCode = 'http://www.lexustirecenter.com/?uid='+_L.LexusSettings.TireCenterUID;

			// reset check for bubbled event, and attach to background for reset also.
			$('#tireCenterPopUp .close-reveal-modal').on('click',function(){
				_L.events.tirecenter=false;
			});
		}

		// Lexus Tire Center: Size the modal correctly
		$('.reveal-modal').css('height', $('html').height() - 180 + 'px'); 

		// Lexus Tire Center: Reset max-height after window resize
		$(window).resize(function() {

			 $('.reveal-modal').css('height', $('html').height() - 180 + 'px');
			 // var tireCenterWidth = $('#tireCenterPopUp').width();
			 // var windowWidth = $(window).width();
			 // var addLeft =  (windowWidth - tireCenterWidth) / 2;
			 // $('#tireCenterPopUp').css({'left':addLeft+'px'});

		});

		// Lexus Tire Center: hide or show tile on service portal
		if(!_L.LexusSettings.TireCenterUID.length){
			$('.js-LTC-link').detach();
		}
	}
	else{
		//if _L.LexusSettings is undefined, the doctype probably doesn't exist so remove on tire center.
		$('.js-LTC-link').detach();
	}
});