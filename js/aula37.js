
/*
   Criação de Nós

      - createElement
      - createTextNode
      - createAttribute


    Atribuição de Nós
       - appendChild  //adiciona um novo filho
       - removeChild  //remove o filho
       - replaceChild  // sobrescrever o filho de um elemento


    Várias bibliotecas que usam Ajax para manipular dinamicamente a página trazendo novas informações , como gmail , que traz os emails sem precisar recarregar a página faz isso utilizando a DO  CORE API
*/

window.onload = function(){

    var div = document.getElementsByTagName("div").item(0);

	var hr = document.createElement("hr"); //hr nome da nossa tag , o elemento é uma tag , cria uma linha
	div.appendChild(hr);//adiciono esse elemento no div

	var li = document.createElement("li");
	li.appendChild(document.createTextNode("Teste de Lista")); 
    //div.firstChild.appendChild(li);  //para acessar o ul e colocar mais uma lista nele //esse seria o certo, mas não funciona
    div.childNodes.item(1).appendChild(li);


    var atributo = document.createAttribute("style");
    atributo.value = "color:blue";  
    //li.setAttributeNode(atributo);  //atribuimos desse nó de atributo ao elemento li que acabamos de criar
    //li.setAttribute("style", "color:blue");//poderia fazer dessa forma também
    //li.style.color = "blue";  //utilizando a DOM HTML API

    /* Vai ficar antes de fechar a div */ 
    
    var select = document.createElement("select");
    select.setAttribute("id", "estados");
    
    var option = document.createElement("option");
    option.setAttribute("value", "DF");
    option.appendChild(document.createTextNode("Distrito Federal"));//vamos colocar um texto dentro da option

    var option2 = document.createElement("option");
    option2.setAttribute("value", "sp");
    option2.appendChild(document.createTextNode("São Paulo"));

    select.appendChild(option); //adicionando a opção dentro do select
    select.appendChild(option2);
    div.appendChild(select);


    /*  Remoção */
    
    //var del = div.firstChild;//a XTI fez assim , só que não funcionou
    var del = div.childNodes.item(1);
    div.removeChild(del);  //passao o filho que eu quero remover , vou remover o ul

    /* Para Clonar esse elemento */

    var select2 = select.cloneNode(true);
    div.appendChild(select2);

    var option3 = option.cloneNode(true);
    select.appendChild(option3);

}