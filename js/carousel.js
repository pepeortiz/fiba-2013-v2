$(document).ready(function (){
	var $items = $('#carousel li').length;
	var $galleryWidth = $('#carousel li').outerWidth();
	var $currentIndex = 0;
	
	$('#carousel ul').css({'width':$galleryWidth * $items});


	//Create carousel controllers
	for (i = 0; i < $items; i++){
		$('#controles').append('<div class="control"></div>');
	}
	var $controlWidth = $('.control').outerWidth();
	$('#controles').css({'width': ($controlWidth + 10) * $items });


	


	$('.control').on('click', function(){
		$currentIndex = $(this).index();
		$('#carousel ul').animate({'margin-left': '-' + $galleryWidth * $(this).index()});
		$('.control').each(function () {
			$(this).removeClass('active');
		});
		$(this).addClass('active');
	});



	// console.log($currentIndex);

});

function startCarousel() {
	setInterval();
}