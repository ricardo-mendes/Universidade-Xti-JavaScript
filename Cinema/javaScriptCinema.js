

//window.onload = carregarPoltronas(); // eu quero fazer mais do que apenas essa função

// Isso é manipulador de evento direto no javascript
window.onload = function(){ // Estamos associando essa funçao a um evento javascript
     carregarPoltronas(); // mas nós queremos carregar cada poltrona de acordo com seu status
}

//true = disponivel
//false = indisponivel

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
}
// carregarPoltronas();  // Só isso não basta

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