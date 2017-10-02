// 1
var p = document.getElementById('out');
for (var i = 0; i < 101; i=i+2) {
	p.innerHTML += i + " ";
}

// 2
var p = document.getElementById('out2');
for (var i = 200; i >= 0; i=i-1) {
	p.innerHTML += i + " ";
}

// 3
var p = document.getElementById('out3');
for (var i = 0, d = 0; i <= 100; i++) {
	d = d + i;
	p.innerHTML += d + " ";
}


// 4
document.getElementById("Ok").onclick=f4;
	function f4 (){
		var p = document.getElementById('out4')
		var a = document.getElementById('number').value;
		var b = document.getElementById('degree').value;
		for (var i = 0; i < b; i = i + 1){
		}
		p.innerHTML = Math.pow(a,b);
}

// 5
var p = document.getElementById('out5');
for (var i = 1; i <= 9; i++) {
	p.innerHTML += 7 + "*" + i + "=" + (7*i) + "<br>";
}

// 6
var p = document.getElementById('out6');
var t = 1;
for (var i = 1; i <= 50; i++) {
	t = t * i;
	p.innerHTML = t;
}

// 7
var p = document.getElementById('out7');
for (var i = 1000; i < 2000; i++){
	p.innerHTML += '&#' + i + ';';  
}
