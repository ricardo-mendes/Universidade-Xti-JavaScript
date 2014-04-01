
//Estrutura de Controle


// A palavra chave var declara variáveis

var a , b , c;    // elas tem valor undefined 
var a=1, b=2, c=3;



// A declaração   function é utilizada para criar uma funcao

function dividir(x,y){
     alert(x/y);
}
dividir(6,2);

// return - utilizado dentro da função

function dividir02(x,y){
     var a = x/y
	 return a;
}

alert("Funcao com retorno : "+(dividir02(6,2)))