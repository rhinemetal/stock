
	
	//绘制分时线* 长392 高189 高距1.63
	//var d = [[32,114],[105,114],[105,189+topPadding],[155,189+topPadding],[leftPadding+392/2,topPadding+189/2]];
	//var d = [[leftPadding+8.77,200],[leftPadding+19.77,100]];
	ajax("http://webstock.quote.hermes.hexun.com/a/minute?code="+stockCode+"&start=20161108093000&number=240",function(data){
		//alert(JSON.stringify(data.Data[1]));
			grid.beginPath();
			grid.lineWidth = 1;
			grid.strokeStyle="#1B6FA4";
			var onePoint = (data.Data[3]-data.Data[1])/data.Data[1]*94.5*100;
			grid.moveTo(32,0);
			//alert(onePoint);
			grid.lineTo(5+32,100);
			//alert(94.5-(((data.Data[3]-data.Data[1])/data.Data[1]*94.5*100)-94.5));

			//for (i = 1; i < data.Data[0].length; i++){
				//grid.lineTo(i*1.63+32,data.Data[0][i][1]);
			//}
			grid.stroke();
	});

