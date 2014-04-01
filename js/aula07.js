var x = 5/3;
x = 4 % 2; // resto da divisao - nesse caso zero
alert(x);

//operador unario para trocar sinal do numero (- e +)

var y = 6;
var z = ++y;  // pré-incremento  y = y + 1;
//pós-incremento     y++;
// pre-incremento eu adiciono mais um no operando antes dele prosseguir no fluxo do script, no pos-incremento ele primeiro realiza o fluxo e depois a operação

alert("y = "+ y);
alert("z = "+ z);

var i = 6;
var j = i++;

alert("i = "+ i);
alert("j = "+ j);

var a = 6;
var b = --a;

alert("a = "+ a);
alert("b = "+ b);

var c = 6;
var d = c--;

alert("c = "+ c);
alert("d = "+ d);