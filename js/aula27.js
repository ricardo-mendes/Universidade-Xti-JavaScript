//Objeto RegExp 
// RegExp - Expressões Regulares

//REGULAR EXPRESSION 
  //(REGEXP , REGEX, RE)
  
//Expressões Regulares 
//São formas de definir um padrão para Busca e Substituição de conteúdos
//São independentes de linguagem , usamos em Java , C++ , ASP

/************* INICIO DOS CODIGOS  ********/

/*
var regex = new RegExp("JavaScript"); //Dentro eu crio a expressão regular , que é composta de um padrão  
  
var string = "JavaScript ";  //qual seria o padrão para encontrar a palavra JavaScript em uma String  , exatamente essa palavra

alert(regex.test(string)); // retorna um booleano se encontrar o padrão verdadeiro senão falso , passa o objeto ou String que queremos avaliar
*/
//outro parâmetro que podemos passar são os modificadores , que falam para o padrão se comportarem de uma maneira diferente

/*** SINTAXTE LITERAL  ***/
//var regex = /JavaScript/;

//var regex = /javascript/i; // pede para expressão regular ignorar as letras maisculas e minusculas

/*
var regex = new RegExp("JavaScript", "i"); // pede para expressão regular ignorar as letras maisculas e minusculas
var string = "JavaScript";

alert(regex.test(string));

alert(/javascript/i.test("JavaScript"));

/****  FUNÇÃO EXEC() **

alert(/doce/i.exec("Qual é o Doce mais doce que o doce"));//A função exec retorna A PRIMEIRA ocorrência ( ai ele para de fazer a pesquisa) de conteudo da String que passamos que atende a expressão regular , o alert retorna doce
*/

/*
var string = "Qual é o Doce mais doce que o doce" ; 
alert(/doce/ig.exec(string)); // o  *****  modificador g  ****continua com a pesquisa
alert(string.match(/doce/ig)); // Essa função retorna TODAS as referências que baterem com aquele padrão dentro de uma Array


//
*/


/**** METACARECTERES ***/
//Podemos utilizar caracteres especiais para serem utilizados

//alert(/./.test("Pier21")); //  Metacarecter . encontra a ocorrência de qualquer caracter ou letra com excessão de novas linhas - true
//alert(/\w/.test("Pier21")); // Metacarecter w Procurar por qualquer caracter de A a Z , de 0 a 9 e _
//alert(/\s/.test("Pier 21"));// procura a ocorrência de espaços no nosso texto
//alert(/\d/.test("Pier 21"));//procura por digitos(numeros)
//alert(/^P/.test("Pier 21")); //Metacarecter ^ Indica a ocorrência de uma determinada informação no inicio da String - indica o inicio de uma ocorrência 
//alert(/21$/.test("Pier 21"));//procura a ocorrência desse padrão no final do texto - indica o final de uma ocorrência

//alert(/\d$/.test("Pier21"));//Expressão para ver se tem algum numero no final do meu texto
//alert(/\d\d$/.test("Pier21"));//E para ver se tem a ocorrencia de 2 digitos , numeros no final do nosso texto

/*********  padrão para verificar ceps  ***********/

//alert(/^\d\d\d\d\d\-\d\d\d$/.test("70294-070")); // cep tem 5 digitos depois um traço e termina com 3 - começa com 5 digitos tem um traço no meio e vai terminar com 3 digitos

/*** QUANTIFICADORES ***/

//Indicam a ocorrência de uma determinada quantidade

//alert(/\d*/.test("Pier21")); // * vai procurar a ocorrência de o ou + digitos - obs : se for zero ele também retorna true
//alert(/\d*/.test()); // retorna true
//alert(/\d+/.test("Pier21")); // vai procurar pelo menos uma ocorrência ou + de digito
//alert(/\d?/.test("Pier21")); // procurar a ocorrencia de 0 ou 1 vez
//alert(/\d{2}/.test("Pier21")); // para declarar a quantidade de vezes que apareça
//alert(/\d{2}$/.test("Pier21")); 
//alert(/^\d{2}/.test("Pier21")); 

/*********  padrão para verificar ceps  ***********/

//alert(/^\d{5}-\d{3}$/.test("70294-070"));

/*********  Validação para datas  ***********/

//alert(/^\d{2}\/\d{2}\/\d{2,4}$/.test("02/02/80"));//A minha data começa com 2 digitos , depois colocar uma barra com caracter de espape , que é barra invertida , + 2 numeros + barra + 4 numeros   ,  obs : no ano tem que ter de 2 a 4 digitos

/*********  padrão para verificar E-mails ***********/

//alert(/\w+@\w+\.\w{2,3}/.test("rh@xtiunniversity.com")); // só não pode tirar o @, nem o . 
//alert(/\w+@\w+\.\w{2,3}/.test("rh@xtiunniversity.com.br"));

/*** CARACTERES OPCIONAIS  ****/

//alert(/cau/.test("cau"));//Para identificar a palavra cau
//alert(/cau/.test("ceu"));

//alert(/c[ae]u/.test("cau")); // coloquei um agrupador de outros caracteres para identificar tanto a letra "a" como "e"
//alert(/c[ae]u/.test("ceu"));

//alert(/\d[\d\,]*/.test("23,45")); // pode ter digitos ou ,  , se ficar [\d,] també retorna true
//alert(/\d[\d\.]*/.test("23.45")); // pode ter digitos ou .

/**** BUSCAS E SUBSTITUIÇÃO ***/

//var str = "Qual é o Doce mais doce que o doce" ; 

//alert(str.match(/doce/ig)); // econtrar as palavras que batem com essa expressão regular
//alert(str.replace(/doce/ig, "DOCINHO")); // recebe a expressão regular e onde encontrá-lo vai substituílo

//var str = "O rato roeu a roupa do rei de roma.";

//alert(str.match(/r[a-z]/ig));
//alert(str.replace(/r[a-z]/ig, "XXX"));

var url = "www.xti.com.br/clientes-2011.html";
//    "http://www.xti.com.br/2011/clientes.jsp";

var re = /www.xti.com.br\/\w{2,}-\d{4}\.html/;  // w não tem numero máximo de letras , só 2 no minimo

alert(re.test(url));
re = /(www.xti.com.br)\/(\w{2,})-(\d{4})\.html/;  // se eu marcar uma posição da expressão com parentesis eu vou poder usá-la em um replace posteriormente ,
// dividi em variáveis 

// $1 a primeira posição marcada com parêntesi
alert(url.replace(re, "http://$1/$3/$2.jsp")); // pode ser também dó  $2\.jsp









