function cesar ()
{
	var espacio = Number(document.getElementById("espacio").value);
	var letras = String(document.getElementById("letras").value);
	var palabra = letras.toLowerCase();
	var dividir = palabra.split("");
	var visualizar = "";
	for (var i = 0; i< dividir.length; i++)
	{
		var ascii = dividir[i].charCodeAt();
		var numero = ascii+espacio;
		if(numero <= 97 || numero >= 122)
		{
			numero = 96+espacio;
		}
		var asciilet = String.fromCharCode(numero);
		var visualizar=visualizar+asciilet;
	};
	alert (visualizar);
}