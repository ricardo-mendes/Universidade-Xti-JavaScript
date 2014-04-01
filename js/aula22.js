
var x = new String("texto dentro de aspas");//aspas simples ou duplas
alert(x);

document.write(x); //esse metodo imprime uma variavel dentro do documento HTML, não se deve utilizar 
//Esse metodo traz para o usuario uma serie de restrições de acessibilidade, pessoas que utilizam aparelhos de leitura do documento html,eles não vão conseguir acessar essas informações

document.writeln("<br />" + x + "<br />" );  //caracter de escape \n
document.writeln(x + "<br />");

var s = new String("Texto segundo , texto");

alert(s.length); // retornar o tamanho da String

document.writeln(s.charAt(2) + "<br />");
document.write(s.charAt(s.length - 1)+ "<br />");  //retorna um caracter numa posição especifica ( o indice da string começa de zero e vai até a ultima posição da string - 1 


document.write(s.charCodeAt(s.length - 1)+ "<br />");  //retorna o elemento no padrão unicode

document.write(s.concat(" JavaScript")+ "<br />");//concatena 2 Strings

document.write(String.fromCharCode(111 , 123, 234)+ "<br />");//converte um valor unicode para um valor do tipo String , esse método é estático eu tenho que acessar ele diretamente da minha classe 


document.write(s.indexOf("texto")+ "<br />");// vai retornar a posição do primeiro elemento , da primeira ocorrencia de uma determinada String , onde começa a palavra - texto

document.write(s.lastIndexOf("texto") + "<br />");  // a ultima referência - nesse caso a segunda referência

document.write("segunda parte" + "<br /n>");

var re = /x/;    //ou new RegExp(); 
//expressão regular aqui é onde que eu vou encontrar a letra x

var re02 = /[a-e]/; // todas as letras de até e em letras minusculas

document.write(s.match(re) + "<br />"); //ele vai trazer todas as letras que atendem esse requisito
//Uma expressão regular é um critério de pesquisa que a gente coloca para ser aplicado a uma String, para fazer uma validação

document.write(s.match(re02) + "<br />");

document.write(s.replace("texto", "txt" ) + "<br />"); // altera um texto na minha String
//onde encontrar texto vou alterar para txt , e fez a atualização apenas na primeira ocorrencia, mas depois não continua da forma que eu alterei



/*funções para recortar strings*/

document.write("<br />" + "funções para recortar strings" + "<br />");

document.write("<br />" + s  + "<br />");

document.write(s.substring(5,8) + "<br />"); // Essa função vai recortar a minha substring com base em 2 parametros , traz para gente a string que começa no indice 5 e vai ate o indice 8
//Extrai os caracteres entre 2 indices especificados

document.write(s.substr(5,8) + "<br />");// também recortou uma substring , 5 - retoma o indice inicial e mais  8 caracters dali para frente - o comprimento da string

document.write(s.slice(5,8) + "<br />"); //Se o indice final da nossa substring for menor que o indice final , os valores não vão ser invertidos, diferente da substring

// Ex : document.write(s.slice(8,5) + "<br />"); não vai aparecer nada

document.write("<br />" + "Função split"  + "<br />");

document.write(s.split(",")[0] + "<br />");//Eu poderia querer recortar as minhas strings com base em um caracter , ex: eu quero recortar todas as strings que estejam entre virgulas e recupera a primeira posição do array

//dividi em duas partes
document.write(s.split(",")[1] + "<br />");

document.write(s.toUpperCase() + "<br />"); // Deixa o texto em letra maiuscula

document.write(s.toLowerCase() + "<br />");//Deixa o texto em letra minuscula

document.write(s.toLowerCase() + "<br />");

/*   */

/*funções para adicionar marcações html nas 
nossas strings*/

// Tem que fazer isso com o css por causa da acessibilidade

//Estes não são os métodos padrão do javaScript , são métodos do browser, e pode não funcionar como esperado em todos os navegadores.

document.write("<br />" + "Estes não são os métodos padrão, e pode não funcionar como esperado em todos os navegadores." + "<br />");

document.write(s.big() + "<br />");
document.write(s.blink() + "<br />");
document.write(s.sup() + "<br />");
document.write(s.strike() + "<br />");
document.write(s.bold() + "<br />");
document.write(s.italics() + "<br />");
document.write(s.small() + "<br />");
document.write(s.link("http://www.xti.com.br") + "<br />");
document.write(s.fontcolor("blue") + "<br />");

