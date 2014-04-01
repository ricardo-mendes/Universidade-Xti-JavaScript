
// for in

// array é um objeto que pode adicionar , incluir varios elementos dentro dele

var numeros = new Array("um", "dois", "tres");

for (var i = 0; i < numeros.length; i++){
    alert(numeros[i]);
}

alert("Usando o in");
for (i in  numeros){                    //i - indice
    alert(numeros[i]);
}

alert("Objeto");

var Carro =     //objeto carro
{
    marca : "nissan",
    modelo : "350z",
    comprimento : "3.345mm",
    velocidade : "350km/h",
    cavalos : 350,
};

alert("Detalhes do objeto");

for (var props in Carro)     // props - propriedade   
{
    alert(props + " = " + Carro[props]);      
}



