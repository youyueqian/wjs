/*
 * 自己的JS脚步
 * @Author: iceStone
 * @Date:   2015-12-12 10:59:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2015-12-12 11:01:38
 */
$(function() {
	$(window).on("resize",function(){
		var width = $(window).width();
		var isSmall = width>750?false:true;
		$("#banner .carousel-inner .item").each(function(i,ele){
			if(!isSmall){
				$(ele).html("");
				$(ele).css("background-image",$(ele).data("img-lg"));
			}else{
				$(ele).html("<img src='"+$(ele).data("img-xs")+"'>");
			}
		});
	}).trigger("resize");

	$("#news .nav-pills a").on("click",function(){
		$(".news-title").text($(this).data("title"));
	});

	var $tabs = $("#products .nav-tabs");
	var ul_width = 20;
	$tabs.children().each(function(i,ele){
		ul_width+=ele.clientWidth;
	});
	if(ul_width>$(window).width()){
		$tabs.css("width",ul_width);
		$("#products .tab-wapper").css("overflow-x","scroll");
	}

	var startX,endX;
	var distance=50;
	$("#wjs-carousel")
		.on("touchstart",function(e){
			startX = e.originalEvent.changedTouches[0].clientX;
		})
		.on("touchmove",function(e){
			endX = e.originalEvent.changedTouches[0].clientX;
		})
		.on("touchend",function(){
			if(Math.abs(startX-endX)>distance){
				$(this).carousel(startX>endX?"next":"prev");
			}
		});
});