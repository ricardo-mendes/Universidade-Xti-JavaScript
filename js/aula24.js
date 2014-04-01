
//Arrays Multidimensionais de forma Tradicional

var pessoasTesteFormaTradicional = new Array();

pessoasTesteFormaTradicional[0] = new Array("ricardo", "M");

alert(pessoasTesteFormaTradicional[0][1]);

//Arrays Multidimensionais de forma literal

var pessoas = 
[
	["ricardo", "M"] , 
	["Mendes" , "M"] 
];

alert(pessoas[1][0]);

// *** Arrays Associativos   ***

//Construido com chaves
// São aqueles nos quais cada um dos dados é referencidado não pelo indice numérico , mas por um nome
// A cada dado do Array a gente atribui explicitamente um nome 	String de livre escolha para o lugar do nome implicito

var cliente = {nome : "Marcia", cidade : "Brasilia"}; // com chaves , o de indice é com colchete

alert(cliente.nome);
alert(cliente["nome"]); // vai procurar pelo nome da informação que eu tenho

//***  Funções ****
//******

var frutas = ["cupuaçú", "Banana", 123 , "graviola", "açai", "Laranja"];

//Every
//Utilizada para identificar se todos os elementos do Array são de um determinado tipo

function todos(elem, ind , obj){
   //return (typeof elem == "number");
   return (elem.indexOf("an") > 0); // As palavras que tenha "an" dentro delas , poderia também ter um Array com numeros, e eu quisesse retorna os numeros maiores que um determinado numero
}

alert(frutas.every(todos));

//Some
//Verifica se pelo menos um elemento satisfaz a condição

alert(frutas.some(todos));


//filter
//Filtra o nosso Array com base em uma função e retorna o Array resultante desse filtro

//function todosEvery(elem, ind, obj){
    
//}

alert(frutas.filter(todos));

//Map
// Utilizado para alterar todos os elementos do nosso Array

function todosMap(elem, ind, obj){
    return (elem == elem.toUpperCase());
	// ou  return (elem += "XTI");
	//ou se fosse Array de numeros  return(elem = elem * 12);
}

alert(frutas.map(todosMap));
