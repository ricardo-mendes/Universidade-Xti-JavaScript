//Objeto Math

//ver na w3schools

// Não tem o método construtor, tanto as funções como as propriedades desse método são estáticas , ou seja, acessa diretamente a partir da classe Math
//As suas propriedades são constantes matemáticas notáveis

// comprimento de uma circunferência  
//alert(2 * Math.PI * 30);

//alert(Math.abs(-3));//retorna o valor absoluto de um numero , retorna 3 em positivo
//alert(Math.max(2,3,7,9));//retorna o numero de maior valor dentro de um conjunto
//alert(Math.min(2,3,7,9));

//alert(Math.round(3.7));//arrendonda o numero informado para o numero inteiro mais proximo
//alert(Math.floor(3.7));//arrendonda sempre para baixo
//alert(Math.ceil(3.7));//arrendonda sempre para cima

//alert(Math.pow(2,3));//eleva o numero a uma determina potencia - 2 elevado a 3

//alert(Math.sqrt(4));//extrai a raiz quadradad de um numero

//alert(Math.random());//retorna um numero dinâmico, randômico , retorna um  numero entre 0 e 1

//var n  = Math.floor(Math.random()*10 + 1);  //Vou arredondar esse numero para baixo , pode ser de zero até 10
//alert(n); // retorna entre zero e 9 - por causa do floor , mas como coloquei + 1 vai até 10

//alert(Math.exp(3));//eleva o numero de Euller a potencia que a gente definir no parametro
//alert(Math.log(3));//Extrai o logaritmo natural do numero informado
//alert(Math.sin(3));//retorna o valor do seno do angulo informado
//alert(Math.cos(3)); //Cosseno 
//alert(Math.tan(3)); //Tangente

//alert(Math.asin(0));//retorna um valor numerico em radianos representando o arco cujo seno informado seja passado nesse parametro

//alert(Math.acos(0));//acosseno , retorna um valor numerico em radianos representando o arco cujo cosseno seja passado no parametro

//alert(Math.atan(0));//atangente, retorna um valor numerico entre  - PI / 2  e PI / 2 , representando o arco em radianos cuja a tangente a gente passa como parametro

alert(Math.atan2(1,1)); // retorna um valor numerico entre - PI e PI representando o arco em radianos cuja a tangente é igual ao quociente dos 2 parametros
