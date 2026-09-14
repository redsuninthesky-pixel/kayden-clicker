a = 0;
i = 1;
function add(){
	a+=i;
	loop();
}

function loop(){
	document.getElementById("count").textContent = a;
}

