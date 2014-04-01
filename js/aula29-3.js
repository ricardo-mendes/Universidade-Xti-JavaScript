// Objeto Event

//Atributos do objeto Event :
//http://www.w3schools.com/jsref/dom_obj_event.asp

//toda vez que disparamos um evento , temos a possibilidade de acessar o objeto evento , dependendo do browse, eu acesso esse objeto de maneiras diferentes
//Nós temos propriedade que fornecem informações sobre o evento que está acontecendo.
//Ex: A localização de um click do mouse na pagina , qual evento que foi disparado, quem disparou esse evento, se eu estou arrastando o elemento pra outro elemento, qual elemento está sendo arrastado , em cima de qual elemento eu soltei esse elemento.
//Todas essas informações estão disponívei dentro do objeto event
//A maioria dos atributos do objeto Event  são iguais em quase todos os browses, temos uma ou outra propriedade que é diferente

//A forma como eu acesso o objeto Event no I.E , é diferente de como eu o acesso nos outros browses

window.onload = function (){
   var btn = document.getElementById("botao");
   
   btn.onclick = function(evt){
   var oEvento =  evt ?  evt : window.event; // se o evento existir eu retorno o evento que estamos recebendo dentro da função , senão a gente pega o objeto direto do objeto window
        //alert(evt.type); // não vai no IE
        alert(oEvento.type); 		
   }
   
   
   /*
   btn.onclick = function(){
      alert(window.event.type);  // Pra se eu estiver no I.E 
   }*/
}


function um(){
   alert("um");
}