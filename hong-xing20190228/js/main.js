$(function() {
	$(".serverstop .row").first().addClass('active');
	$(".serverstop .row").hover(function(){
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});
	$('#close').click(function(){
		$('.left_cotact').fadeOut();
	});

	$(".button").on("click", function () {
        if($(".header  .nav_right").css("display")=="none"){
            $(".header  .nav_right").show();
        }else{
            $(".header  .nav_right").hide();
        }
    });
})