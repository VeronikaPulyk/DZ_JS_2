document.getElementById('btn').oncklick = f1;
	function f1(){
		var a = document.getElementById('text').value;
		a = parseInt(a);
		var c;
		if (a>17) {
			c=2017-a;
			document.getElementById('out').innerHTML=c;
	}
		if (a<17) {
			c=17-a;
			document.getElementById('out').innerHTML=c;
	}
		p.innerHTML = c;
	}



	
