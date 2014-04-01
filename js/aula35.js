//DOM HTML API

//http://www.w3schools.com/js/js_htmldom.asp

//A DOM CORE API , é a API mais genérica que pode ser utilizada em qualquer tipo de documento e é independente de linguagem de programação

//A estrutura de um documento (html, body, head, h1 ...) a gente representa no formato de uma árvore genealógica

//O nosso objeto Document ele é também um elemento dessa nosa API 
// A DOM HTML API foi uma extensão feita a  DOM CORE API , criando-se um conjunto de interfaces que mapeia todos os elementos , objetos de um documento HTML , então ela é focada  em trabalhar documentos HTML



/*
   Todos os elementos HTML implementam a interface Elements , essa interface Elements tem os atributos que nós vamos encontrar em qualquer element HTML , em um link, um botão , uma div -  um id, ClassName
*/

window.onload = function(){

/** Coleções de Elementos **/

    //alert(document);  // é uma interface HTMLDocument , e essa interface implementa a interface HTMLElements, todas as interfaces HTML implementam essa interface , que tem o atributo id , className
	//alert(document.title); //dentro do document tem esse atributo
	//A DOM HTML API diponibiliza interfaces que já tenha as propriedades dos nossos elementos HTML , pra acesso rápido
   
   //alert(document.images.length);//Para saber quantas imagens nós temos no nosso documento , através da propriedade images
   //vai me retornar uma coleção- HTML Colections 
   
   var img = document.images;
   
   //O nosso elemento imagem que eu estou acessando aqui é uma interface dessa API DOM HTML , ele é a interface HTMLImageElement
   //Essa interface image, tem todas as propriedades quen nós temos no nosso documento HTML , o nosso código HTML quando estou construindo uma imagem, uma tag img , eu tenho o atributo border , o atributo alt, src , todos esses atributos e eventos que nós temos na nossa tag HTML , nós também temos nessa interface que representa esse elemento imagem no nosso documento HTML , então nós podemos manipular esses elementos , se eu quiser saber qual que é o caminho de uma detrrminada imagem
   
   for(var i; i < img.length; i++){
     // alert(img[i].alt);
   }
   
   //Essa imagem , é na verdade uma coleção , e esse HTML Collections , é uma interface da HTML API , que tem um conjunto de funções e maneiras de acessar , ex: se eu quiser acessar o primeiro elemento de uma coleção , eu posso acessar assim : 
   //alert(img[0]);
   //alert(img.item(0));//posso acessar o elemento usando uma função também
   //alert(img.namedItem("selecionada"));//posso acessar o elemento usando o id atribuido a ele , pega dentro da coleção aquele elemento que tenha esse ids
   
   /**Outras coleções dentro da nossa HTML API **/
   
   // - coleções de links (para todos os links encontrados no nosso documento
   //alert(document.links);
   document.links[0].alt = "titulo";    //atribuindo um alt ao link
   //alert(document.links[0]); //posso pegar o link na primeira posição eu poderia pegar a classe que foi atribuida ao link ,o alt do link

    // - coleções de formularios
	//alert(document.forms.length); //quantidade de formularios no documento
    document.forms[0]; // estou recuperando o meu elemento formulário do meu HTML 	
   
//______________________

/** Alterar Elementos **/

     
	 
	 //Adicionar linha
	 var btn = document.getElementById("btn");
	 btn.onclick = function(){
	     var l = document.links; //l - links
		 for(var i = 0; i < l.length; i++){
		    adicionarLinha(l[i].alt, l[i].href);  //poderia ser imagem , só que no lugar de href, é src
		 }   
     }
	 
	 //Remover Linha
	 var btn2 = document.getElementById("del");
	 btn2.onclick = function(){
	    var tb = document.getElementsByTagName("table");
		tb.deletRow(1); //a posição zero é a linha de paragrafo
     }
	 
	 //acessar os elementos dentro do formulario  //o primeiro formulario
	 alert(documents.forms[0].elements.nome.value = "Curso de DOM HTML API JavaScript"); //vai colocar esse valor no campo de texto
	 //document.forms[1].elements.estado[1].value; 
}

function adicionarLinha(texto1, texto2){

var tb = document.getElementsByTagName("table").item(0); //vou pegar a primeira tabela
	 
	 //alert(tb); //vai retornar o tipo de objeto 
	 
	 var row = tb.insertRow(-1);//cria uma nova linha na tabela , precisa informar uma posição ,se voce não sabe a ultima posição da tabela , coloca -1 , pois vai sempre inserir uma linha na ultima posição 
	 //Também precisamos incluir as célular nessa linha , não existe tr sem td
	 var cel0 = row.insertCell(0); //na primeira posição
	 var cel1 = row.insertCell(0);
	 
	 cel0.appendChild(document.createTextNode(texto1)); //Essa função é do objeto Element , essa função adiciona um novo elemento dentro desse elemento , eu quero adicionar um texto, pra isso eu tenho uma função que cria um texto
	 cel1.appendChild(documento.createTextNode(texto2));  
}

