document.getElementById('btn').onclick = f1;
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
// или так
// function ageCounter () {
// var a = parseInt(document.getElementById('text').value);
// var targetElement = document.getElementById('out');

// if (a > 17) {
// targetElement.innerHTML = 2017 - a;
// } else if (a targetElement.innerHTML = 17 - a;
// } else {
// alert('Error, this value is not correct');
// }
// }

// document.getElementById('btn').onclick = ageCounter;

	
