/////////////////////////////////////////////////////

window.onload = function()
{
	document.getElementById("calcular").onclick = function(event)
	{
		event.preventDefault();

		calcular();
	};
};
////////////////////////////////////////////////////
 
 function calcular()
{
	var numero1 = document.getElementById("numero1");
	var numero2 = document.getElementById("numero2");
	var operaciones = document.getElementById("operaciones");

	// TODO: Validar información de entrada //

	var resultado = NaN;

	switch(operaciones.value)
	{
		case "1":
			resultado = parseFloat(numero1.value) + 
			            parseFloat(numero2.value);
		break;

		case "2":
			resultado = parseFloat(numero1.value) - 
			            parseFloat(numero2.value);
		break;

		case "3":
			resultado = parseFloat(numero1.value) * 
			            parseFloat(numero2.value);
		break;

		case "4":
			resultado = parseFloat(numero1.value) / 
			            parseFloat(numero2.value);
		break;
          
		default:
			alert("operadoriciones " + operadoraciones.value + " no se encuentra definido");
		break;
     }

	if(!isNaN(resultado))
		document.getElementById("resultado").value = resultado;
}
////////////////////////////////////////////////////