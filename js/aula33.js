// Cookies ( HTML5 DOM Storage API )

//Existem alguns objetos dentro do nosso DOM , precisa ir no debug do firefox
//Permitem armazenar informações dentro desses repositório de dados definido pela especificação HTML 5 DOM Storage

window.onload = function(){
     var gravar = document.getElementById("gravar");
	 var exibir = document.getElementById("exibir");
	 var texto = document.getElementById("texto");
	 
	 gravar.onclick = function(){
	     localStorage.setItem("meuTexto", texto.value);//coloco o que está no texto dentro do localStorage ( fica dentro do window)
		 //o item que eu quero informar é "meuTexto"
	 }
	 
	 exibir.onclick = function(){
	     texto.value = localStorage.getItem("meuTexto");
	 }
}


