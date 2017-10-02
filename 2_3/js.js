document.getElementById("ok").onclick=f3;
function f3 (){
	var a = document.getElementById("number").value;
	if (a>=1 && a<=20){
		alert ('1 подьезд')
	}
	else if (a>=21 && a<=64){
		alert ('2 подьезд')
	}
	else if (a>=65 && a<=80){
		alert ('3 подьезд')
	}
	else {
		alert('Error, this value is not correct');
	}
	
}