// Objeto Date

//Ele recupera, faz uso de datas que estão disponíveis no meu Sistema Operacional onde estou rodando o scrip
//Quando estivermos trabalhando com as funções desse objeto podemos estar recuperando a data e hora local com as funções sem a letra "utc", mas
//podemos também  recuperar a data e hora universal com base no horário atual do meridiano de  Greenwich
// Hora no Brasil = Hora GMT - 3;

/*
var data1 = new Date(); // current date and time ( date e hora atual )
alert(data1);

var data2 = new Date(123456); //milliseconds since 1970/01/01 ( quantos milissegundos nós temos, e esse milissegundo ele vai ser em relação ao dia 01/01/1970 (essa é data zero para o nosso javascript )
alert(data2);

var data3 = new Date("Jul/20/2011 02:30:55"); // Passando uma String
alert(data3);

var data4 = new Date(2011, 2 , 22, 4, 35, 30, 1234); //year, month, day, hours, minutes, seconds, milliseconds - ano e o mes  são obigatórios 
// Mes começa com zero
alert(data4);
*/

/*
var dias = ["domingo" , "segunda", "terça", "quarta", "quinta", "sexta", "sabado"];

var data = new Date("Jul/20/2014 04:30:55");

alert(data.toDateString()); // Converte a data em uma String , representa apenas a data
alert(data.toLocaleDateString()); // Adotas as convenções do S.O do pais onde estamos



alert(Date.parse(data))//Essa função é estática , vai retorna o numero de milissegundos de uma data que iremos informar
data.setFullYear(2016); // Define o ano do objeto
data.setDate(26);
data.setMonth(10);

alert(data);

alert(data.getHours()); // horas no Brasil 
alert(data.getUTCHours()); // horas no Greenwich

alert("Dia do mes " +data.getDate());//retorna o dia do mês

alert("Dia da semana " + data.getDay());//retorna o dia da semana , começa em zero para domingo
alert(dias[data.getDay()]); // Se colocar for tem que ser dias[i];

alert(data.getFullYear()); // Recupera o ano com 4 digitos
alert(data.getMilliseconds()); // Retorna os milissecundos da data de hoje , mas não retorna a quantidade de milissegundos da data não ,
//nesse caso ão passei como parametros

alert("Segundos " +data.getSeconds()); // Segundos
alert("Minutos " + data.getMinutes()); // Minutos
alert("Mês " +data.getMonth()); // Mês , começa com zero

alert(data.getTime()); // retorna a quantidade total de milissegundos - de 01/01/1970  até essa data 

alert(data.getTimezoneOffset());//Mostra a diferença em minutos entre a hora local e a hora gnt
*/

var data = new Date();
alert(data.getHours());
alert(data.getMinutes());
alert(data.getSeconds());
