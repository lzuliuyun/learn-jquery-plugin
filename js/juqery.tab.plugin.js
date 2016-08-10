(function ($,window,document,undefined) 
{
	$.fn.mytab = function (options) {
		var defaults = {
				event:'click',
				index:0
			};

		var self = this;
		var opts  = $.extend({},defaults,options);
		var $uls = this;
		var $lis = $('li',$uls);

		$lis[opts.event](function () {
			//li控制
			$lis.removeClass('li-select');
			$(this).addClass('li-select');

			//关联的div控制				
			$lis.each(function () {
				var $relDiv = $($('a',this).attr('href'));
				$relDiv.removeClass('div-select');
				$relDiv.addClass('div-none');
			})

			var $relDiv = $($('a',this).attr('href'));
			$relDiv.removeClass('div-none');
			$relDiv.addClass('div-select');
		})

		var methods  = function () {
			this.init = function (ele,opts) {
				var index = opts['index'];
				$('li',ele).eq(index).trigger(opts['event']);
			}
		}

		var method  = new methods();
		method.init(self,opts);

		return this;
		
	}
})(jQuery,window,document)