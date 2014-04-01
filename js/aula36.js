//DOM CORE API

//API para manipulçao de documento baseado em HTML ou XML indepedente de linguagem de programaçãoffscreenBuffering
//O primeiro passo pra trabalhar com ela é saber nabegar pela árvore do nosso documento

/*
   Tipos de nós (Documento, Elemento, Atributo e Texto)

   Parentesco dos nós (Pai = parent , Filho = child, Irmao = sibling)

   Alguns nós não aceitam outros nós , o nó do tipo texto não aceita outro nó dentro dele, só aceita valor

*/

window.onload = function(){

	var div = document.getElementsByTagName("div").item(0); //retorna a primeira div
	//alert(div); //elemento 
	//alert(div.parentNode);//pai desse elemento , parentNode = pai desse elemento
	//alert(div.childNodes); //nodes , pois poe ter mais de um filho , retorna uma lista de filhos

    var ul = div.childNodes.item(0); //pega do div ali em cima , com 1 funciona
	//alert(ul); //Primeiro filho ,nesse caso a div tem ó um filho - ul
	//alert(ul.nodeName); 
	//alert(ul.nodeType); //tipo de nó , 1 = representa elemento , 2 = representa atributo , 3 = representa nós do tipo texto

    //alert(ul.childNodes);//vai me retorna uma lista de nós filhos - objetct NodeList
    //alert(ul.childNodes.length);
    //alert(ul.childNodes.item(1));
    //alert(ul.firstChild); //primeiro filho
    //alert(ul.lastChild);


    //alert(ul.firstChild.firstChild); //retorna o primeiro filho do primeiro filho
    //alert(ul.firstChild.firstChild.nodeName); //retorna #text, sempre que ele encontra elementos do tipo texto
    //alert(ul.firstChild.firstChild.nodeType); //tipo do nó
    //alert(ul.firstChild.firstChild.nodeValue);//recupera o valor desse nó

    /** OBS : **/
    /** Ele só vai trazer valor se for um nó do tipo texto ou atribtuo  **/


    var li = ul.firstChild.lastChild.childNodes[1]; // li - ul - lis - li[1] // Na posição 2 
    //alert(li.firstChild.nodeValue); //vai escrever um texto , pois o filho de li é um nó do tipo texto

    alert(li.previousSibling.firstChild.nodeValue); //pega o valor do irmão anterior 
    alert(li.nextSibling.firstChild.nodeValue);//irmão posterior
    
    alert(div.firstChild.firstChild.lastChild.lastChild.lastChild.firstChild.firstChild.nodeValue); //pra retorna o valor do 1.3.1 
    //  ul - li - ul(se for first vai pegar o span) - li - ul (pois o primeiro é um item de texto) - li - texto
}