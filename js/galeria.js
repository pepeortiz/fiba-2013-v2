$(document).ready(function () {
	

	var $gallery = $('#galleryUl');
	var listWidth = $('#galleryUl li').outerWidth();
	var galleryItems = $('#galleryUl li').length;
	var galleryWidth = listWidth * galleryItems;
	var left_value = listWidth * (-1);
	var $galleryLIs = $gallery.find('li');
    var thumbsWidth = $('#thumbs li').outerWidth();
    var thumbsItems = $('#thumbs li').length;
    var $thumbs = thumbsWidth * thumbsItems;
    var pagination = Math.ceil(thumbsItems / 3);
    var currPagination = 1;

    var thumbsInfoWidth = $('#galeriaInfoText li').outerWidth();
    var thumbsInfoItems = $('#galeriaInfoText li').length;
    var $thumbsInfo = thumbsInfoWidth * thumbsInfoItems;

    $('#galeriaInfoText ul').css('width', $thumbsInfo);

	$('#galleryUl').css('width', galleryWidth);

	$('#thumbs ul').css('width', $thumbs);
	$galleryLIs.addClass('desaturate');
    $galleryLIs.eq(0).removeClass('desaturate');
    


	$('#galeriaResponsiveLeft').on('click', function (){
		if(currPagination == 1){
			return false;
		}else{
			currPagination--;
			scrollPosition = (currPagination * galleryWidth) / galleryItems;
	    	
			$('#galeriaInfoText ul').animate({marginLeft: "-" + scrollPosition}, 600);
	    	$('#galleryUl').animate({marginLeft: "-" + scrollPosition}, 600);
		}
	});

	$('#galeriaResponsiveRight').on('click', function(){
		if(currPagination == galleryItems ){
			return false;
		}else{
			
			scrollPosition = (currPagination * galleryWidth) / galleryItems;

			$('#galeriaInfoText ul').animate({marginLeft: "-" + scrollPosition}, 600);
	    	$('#galleryUl').animate({marginLeft: "-" + scrollPosition}, 600);
		}
		currPagination++;
	});


	
    $('#thumbs li').click(function (){
    	var selectedIndex = $(this).index();
    	var scrollPosition = (selectedIndex * galleryWidth) / galleryItems;
    	var scrollPositionInfo = (selectedIndex * thumbsInfoWidth) / thumbsInfoItems;


    	$('#galleryUl').animate({marginLeft: "-" + scrollPosition}, 600);
    	$('#galeriaInfoText ul').animate({marginLeft: "-" + scrollPosition}, 600);

    });

    $(window).resize(function (){
    	if(this.resizeTO1) clearTimeout(this.resizeTO1);
        this.resizeTO1 = setTimeout(function() {
        	$('#galleryUl').animate({marginLeft: 0}, 600);
	    	$('#thumbs ul').animate({marginLeft: 5}, 600);
	    	$('#galeriaInfoText ul').animate({marginLeft: 0}, 600);
	    	currPagination = 1;

			thumbsInfoWidth = $('#galeriaInfoText li').outerWidth();
			thumbsInfoItems = $('#galeriaInfoText li').length;
			$thumbsInfo = thumbsInfoWidth * thumbsInfoItems;
			listWidth = $('#galleryUl li').outerWidth();
			galleryItems = $('#galleryUl li').length;
			galleryWidth = listWidth * galleryItems;
			thumbsWidth = $('#thumbs li').outerWidth();
			thumbsItems = $('#thumbs li').length;
			$thumbs = thumbsWidth * thumbsItems;


	    	$('#galeriaInfoText ul').css('width', $thumbsInfo);
			$('#galleryUl').css('width', galleryWidth);
			$('#thumbs ul').css('width', $thumbs);


            $(this).trigger('resizeEnd');
        }, 500);    	
    });

	$('#leftController').click(function (){
		console.log(currPagination);
		if(currPagination === 1){
			$('#thumbs ul').animate({marginLeft: 5}, 600);
			return false;
		}else{
			currPagination--;
			currentPos = (currPagination * 532) - 9;
			$('#thumbs ul').animate({marginLeft: "-" + currentPos}, 600);
		}
		
	});

	$('#rightController').click(function () {
		console.log(currPagination);
		if(currPagination == pagination){
			return false;
		}else{
			currentPos = (currPagination * 532) - 9;
			$('#thumbs ul').animate({marginLeft: "-" + currentPos}, 600);

		}
		currPagination++;
		
	});
});