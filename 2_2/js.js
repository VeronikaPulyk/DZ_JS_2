document.getElementById("ok").onclick=f1;
function f1 () {
	var a = document.getElementById("one").value;
	var b = document.getElementById("two").value;
	a = parseInt(a);
	b = parseInt(b);
	if (a==b){
		alert ('равны');
	}
	else if (a>b){
		alert(a + " больше " + b);
	}
	else if (a<b){
		alert(b + " больше " + a);
	}
	
}