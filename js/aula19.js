var nome = "ricardo";

alert(typeof(nome));   // estou vendo o tipo dessa informação

//Recuperando um atributo dessa string, quantos caracteres tem nessa String

alert(nome.length); //Envolve esse tipo primitivo dentro de um tipo String
//new String(nome).length -  é isso que o JS está fazendo essa operação por debaixo dos panos
//Todas as vezes que eu faço uma chamada a um atrito ou função de um objeto a partir de um dado primitivo , a linguagem JS envolve aquela informação primtiva em um objeto que esta linkado com esse tipo primtivo ( string - String) faz a chamada aquele atributo ou função
// E logo em seguida descarta o objeto que ela acabou de criar

alert(nome.toUpperCase());   // fez a mesma coisa com o de cima


//Se estivermos trabalhando muito com chamada de atributos e funções de objetos é melhor criar a variavel com o tipo objeto equivalente

//Se por um outro lado o unico proposito for apenas de mostrar uma mensagem na tela, mostrar informação primitiva do jeito que ela está , de forma natural , então é melhor criar os tipos primitivos

var nome02 = new String("mendes");

alert(nome02.length);
