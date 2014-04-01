
//Number 

var teste = 120.35;
alert(typeof(teste));

var n = new Number(130.70);

alert(typeof(n));  //resultado -  object

var n2 = new Number("140.80"); //O metodo contrutor vai converter esse valor em string para um valor do tipo primitivo

alert(n2);

//metodo estatico, não opera sobre os dados dessa instância

//Ex : Quando fazemos uma chamada ao metodo valueOf ele está operando em cima do valor primitivo que está dentro dessa instância do objeto - ("140.80") 

//Essas funções estáticas são independentes de uma instancia, eu posso chamar uma função dessas direto do objeto number, direto da classe do objeto

//Propriedades estáticas qie temos no objeto number

var n3 = new Number("150");
alert(Number.MAX_VALUE);
alert(Number.MIN_VALUE);
alert(Number.NaN); // retorna a representação de um objeto que não é um número
alert(Number.NEGATIVE_INFINITY);
alert(Number.POSITIVE_INFINITY);


alert("Aproximações");
alert("toFixed");

var n4 = new Number("120.35123");

alert(n4.toFixed()); // se for omitido, o numero retomado não vai possuir casas decimais,retorna um numero com a quantidade de digitos ai dentro
alert(n4.toFixed(2));

alert("toPrecision");

alert(n4.toPrecision()); // atua em cima das casas decimais , se ele for omitido vai ser igual ao numero inicial


alert(n4.toPrecision(1)); // vai retornar um numero em uma representação cientifica de forma que caiba dentro dessa precisão
//Nesse caso se o parâmetro for menor que 3 ele tem que fazer conversão cientifica para caber o numero inteiro dentro de 2 digitos de precisão 
//ai ele precisa usar a notação cientifica

alert(n4.toExponential()); // resultado : vai retornar a notação cientifica desse numero com a precisão necessária para representar esse numero nessa notação cientifica
// Converte um numero para notação cientifica , // vai definir o numero de casas decimais do numero
// se a gente omitir o numero será a quantidade necessária para reperesentar o numero passado

//se a gente colocar um parametro , um numero de precisão ele vem trabalhando ali dentro com esse numero de precisão , convertendo o numero para um formato de notação cientifica