
/*
    ALTERAR O VALOR DE UM ELEMENTO HTML
*/
window.onload = function(){
    
	
	var tit = document.querySelector("#tit_id");
	
	tit.innerHTML = "Outro Texto!";  // A gente pode alterar o valor de um elemento , o valor interno de um elemento
	// É uma propriedade implementada em todos os browsers , mas não é uma especificação da W3
	alert(tit);
	
	
	/** API DOM HTML **/
	//Consigo acessar os atributos desse elemento, sem precisar chamar funções 
	tit.style.color = "#0000FF";  // HTML DOM API , é uma chamada a uma interface ( style) do nosso HTML API
	//Só vai ser aplicada a um elemento do tipo HTMLHeadingElement , pois só nessa interface que nós temos esse atributo(stye) acessível dessa maneira e através desse atributo(color) eu consigo acessar esse outro atributo direto , utilizando apenas ponto
	
	
	/** API DOM CORE **/
	tit.setAttribute("style" , "color:#0000FF");//Utilizando a CORE API  ( atributo e valor do meu titulo)
	//É a mesma operação , só que feita de uma maneira diferente , essa é a maneira para alterar qualquer atributo de qualquer tipo de documento no padrão XML
	
	
	var img = document.getElementsByTagName("img")[0]; //recuperando a primeira imagem do array
	/** DOM HTML API **/
	img.border = "6px";
	
	/** DOM CORE API **/
	img.setAttribute("border" , "6px");
	
}




