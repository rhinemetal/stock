var tool = {
	jsonp: function(url,callback){
		$.ajax({
			type:"GET",
			dataType:"jsonp",
			url:url,
			async:false,
			success:callback
		});
	},

	toDecimal2: function(x){
		var f = parseFloat(x);
		if (isNaN(f)){
			return false;
		}  
		var f = Math.round(x*100)/100;
		var s = f.toString();
		var rs = s.indexOf('.'); 
		if (rs < 0){
			rs = s.length;
			s += '.';
		}
		while (s.length <= rs + 2){
			s += '0';  
		}
		return s;
	}

}