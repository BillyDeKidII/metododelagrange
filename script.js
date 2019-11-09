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

	return d;
}

function resolveQuatro(){
	let x0 = Number(document.getElementById("x0").value);
	let x1 = Number(document.getElementById("x1").value);
	let x2 = Number(document.getElementById("x2").value);
	let x3 = Number(document.getElementById("x3").value);	
	let fx0 = Number(document.getElementById("fx0").value);
	let fx1 = Number(document.getElementById("fx1").value);
	let fx2 = Number(document.getElementById("fx1").value);
	let fx3 = Number(document.getElementById("fx3").value);	
	let ponto = Number(document.getElementById("ponto").value);

	let a = ((ponto - x1) / (x0 - x1)) * ((ponto - x2) / (x0 - x2)) * ((ponto - x3 / (x0 - x3)));
	let b = ((ponto - x0) / (x1 - x0)) * ((ponto - x2) / (x1 - x2)) * ((ponto - x3 / (x1 - x3)));
	let c = ((ponto - x0) / (x2 - x0)) * ((ponto - x1) / (x2 - x1)) * ((ponto - x3 / (x2 - x3)));
	let d = ((ponto - x0) / (x3 - x0)) * ((ponto - x1) / (x3 - x1)) * ((ponto - x2 / (x3 - x2)));

	let e = (a*fx0) + (b*fx1) + (c*fx2) + (d*fx3);

	return e;
}

function resolveCinco(){
	let x0 = Number(document.getElementById("x0").value);
	let x1 = Number(document.getElementById("x1").value);
	let x2 = Number(document.getElementById("x2").value);
	let x3 = Number(document.getElementById("x3").value);	
	let x4 = Number(document.getElementById("x4").value);
	let fx0 = Number(document.getElementById("fx0").value);
	let fx1 = Number(document.getElementById("fx1").value);
	let fx2 = Number(document.getElementById("fx1").value);
	let fx3 = Number(document.getElementById("fx3").value);
	let fx4 = Number(document.getElementById("fx4").value);
	let ponto = Number(document.getElementById("ponto").value);

	let a = ((x - x1) / (x0 - x1)) * ((x - x2) / (x0 - x2)) * ((x - x3) / (x0 - x3)) * ((x - x4) / (x0 - x4));
	let b =  ((x - x0) / (x1 - x0)) * ((x - x2) / (x1 - x2)) * ((x - x3) / (x1 - x3)) * ((x - x4) / (x1 - x4));
	let c = ((x - x1) / (x2 - x1)) * ((x - x0) / (x2 - x0)) * ((x - x3) / (x2 - x3)) * ((x - x4) / (x2 - x4));
	let d =   ((x - x1) / (x3 - x1)) * ((x - x2) / (x3 - x2)) * ((x - x0) / (x3 - x0)) * ((x - x4) / (x3 - x4));
	let e =   ((x - x1) / (x4 - x1)) * ((x - x2) / (x4 - x2)) * ((x - x3) / (x4 - x3)) * ((x - x0) / (x4 - x0));
	
	let f = (a*fx0) + (b*fx1) + (c*fx2) + (d*fx3) + (e*fx4);
	
	return f;

}