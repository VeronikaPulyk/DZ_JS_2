document.getElementById("ok").onclick=f4;
	function f4 (){
		var a = document.getElementById("login").value;
		var b = document.getElementById("password").value;

		if (a=='ivan' && b=='333'){
			alert('Добро пожаловать')
		}
	
		else if (a=='ssss' && b=='666'){
			alert('Добро пожаловать')
		}
		else if (a=='gibs' && b=='0000'){
			alert('Добро пожаловать')
		}
		else {
			alert('Ошибка входа')
		}
}