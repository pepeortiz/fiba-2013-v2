$(window).load(function() {
	// MODULO SLIDER NOTICIAS
	var $items = $('#carousel li').length;
	var $galleryWidth = $('#carouselHolder li').outerWidth();
	var $currentSlide = 0;
	var $currentIndex = 0;
	var carouselTimer = setInterval(startCarousel, 5000);
	startCarousel();
	// MODULO SLIDER NOTICIAS

	// MODULO JUGADORES DESTACADOS
	var $jugador = $('.jugador').length;
	var $jugadorWidth = $('.jugador').outerWidth();
	var $jugadorSteps = $jugador / 3;
	var $jugadorCurrentStep = 0;
	var $jugadorHolderWidth = $('#destacadosHolder').outerWidth() + 5;
	// MODULO JUGADORES DESTACADOS


	// MODULO SLIDER NOTICIAS
	for (i = 0; i < $items; i++){
		$('#controles').append('<div class="control"></div>');
	}
	
	$('.control').eq(0).addClass('active');

	var $controlWidth = $('.control').outerWidth();
	
	$('#controles').css({'width': ($controlWidth + 10) * $items });
	
	$('#carouselHolder').css({'width':$galleryWidth * $items});

	$('.control').on('click', function(){
		$currentIndex = $(this).index();
		$currentSlide = $(this).index() + 1;

		clearInterval(carouselTimer);
		carouselTimer = setInterval(startCarousel, 5000);

		$('#carousel ul').animate({'margin-left': '-' + $galleryWidth * $(this).index()});
		showInfo($currentIndex);
		

		$('.control').each(function () {
			$(this).removeClass('active');
		});
	
		$(this).addClass('active');
	});

	function startCarousel(){
		if( $currentSlide <+ $items ){
			$currentIndex = $currentSlide;
			$currentSlide++;
			$('#carousel ul').animate({'margin-left': '-' + $galleryWidth * ($currentSlide - 1)});
		}else{
			$currentIndex = 0;
			$currentSlide = 1;
			$('#carousel ul').animate({'margin-left': '-' + $galleryWidth * ($currentSlide - 1)});
		}

		$('.control').each(function () {
			$('.control').removeClass('active');
		});
		
		showInfo($currentIndex);
		$('.control').eq($currentSlide - 1).addClass('active');
		
	}

	function showInfo(elIndex){
		$('.info').each(function (){
			$(this).animate({opacity:0}, 'fast', function(){
				$(this).addClass('hideInfo');
				$(this).hide();
				$('.info').eq(elIndex).removeClass('hideInfo');
				$('.info').eq(elIndex).show();
				$('.info').eq(elIndex).animate({opacity:1}, 'fast');
			});
		});
	}
	// MODULO SLIDER NOTICIAS


	// MODULO JUGADORES DESTACADOS
	$('#destacados').css({'width': $jugador * ($jugadorWidth + 20)});

	$('#destacadosControlRight').on('click', function (){
		if($jugadorCurrentStep < $jugadorSteps - 1){
			$jugadorCurrentStep++;

			if($(window).width() < 760 && $(window).width() > 479) {
				unJugador = ($jugadorCurrentStep * 10) - 2;
				$jugadorSteps = $jugador / 2;
				$jugadorHolderWidth = $('#destacadosHolder').outerWidth();
				$('#destacados').animate({'margin-left':'-' + ($jugadorHolderWidth * $jugadorCurrentStep + unJugador)});
			}else if($(window).width() < 479) {
				unJugador = $jugadorCurrentStep * 10;
				$jugadorSteps = $jugador / 1;
				$jugadorHolderWidth = $('#destacadosHolder').outerWidth();
				$('#destacados').animate({'margin-left':'-' + ($jugadorHolderWidth * $jugadorCurrentStep + unJugador)});
			}else{
				$jugadorSteps = $jugador / 3;
				$jugadorHolderWidth = $('#destacadosHolder').outerWidth();
				$('#destacados').animate({'margin-left':'-' + ($jugadorHolderWidth * $jugadorCurrentStep+5)});
			}


		}
	});

	$('#destacadosControlLeft').on('click', function () {
		if($jugadorCurrentStep >= 1){
			$jugadorCurrentStep--;

			if($(window).width() < 760 && $(window).width() > 479) {
				unJugador = ($jugadorCurrentStep * 10) + 2;
				$jugadorSteps = $jugador / 2;
				$jugadorHolderWidth = $('#destacadosHolder').outerWidth();
				$('#destacados').animate({'margin-left':'-' + ($jugadorHolderWidth * $jugadorCurrentStep + unJugador)});
			}else if($(window).width() < 479) {
				unJugador = $jugadorCurrentStep * 10;
				$jugadorSteps = $jugador / 1;
				$jugadorHolderWidth = $('#destacadosHolder').outerWidth();
				$('#destacados').animate({'margin-left':'-' + ($jugadorHolderWidth * $jugadorCurrentStep + unJugador)});
			}else{
				$jugadorSteps = $jugador / 3;
				$jugadorHolderWidth = $('#destacadosHolder').outerWidth();
				$('#destacados').animate({'margin-left':'-' + $jugadorHolderWidth * $jugadorCurrentStep});
			}

		}
	}); 

	function centerJugadorDestacado () {
		var dialogTop = ($(window).height() - $('.windowJugador').height() ) / 2 + $(window).scrollTop();
		var dialogLeft = ($(window).width() - $('.windowJugador').width()) / 2 + $(window).scrollLeft();
		$('.windowJugador').css({'top':dialogTop, 'left':dialogLeft});
	}

	$(window).resize(function (){
		var windowHeight = $(window).height();
		var dialogTop = ($(window).height() - $('.windowJugador').height() ) / 2 + $(window).scrollTop();
		var dialogLeft = ($(window).width() - $('.windowJugador').width()) / 2 + $(window).scrollLeft();
		$('.windowJugador').css({'top':dialogTop, 'left':dialogLeft});
		$('.overlay').css({'height':windowHeight});

		clearInterval(carouselTimer);
		$galleryWidth = $('#carouselHolder li').outerWidth();
		$('#controles').css({'width': ($controlWidth + 10) * $items });
		$('#carouselHolder').css({'width':$galleryWidth * $items});
		
		$jugadorHolderWidth = $('#destacadosHolder').outerWidth();
		
		if(this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function() {
            carouselTimer = setInterval(startCarousel, 5000);
            $('#carousel ul').animate({'margin-left': '-' + $galleryWidth * ($currentSlide - 1)});
            if($(window).width() < 760 && $(window).width() > 479) {
				unJugador = ($jugadorCurrentStep * 10) + 2;
				$jugadorSteps = $jugador / 2;
				$jugadorHolderWidth = $('#destacadosHolder').outerWidth();
				$('#destacados').animate({'margin-left':'-' + ($jugadorHolderWidth * $jugadorCurrentStep + unJugador)});
			}else if($(window).width() < 479) {
				unJugador = $jugadorCurrentStep * 10;
				$jugadorSteps = $jugador / 1;
				$jugadorHolderWidth = $('#destacadosHolder').outerWidth();
				$('#destacados').animate({'margin-left':'-' + ($jugadorHolderWidth * $jugadorCurrentStep + unJugador)});
			}else{
				$jugadorSteps = $jugador / 3;
				$jugadorHolderWidth = $('#destacadosHolder').outerWidth();
				$('#destacados').animate({'margin-left':'-' + $jugadorHolderWidth * $jugadorCurrentStep});
			}
            $(this).trigger('resizeEnd');
        }, 50);

		if($(window).width() < 999 && $(window).width() > 760) {
			$('#jugadorInfoHolder').css({'width':'340px', 'margin-top':'0px'});
			$('.windowJugador').css({'width':'730px'});
			$('#windowJugadorImage img').css({'width':'362px'});
			$('#windowJugadorImage').css({'width':'390px', 'padding':'13px'});
			centerJugadorDestacado();
			$(window).bind('scroll', centerJugadorDestacado);
			
		}else if($(window).width() < 760 && $(window).width() > 479 ) {
			$('#jugadorInfoHolder').css({'width':'290px', 'margin-top':'-135px'});
			$('.windowJugador').css({'width':'290px', 'top':'210px'});
			$('#windowJugadorImage').css({'width':'290px', 'padding':'0'});
			$('#windowJugadorImage img').width('290px');
			$(window).unbind('scroll', centerJugadorDestacado);
			centerJugadorDestacado();
		}else if($(window).width() < 479) {
			$('#jugadorInfoHolder').css({'width':'290px', 'margin-top':'-135px'});
			$('.windowJugador').css({'width':'290px', 'top':'210px'});
			$('#windowJugadorImage').css({'width':'290px', 'padding':'0'});
			$('#windowJugadorImage img').width('290px');
			$(window).unbind('scroll', centerJugadorDestacado);
			centerJugadorDestacado();
		}else if($(window).width() > 999){
			$('#jugadorInfoHolder').css({'width':'400','margin-top':'0px'});
			$('.windowJugador').css({'width':'800px', 'top':'10px'});
			$('#windowJugadorImage img').width('364px');
			$('#windowJugadorImage').css({'width':'400px', 'padding':'18px'});
			$(window).bind('scroll', centerJugadorDestacado);
			centerJugadorDestacado();
		}
	});

	


	$('.jugadorMas, .jugador').on('click', function(){
		var windowHeight = $(window).height();
		$('body').prepend('<div class="overlay"></div>');
		$('body').prepend('<div class="windowJugador"><div id="windowJugadorHeader"><div class="windowJugadorClose"></div></div><div id="windowJugadorImage"><img src="http://placehold.it/364x546&text=Jugador"></div><div id="jugadorInfoHolder"><div id="windowJugadorInfo"><h3>Jose Juan Barea</h3><h4>Puerto Rico</h4><p>Jose Juan Barea jugó durante 4 temporadas en la Universidad Northeastern de Boston, donde fue elegido All-American en dos ocasiones. En total promedió 20,3 puntos y 6,5 asistencias por partido. En última temporada promedio 21 puntos y 8,3 asistencias, siendo el decimo octavo mejor jugador anotador en la NCAA y el octavo mejor pasador. Fue elegido Jugador del Año de su conferencia. El 12 de junio del 2011, con su equipo Dallas Mavericks en el campo rival de los Miami Heat, American Airlines Arena, se alza con su primer anillo de la NBA, aportando 15 puntos, 5 asistencias y 3 rebotes en 29 minutos de juego. Barea se convierte en el segundo puertorriqueño, detrás de Butch Lee, en ganar un anillo de campeonato en la NBA.</p></div></div></div>');
		$('.windowJugador').css({'position':'absolute', 'width':'800px', 'height':'620px', 'background':'black', 'z-index':999991, 'opacity':0}).fadeTo('fast', 1);;
		$('.overlay').css({'position':'fixed', 'width':'100%', 'height':windowHeight, 'background':'black', 'z-index':99999, 'opacity': 0}).fadeTo('fast', 0.75);
		$('#windowJugadorHeader').css({'height':'41px', 'background':'#c12a39'});
		$('#windowJugadorInfo').css({ 'background':'#c3c3c3', 'width':'100%', 'height':'579px'});
		$('#windowJugadorInfo h3').css({'font-size':'28px', 'padding-top':'15px', 'padding-left':'15px', 'padding-right':'15px'});
		$('#windowJugadorInfo h4').css({'font-size':'21px', 'font-style':'italic', 'font-weight': '400', 'padding-left':'15px', 'padding-right':'15px'});
		$('#windowJugadorInfo p').css({'font-size':'16px', 'font-weight': '400', 'padding-top':'15px', 'padding-left':'15px', 'padding-right':'15px'});
		$('#jugadorInfoHolder').css({'float': 'left', 'width':'400px', 'height':'579px'});
		$('#windowJugadorImage').css({'float':'left','width':'400px', 'height':'579px', 'background':'#fff', '-webkit-box-sizing': 'border-box', '-moz-box-sizing': 'border-box', 'box-sizing': 'border-box', 'padding':'18px'});
		$('.windowJugadorClose').css({'background':'url(images/fiba/btn_close.png)', 'width':'23px', 'height':'23px', 'cursor':'pointer', 'float':'right', 'margin':'9px'});

		if($(window).width() < 999 && $(window).width() > 760) {
			$('#jugadorInfoHolder').css({'width':'340px', 'margin-top':'0px'});
			$('.windowJugador').css({'width':'730px'});
			$('#windowJugadorImage').css({'width':'390px', 'padding':'13px'});
			$(window).bind('scroll', centerJugadorDestacado);
			centerJugadorDestacado();
		}else if($(window).width() < 760 && $(window).width() > 479 ) {
			$('#jugadorInfoHolder').css({'width':'290px', 'margin-top':'-135px'});
			$('.windowJugador').css({'width':'290px', 'top':'210px'});
			$('#windowJugadorImage').css({'width':'290px', 'padding':'0'});
			$('#windowJugadorImage img').width('290px');
			$(window).unbind('scroll', centerJugadorDestacado);
			centerJugadorDestacado();
		}else if($(window).width() < 479) {
			$('#jugadorInfoHolder').css({'width':'290px', 'margin-top':'-135px'});
			$('.windowJugador').css({'width':'290px', 'top':'210px'});
			$('#windowJugadorImage').css({'width':'290px', 'padding':'0'});
			$('#windowJugadorImage img').width('290px');
			$(window).unbind('scroll', centerJugadorDestacado);
			centerJugadorDestacado();
		}else if($(window).width() > 999){
			$('#jugadorInfoHolder').css({'width':'400','margin-top':'0px'});
			$('.windowJugador').css({'width':'800px', 'top':'10px'});
			$('#windowJugadorImage img').width('364px');
			$('#windowJugadorImage').width('364px');
			$(window).bind('scroll', centerJugadorDestacado);
			centerJugadorDestacado();
		}

		// var dialogTop = ($(window).height() - $('.windowJugador').height() ) / 2 + $(window).scrollTop();
		// var dialogLeft = ($(window).width() - $('.windowJugador').width()) / 2 + $(window).scrollLeft();
		// $('.windowJugador').css({'top':dialogTop, 'left':dialogLeft});

	});
	
	$('body').delegate('.windowJugadorClose', 'click', function(){
		$('.windowJugador').fadeTo('fast', 0, function() {
			$('.windowJugador').remove();
		});
		$('.overlay').fadeTo('fast', 0, function (){
			$('.overlay').remove();
		});
	});
	

	// MODULO JUGADORES DESTACADOS
});

$(document).ready(function(){
	/////////////////////////////////
	// Go to TOP
	/////////////////////////////////
	$('a[href=#top]').click(function(){
	    $('html, body').animate({scrollTop:0}, 'slow');
        return false;
	});

	/*
	Modulo estadísticas
	Author: Mike Henriquez - miguel.henriquez@gfrmedia.com
	*/

	$('.tabs').eq(0).show();
	$('#estadisticasChoices li').eq(0).removeClass('estadisticasInactive').addClass('estadisticasActive');

	$('#estadisticasChoices ul li').on('click', function() {
		
		$('#estadisticasChoices ul li').each(function () {
			$(this).removeClass('estadisticasActive');
			$(this).addClass('estadisticasInactive');
		});
		$(this).removeClass('estadisticasInactive').addClass('estadisticasActive');
		$('.tabs').each(function (){
			$('.tabs').hide();
		});
		$('.tabs').eq($(this).index()).show();

	});

	


}); 