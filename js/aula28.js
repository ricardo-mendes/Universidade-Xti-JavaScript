
//As funções JavaScript são objetos , não são estruturas como o for ou como o if
//para criar uma função basta utilizar a palavra reservada function e o nome da função();{} os parentesis e o bloco da função


/****  FUNÇÃO DECLARATIVA **/
/*function somar(x,y){ // No parametro pode ter inclusive outras funções
    return x + y;  // pode retornar um array.  Ex: return[1,2];
}

alert(somar(2,2));*/

/***  FUNÇÃO ANÔNIMA ***/

//new Function("x", "y" , "alert(x+y);");  // chamando o contrutor das funções , ultimo - corpo da função
//Essa função não tem nome, mas eu posso criar uma variável e atribuir um nome pra ela

/*var somar2 = new Function("x", "y", "alert(x+y);");

somar2(2,2);*/

/**** FUNÇÃO LITERAL ***/

//só tirar o nome da função
//Utiliza essa função literal principalmente para manipulação de eventos

/*var somar3 = function (x,y){ // No parametro pode ter inclusive outras funções
    alert(x + y);
}

somar3(2,2);*/

/************* **********/

// vou associar ao evento onclick desse elemento l uma função literal
// Esse cógido ainda não funciona pois o nosso JavaScript foi adicionado no cabeçalho do nosso documento , ele está lendo o documento e ele está tentando atribuir ao evento onclick do elemento "l" essa função , antes que o elemento l tenha sido lido
//tem 2 formas de resolver esse problema :
// - colocar o script depois do elemento "li" com "id = l" ter sido lido antes do </body> 
// - Uma outra maneira é esperar que o documento todo seja carregado para ai sim fazer essa atribuição

window.onload = function(){ // quando a nossa página  janela for carregada  eu vou associar a essa janela uma outra função literal 
      //vamos colocar a inicialização desses nossos eventos dos demais elementos do nosso html 
	  
	document.getElementById("l").onclick = function(){
		  alert("teste");
    }
}

//document.getElementById("l").onclick = function(){
  //    alert("teste");
//}

function teste(){
    alert("teste");
}






