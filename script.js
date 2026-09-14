a = 0;
i = 1;
function add(){
	a+=i;
}

function loop(){
	while true{
		const display = document.getElementById("count");
		display.textContent(a);
	}
}

loop()
