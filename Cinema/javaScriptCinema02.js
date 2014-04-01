

window.onload = function(){ // Estamos associando essa funçao a um evento javascript
     carregarPoltronas(); // mas nós queremos carregar cada poltrona de acordo com seu status
	 
	 //Eu quero atribuir a imagem essa função nesse manipulador de eventos para não poluir o html
	 
	 //estou associando a uma envento onclick
	 
	 //document.getElementsByTagName("img")[0].onclick = function() {verificarStatus(0)}) // não precisa mais fazer function().. , pois retorna essa função na própria função verificarStatus();
	 
	 var imagens = document.getElementsByTagName("img");
	 
	 for(var i=0; i < imagens.length; i++){
	    imagens[i].onclick = verificarStatus(i);
	 }
}


function verificarStatus(poltrona){ // Agora eu quero recuperar o valor src daquele imagem
    //vamos criar uma função para ser associada ao manipulador de eventos de cada uma dessas imagens - numero da poltrona
    //vamos apresentar o status de cada uma dessas cadeiras quando nós clicarmos sobre uma delas
     //vamos chamar seas função dentro de cada imagem 
	return function(){ // vou retornar aqui direto uma função com a sintaxw literal que execute o procedimento que a gente espera
         var src = document.getElementsByTagName("img")[poltrona].src;  // na posição informada.src para recuperar qual imagem nós temos, vai dizar o caminho da imagem
		 var msg = "";
		 
		 if(src.indexOf("p_disponivel.jpg") > 0){ // se tiver dentro dele o texto disponivel começando numa posição maior do que zero
		    msg = "Poltrona Disponível";
		 }
		 else if(src.indexOf("p_indisponivel.jpg") > 0){
		     msg = "Poltrona Indisponível";
		 }
		 else{
		     msg = "Esta Poltrona é Sua !!";
		 }
		 alert(msg);
    }
}

var poltronas = [false, true, false, true, true , true , false , true, false];

function carregarPoltronas(){ // deverar alterar o src de cada cadeira com base no status da cadeira
   var imagens = document.getElementsByTagName("img"); // recuperar todos os elementos que tenha uma determinada tag , vai retornar um array de imagens
   
   for(var i = 0; i < imagens.length; i++){ // imagens = poltronas 
      if(poltronas[i]) {
           imagens[i].src = "imgCinema/p_disponivel.jpg";
		   imagens[i].width = "80";
		   imagens[i].height = "50";
      }else{
	       imagens[i].src = "imgCinema/p_indisponivel.jpg";
		   imagens[i].width = "80";
		   imagens[i].height = "50";
	  }
   
    }
	// carregarPoltronas();  // Só isso não basta
}


function selecionarPoltrona(){
    var imagens = document.getElementsByTagName("img"); 
	
    for(var i = 0 ; i < poltronas.length; i++){
	    if(poltronas[i]){
		  imagens[i].src = "imgCinema/p_selecionada.jpg";
		  imagens[i].width = "80";
		  imagens[i].height = "50";
		   
		   //break; // Assim que ele encontrar uma poltrona disponivel ele marca e sai do nosso for , só vai escolher o primeiro
		   var quer = confirm("Voce quer esta poltrona? "); // Essa função é para solictar uma confirmação do internauta , traz um booleando 
		   if(quer){ // o script vai continuar verifcando uma outra cadeira para ele poder escolher
		      break;
		   }else{
		     imagens[i].src = "imgCinema/p_disponivel.jpg";
			 imagens[i].width = "80";
		     imagens[i].height = "50";
		   }
		}
	}
}

function selecionarCasal(){
    var imagens = document.getElementsByTagName("img"); 
	
    for(var i = 0 ; i < poltronas.length; i++){
	    if(poltronas[i] && poltronas[i + 1]){
		   imagens[i].src = "imgCinema/p_selecionada.jpg";
		   imagens[i].width = "80";
		   imagens[i].height = "50";
		   imagens[i + 1].src = "imgCinema/p_selecionada.jpg";
		   imagens[i + 1].width = "80";
		   imagens[i + 1].height = "50";
		   	 
		   var quer = confirm("Voce quer estas poltronas? "); 
		   if(quer){ 
		      break;
		   }else{
		     imagens[i].src = "imgCinema/p_disponivel.jpg";
			 imagens[i].width = "80";
		     imagens[i].height = "50";
			 imagens[i + 1].src = "imgCinema/p_disponivel.jpg";
			 imagens[i + 1].width = "80";
		     imagens[i + 1].height = "50";
		   }
		}
	}
}