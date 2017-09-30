document.getElementById("ok").onclick=f5;
function f5 () {
	var a = document.getElementById("one").value;
	var b = document.getElementById("two").value;
	var c = document.getElementById("three").value;

	a = parseInt(a);
	b = parseInt(b);
	c = parseInt(c);

	if (a==b && a==c && b==c){
		alert ('равны');
	}
	else if (a>b && a>c){
		alert(a);
	}
	else if (b>a && b>c){
		alert(b);
	}
	else if (c>a && c>b){
		alert(c);
	}
	
}