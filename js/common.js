// JavaScript Document
$(function(){
     $('img.orderBtn ').mouseover(function(){
          $(this).attr('src',$(this).attr('src').replace('_off','_on'));
     }).mouseout(function(){
          $(this).attr('src',$(this).attr('src').replace('_on','_off'));
     });

});

$(function(){
   // #で始まるアンカーをクリックした場合に処理
   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;
      // スムーススクロール
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});
/**
 * auto height
 */

(function($) {

	$.fn.extend({
		autoHeight: function(options) {
			var config = {
					minHeight: "auto",
					footerHeight: 0,
					headerHeight: 0
				},
				self = $(this),
				selfHeight = self.height();
			
			$.extend(config, options);
			
			var min = parseInt(config.minHeight, 10);
			config.minHeight =  min > selfHeight ? min : selfHeight;

			$(window).resize(function() {
				var windowHeight = $(window).height(),
					h = windowHeight - (config.headerHeight + config.footerHeight +193);

				if (h > config.minHeight) {
					// 新たな高さを設定する。
					self.height(h);
					$("body").css("overflow", "hidden");
				} else {
					$("body").css("overflow", "auto");
				}

			}).resize();
		
			return this;
		}

	});

})(jQuery);





$(function(){
  $("#toggle").click(function(){
    $("#gnav").slideToggle();
    return false;
  });
  $(window).on('load resize', function(){
    var win = $(window).width();
    var p = 550;
    if(win > p){
      $("#gnav").show();
    } else {
      $("#gnav").hide();
    }
  });
});

