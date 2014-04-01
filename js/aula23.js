
//OBJETO ARRAY

// Array = coleção de dados indexados

//Arrays indexados são Arrays onde quando nós adicionamos os elementos cada um deles tem um indice , tem uma poisão dentro do array - começa no zero
//Todos os elementos de um Array eles estão armazenados com base num conjunto de chave e valor
//Ex: Brasil está na chave zero com valor Brasil

var paises = new Array("Brasil", "Rússia", "Índia" , "China", "Brasil");// ou var paises = new Array(); pode ser com numeros, objetos , booleanos , outros arrays

alert(paises);
alert(paises[0]);

paises[0] = "BRAZIL";
alert(paises[0]);

alert(paises.length);//Propriedade length - para mostrar a quantidade de elementos no array

paises[0] = "Brasil"; // Voltei ao normal 

alert("UTILIZANDO FOR");


for(var i = 0; i < paises.length; i++){
   alert(paises[i]);
}

alert("FIM DO ARRAY");

alert(paises.indexOf("Índia")); //Para identificar a posição de um elemento / obs : se colocar i minusculo ou maisculo sem acento escreve -1
alert(paises.lastIndexOf("Brasil")); //Essa função informa a ultima ocorrencia de um determinado elemento , diferente do indexOf que traz a primeira referência 


// **** Sintaxe literal *****
//Em String : var n = "ssss";  // Permite criar uma String primitiva

var paises02 = ["Brasil", "Rússia" ,"Índia", "China"]; // Ele cria um tipo primitivo de dados  , mas com o Array isso não acontece, eu estou criando um objeto do tipo Array , é por isso que só temos 3 tipos de dados primitivos : String , Boolean , Number

//Todos os objetos são Arrays, mas nós não tratamos esses objetos como Arrays 
// **** Objeto Array é um repositório de outros objetos, é um lugar onde podemos armazenar uma coleção de objetos de forma indexada
//Uma String é um Array

var s = "Açai";

alert("String é um Array : " + s[1]);

// *** Sintaxe Tradicional ***
// var n = new String("ssss"); // Para criar um objeto String
