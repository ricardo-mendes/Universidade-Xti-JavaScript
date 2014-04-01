/*
    OPERADORES DE COMPARAÇÃO
*/

var x = 6;

alert(x == 6);   // true
alert(x == 7);   //false
alert(x == "6");  // ele vai fazer uma converção da String para ver se o texto da Srring bate com o valor da variável - true

alert(x==="6");  //ver o valor e o tipo de dado = resultado =  false
//OPerador de identidade

alert(x != "5");  //true
alert(x != "6");   //false

alert(x !=="6");   //true - o valor é igual, mas o tipo de dado é diferente

alert(x > 5);  // true
alert(x < 6);  // false

alert("a" > "b"); // false

alert("maiores ou iguais");
alert( x >= 6);