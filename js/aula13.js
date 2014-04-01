
// Estrutura condicional -  if e else

var passou = false;

if (passou) {
   alert("Passou");
} else {
   alert("Estude mais");
}

var numero =  21;

if ((numero % 2) == 0 ){
    alert("Par");
} else {
    alert("Impar"); 
}

alert("Com varios testes");

var idade = 28;

if (idade <= 11)
{
   alert("Crianca");
}
else if (idade > 11  && idade <= 16 )
{
   alert("pre-adolescente");
}
else if (idade > 16  && idade <= 21 )
{
   alert("adolescente");
}
else if (idade > 21  && idade <= 60 )
{
   alert("adulto");
}
else
{
   alert("idoso");
}

alert("");
alert("if dentro de if");

var nota = 6;

if (nota >= 7)
{
    alert("Passou");
}
else
{
    alert("Reprovou");
	if (nota == 6){
	    alert("Voce esta em recuperacao");
    }
}
