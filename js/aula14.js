
// Estrutura Condicional  ( switch )

// São com essas estruturas que se quebra o fluxo natural de um script , podemos executar ou pular o script e continuar a execução do script apos o bloco dessa
//estrutura condicional

var time = "Fla";

switch(time){
    case "Fla":
	   alert("Flamengo");
	   break;
	case "V":
	   alert("Vasco");
	   break;
	default:
	    alert("Indefinido");
}

var n = 2;

switch(n){
    case 1 :    // ele vai continuar avaliando , porque não brequei 
	case 2 :
	   alert("Numeros iniciais");
	   break;
	case 3 :
	case 4 :
	case 5 :
	    alert("Numeros intermediarios");
		break;
	default :
	     alert("Numero não esta classificado");
}