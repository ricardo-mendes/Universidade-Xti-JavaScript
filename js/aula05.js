 /*
     Funcao : ligar()
     Autor : Ricardo
     Descrição : Apresenta o nome do usuario e liga a lampada
 */
 function ligar(){
		        
		var nome = prompt("Qual o seu nome ?");  // prompt - método do objeto raiz window
				
	    const  HORAS_DIA = 24 ;
				 
		alert("Seu nome " + nome);
				 
				 
		document.getElementById("xti").src = "img/xlamp_on.png";
}