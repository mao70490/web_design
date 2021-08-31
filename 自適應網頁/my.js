$(function(){
    $(".header h3").on("touchend click",show);
	$(".header .close").on("touchend click",hide);

	
	function show(e){
		$(".header ul").show();
		e.preventDefault();
	}
	
	function hide(e){
		$(".header ul").hide();
		e.preventDefault();
	}
	
	
	$(window).on("resize",clearALL);
	
	function clearALL(){
		if($(window).innerWidth()>=768){
			$(".header ul").css("display","block");
		}else{$(".header ul").css("display","none");}
	}

})