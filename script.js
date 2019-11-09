function resolverDois(){
	let x0 = Number(document.getElementById("x0").value);
	let x1 = Number(document.getElementById("x1").value);
	let fx0 = Number(document.getElementById("fx0").value);
	let fx1 = Number(document.getElementById("fx1").value);
	let ponto = Number(document.getElementById("ponto").value);
	
	let a = ((ponto - x1) / (x0 - x1)); 
	let b = ((ponto - x0) / (x1 - x0));
	
	let c = (a*fx0) + (b*fx1);

	return c;
}

function resolveTres(){
	let x0 = Number(document.getElementById("x0").value);
	let x1 = Number(document.getElementById("x1").value);
	let x2 = Number(document.getElementById("x2").value);
	let fx0 = Number(document.getElementById("fx0").value);
	let fx1 = Number(document.getElementById("fx1").value);
	let fx2 = Number(document.getElementById("fx1").value);
	let ponto = Number(document.getElementById("ponto").value);

	let a = ((ponto - x1) / (x0 - x1)) * ((ponto - x2) / (x0 - x2)); 
	let b =  ((ponto - x0) / (x1 - x0)) * ((ponto - x2 / (x1 - x2)));
	let c = ((ponto - x0) / (x2 - x0)) * ((ponto - x1 / (x2 - x1)));

	let d = (a*fx0) + (b*fx1) + (c*fx2);
}