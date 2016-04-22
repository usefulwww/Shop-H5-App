mui.init();
//获得slider插件对象
(function($,doc){
	//设置轮播图自动轮播
	var gallery = mui('.mui-slider');
	gallery.slider({
	  interval:3000//自动轮播周期，若为0则不自动播放，默认为0；
	});
}(mui,document));
