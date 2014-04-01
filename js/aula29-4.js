
/**  POSIÇÃO DO MOUSE **/

/*window.onload = function(){
    var btn = document.getElementById("botao");
	
	btn.onclick = function(evt){
	    var oEvento = evt ? evt : window.event;
		alert("X : " + oEvento.screenX + "Y : " + oEvento.screenY);  // posição do mouse , quando clica no botão
	}
}*/

/**  PROPAGAÇÃO DE EVENTOS **/

//Nela o elemento mais interno que está recebendo o nosso clique ele vai começar a disparar o evento , e depois o proximo elemento e assim por diante


/*window.onload = function(){
    var btn = document.getElementById("botao");
	var div = document.getElementById("primeira");
	
	//btn.onclick = function() {alert("Bota");} //elemento mais interno
	//div.onclick = function() {alert("Primeira"); }
	//document.onclick = function() { alert("document");} // elemento mais externo 
	
	//Quando eu clico no botão aparece todas as mensagens , isso é o que a gente chama de propagação de eventos , o JS começa executando o evento do elemento mais interno 
	// o que fazer para o botão parar essa propagação de evento
	
	btn.onclick = function(e) {
	     alert("Botao");
		 
		 //Palavra chave - this - representa o proprietário da função ou método que está sendo processado - quem o proprietatio dessa função ? É o objeto btn	
      	 //Para uma FUNÇÃO GLOBAL , THIS  - representa a janela do documento.
		 // Para um MÉTODO DO OBJETO,  THIS vai representar a instância do objeto	 
		 //Em um MANIPULADOR DE EVENTOS , THIS vai representar o elemento que recebeu o evento, que é o nosso caso
		    //A gente pode usar ele para acessar atributos , valores desse elemento, sem precisar acessar o elemento novamente via document.getEle... ou . função ou .atributo
		 
		 var evt = e ? e : window.event;
	     //evt.stopPropagation(); // para a propagação , menos no IE
		  if(e){   // se possuir essa função, todos possuem , menos o IE   // pode ser tambem if(evt.stopPropagation()){...}
		     evt.stopPropagation();
		  }else{
		     evt.cancelBubble = true;
		  }
	     
	} 
		
	div.onclick = function() {alert("Primeira"); }
	document.onclick = function() { alert("document");}
	
}*/

/************* THIS *************/

//Palavra chave - this - representa o proprietário da função ou método que está sendo processado - quem o proprietatio dessa função ? É o objeto btn	
      	 //Para uma FUNÇÃO GLOBAL , THIS  - representa a janela do documento.
		 // Para um MÉTODO DO OBJETO,  THIS vai representar a instância do objeto	 
		 //Em um MANIPULADOR DE EVENTOS , THIS vai representar o elemento que recebeu o evento, que é o nosso caso
		    //A gente pode usar ele para acessar atributos , valores desse elemento, sem precisar acessar o elemento novamente via document.getEle... ou . função ou .atributo
		 

/*window.onload = function(){
    var btn = document.getElementById("botao");
	
	btn.onclick = function(e) {
	    
	   //alert("Botao"); 
	   alert(this.id);//this vai representar o elemento botão , que é o dono da função	 , vai me retornar o id do botão
	}	
	
	document.getElementById("texto").onblur = function(e){  //blur - quanto tira o cursor do mouse do campo
	     alert(this.value);
	}
	
}*/

/****** CHAMADA DE EVENTOS ******/

//E se quiser disparar um evento direto via JS
//Ex: quando eu clicar sobre o botão eu quero disparar esse evento de onblue do nosso elemento de texto

//É muit util por ex: quando a gente quer que ao carregar uma pagina a gente quer dar um foco nesse elemento 

window.onload = function(){
    
	document.getElementById("texto").focus(); //Para assim que a pagina for carregada , colocar o curso do mouse no campo

    var btn = document.getElementById("botao");	
	btn.onclick = function(e) {
	   document.getElementById("texto").onblur();
	}	
	
	document.getElementById("texto").onblur = function(e){
	     alert(this.value);
	}
	
	
	
}



