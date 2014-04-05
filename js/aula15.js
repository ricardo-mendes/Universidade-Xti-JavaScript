//Estrutura de Repetição


for (var i=0; i <3; i++) {
    alert(i);
}

var texto = "";

for (i=0; i <3; i++) {
    texto += i + ",";
}
alert(texto);

alert("Numeros Pares");

var texto = "";
for (i=0; i<=6; i++) {
    if ((i % 2) == 0){
	   if (i == 6){
           texto += i;
	   } else {
	        texto += i + ",";
	   }
	}
}
alert(texto);

// break - palavra chave  para a estrutura condicional ou de repetição

var text = "";
alert("Usando o break");
for (i=0; i<=6; i++) {
    if ((i % 2) == 0){
	   if (i == 6){
           texto += i;
           break;
	   }
	   texto += i + ",";
	}
}
alert(texto);
