mui.init();

mui.plusReady(function(){
	var parentWv=plus.webview.currentWebview();
	//创建4个webview
	var pagelist=[
	  {
	   	url:'../message/message.html',
	   	id:'message'
	  },
	  {
	   	url:'../address-book/address-book.html',
	   	id:'address-book'
	  },
	  {
	   	url:'../discover/discover.html',
	   	id:'discover'
	   },
	  {
	   	url:'../mine/mine.html',
	   	id:'mine'
	  }
	];
	
	for(var i=0,l=pagelist.length;i<l;i++){
		var url = pagelist[i].url;
		var id=pagelist[i].id;
		console.info(url+"----------"+id);
		//开始创建webview
		if (plus.webview.getWebviewById(id)) {
			//如果该Wv
			continue;
		}
		
		var newWv = plus.webview.create(url,id,{
			bottom:'50px',
			top:'0px',
			popGesture:'none'
		});
       i===0?newWv.show():newWv.hide();
       parentWv.append(newWv);
	}
	
	var showWv='message';
	mui('.mui-bar').on('tap','.mui-tab-item',function(e){
//		mui.alert('我被点了');

        //如果当前显示的子页面未即将点击的是同一个，什么都不做
        if (showWv === this.dataset.id) {
        	   return;
        }

        plus.webview.getWebviewById(showWv).hide();
        console.info(this.dataset.id);
        plus.webview.getWebviewById(this.dataset.id).show();

        showWv = this.dataset.id;
	});
});