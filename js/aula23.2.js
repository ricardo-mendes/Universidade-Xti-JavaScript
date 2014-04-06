
var paises = new Array();

paises[0] = "Brasil";
paises[1] = "Rússia";
paises[2] = "índia";
paises[3] = "China";

alert(paises);

alert(paises.reverse());//Essa função inverte a ordem dos elementos do nosso Array

alert(paises.sort());//Esse método ordena em ordem alfabética

alert(paises.join(";"));//Esse método é utilizado para alterar aquele separador padrão da linguagem ( virgula) 

alert(paises.join(" ")); // Dá um espaço

alert(paises.concat("EUA", "Argentina"));//Concatena no nosso Array outros elementos de Array

alert(paises); // Os elementos do concat não vão continuar no Array


// ********** ____________________________ ******************


alert("ARRAY DE FRUTAS");
alert("UTILIZANDO SUB ARRAY - FUNÇÃO SLICE");

var frutas = ["cupuaçú", "Banana", "graviola", "açai", "Laranja"];

// A função slice retorna um subArray do nosso Array
alert(frutas.slice(3)); // retorna os elementos a partir do indice 3 - retorna açai e Laranja

alert(frutas.slice(2,4));// subconjunto de 2 a 4 - a partit do indice 2 eu quero 2 posições  - retorna graviola e Açai


// ********** ____________________________ ******************

//O método splice() é utilizado tanto para remover elementos do nosso Array como incluir elementos naquele lugar onde eu fiz a remoção

alert("Removeu " + frutas.splice(2,2,"abacate", "açerola", "angu", "cupuaçú")); // A partir do indice 2  eu vou remover 2 elementos / e eu quero adionar nesse lugar outros elementos   - retorna os que forma removidos

alert(frutas);


// ********** ____________________________ ******************

// FILAS  - fifo


alert("FILA");
var pessoas = ["Ricardo" , "Marcia", "Kamila", "Junior"];

alert(pessoas.push("Mendes"
)); //push()Adiciona elements no final do nosso Array , no final da fila  - retorna o numero de elements da fila
alert(pessoas);

alert(pessoas.shift()); //vai remover a primeira pessoa da fila - retorna o nome da pessoa que foi removida
alert(pessoas);

alert(pessoas.pop());//O método pop() remove o último elemento da fila - retorna o nome do elemento
alert(pessoas);

alert(pessoas.unshift("Furão da Fila"));// Esse método adiciona o elemento no inicio da fila 
alert(pessoas);  
 

