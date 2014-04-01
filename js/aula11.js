//Operadores de Bits (BITWISE)  precisa saber algebra booleana

//OPERADORES ESPECIAIS

//TERNARIO    -     ?:

var idade = 21;
var x = (idade >= 18 ) ? "maior de idade" : "menor de idade";
alert(x);

//Separador de expressões   -     ,

var idade = 21, sexo = "masculino" , nacionalidade = "brasileira"; 

//Delete (apaga o operando , o objeto , o valor ) -   delete

Pessoa = { 
    nome : "Fulano"        
}

alert(Pessoa.nome);      
//delete(Pessoa.nome);
//alert(Pessoa.nome);  resultado : undefined
 
//in   (indica se existe a propriedade especifica dentro de um objeto )  -   in

alert("nome" in Pessoa);   // true
alert("e-mail" in Pessoa); 

//instanceof  ( indica se o objeto é do tipo especificado )   -   instanceof
// new ( cria nova instância de objeto )      -                     new

var idade = new Number(31);   // estou criando um objeto

alert(idade instanceof Number);    // se idade é uma instância do objeto Number  - resultado = true
alert(idade instanceof String);   // false   

// this ( referência ao objeto atual )  - this

alert(this.document.title);    // this. ( representa o objeto window )

function(){
     this   // ( Esse this é em relação a essa função e não mais o objeto window )
}

// typeof ( retorna o tipo do operando )    -      typeof

alert(typeof(3));  // vai retornar que o tipo desse dado é   number

alert(typeof(function(){}))  



// ()  chama uma função 

window.alert("Chamou a funcao alert do objeto window");




