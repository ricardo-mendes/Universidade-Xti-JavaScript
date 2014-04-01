

//Boolean   //Encapsula o tipo primitivo boolean 

var b = true;

alert(b);

alert(typeof(b));//avalia o tipo de dado - boolean



alert("Mexendo com Objeto");



var bb = new Boolean(true);
alert(typeof(bb));   //resultado : object
alert(bb instanceof Boolean);    //Para ver se b é uma instancia do tipo Boolean , o "bb" é , o "b" não é



var b02 = new Boolean();  // vai ser valor falso ou colocar o false também vai ser fácil
var b03 = new Boolean(1);  // 1 é verdadeiro e 0 é falso
var b04 = new Boolean(""); // se for vazio é false , se colocar qualquer coisa até mesmo "false" ele vai criar um booleano verdadeiro



/*
Zero, null, NaN e a String vazia são inerentemente false; todo o resto é inerentemente true
Simon Willison, na palestra "A(Re) - Introduction to JavaScript" na conferência 2006 Etech da O'Reilly.
*/



var b05 = new Boolean(null); // vai ser falso - conforme o texto acima

alert("Linha 37 , que estava dando erro mas agora está bom");

var b6 = new Boolean(0);
alert(b6);

//Todos os outros objetos herdam o metodo toString e valueOf

alert(b6.valueOf());  // Retorna o valor do tipo primitivo , nesse caso o valor primitivo de boolean

alert(typeof(b6.valueOf()));  // resultado : primitivo  - boolean

alert(typeof(b6.toString()));  //resultado : string 

alert(b6.toString()); //resultado : string representando o valor primitivo , é um tipo String e não o tipo primitivo que seria o valueOf

/*valueOf  - retorna o tipo primivo   */
/*toString -  retorna a representação em string do valor do booleano  */

 