//TRATAMENTO DE EXCEÇÕES

//SCRIPT É UM ROTEIRO , UMA INSTRUÇÃO

//PARA IDENTIFICAR E TRATAR ERROS EM UM SCRIPT

/* O objeto Error - tras informações sobre um erro que acabou de ocorrer 

Ele tem 2 propriedades e um método

Propriedades :

Message - traz os detalhes do erro
ex: utilizando uma referencia a uma variavel indefinida, ele vai dizer isso

Name - Traz o tipo de erro

Método

toString() - Traz o tipo de erro mais a mensagem separada por um sinal de 2 pontos

Tipos de erro da propriedade name :

* EvalError  - Erro usando o método eval()
//Esse método permite executar uma linha javaScript no formato de String
//Ex:  ("alert('oi')") -  Eu poderia executar uma linha javascript pra esse método executar esse script que está dentro de uma String


* RangeError -  Numero extrapola limites

* ReferenceError - Referência a valor indefinido
// ex: uma variavel que não foi definida

* SintaxeError - Erro de sintaxe da linguagem , quando se escreve juma instrução de maneira errada

* TypeError - Operando diferente do esperado

* URIError   -   uso errado de funções URI - 

*TypeError


*/

/*var x = a;

var b = x + a;

alert(b); //se tiver erro ele  parou de excecutar o script
*/


var x = prompt("Informe numero maior que 10");  // prompt é do objeto window

try{

if(x < 10){
  throw "Numero menor que 10"; // throw  - vai lançar uma excessão , um objeto Error ou qualquer outro elemento inclusive uma String  
 } 
  alert(x);
}catch(er){   //vai recuperar a excessão do throw
    alert(er);
}

alert("segunda parte");

try{

   var y = a;
   var b = y + 10;
   alert(b);
   
}catch(e){   //e - nome que ele vai utilizar para abrituir um erro a esse nome
   //alert(e.name + " - " + e.message);
   alert(e.toString());
}// finally{
//}

alert("Terceira parte");

var Carro = {
    marca : "nissan", 
    modelo : "350z",
    potencia : {
         cavalos : "350",
		 velocidade : "320km/h"
	}
};

//alert(Carro.potencia.cavalos);
//A palavra chave "WITH" cria um escopo diferente para carro , //potência

with (Carro.potencia) {
    alert(cavalos);
    alert(velocidade);
}





