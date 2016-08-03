(function($){
	$.fn.extend({
		//插件名称
		paddingChange:function(){

			//默认参数
			var defaults = {
				animatePadding:20,
				hoverColor:'#Black'
			}

			var options  =  $.extend(defaults,options);

			return this.each(function(){
				var opt = options;
				
				//将元素集合赋给变量，本例中是ul对象
				var ulEle = $(this);
				var items  =  $('li a',ulEle);

				//添加hover()事件到a
				items.hover(function(){
					$(this).css('color',opt.hoverColor);
					$(this).animate({paddingLeft:opt.animatePadding},{queue:false,duration:300})
				},function(){
					$(this).css('color',"");
					$(this).animate({paddingLeft:"0"},{queue:true,duration:300});
				})
			})
		}
	});
})(jQuery)