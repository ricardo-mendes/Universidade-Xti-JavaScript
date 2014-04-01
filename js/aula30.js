
window.onload = function(){
     
      //Propriedade InnerHtml :
	  // altera o html
	 
     //document.getElementById("teste").innerHTML = "<h1>Teste do innerHTML </h1>"; // posso informar qualquer html
	 //Ele trocou o texto que estava dentro do id por esse outro texto , alterei o html da "li" , já que o "id" está na "li"
	 //Essa propriedade é uma implementação dos browsers 
	 
	 /** Objeto NAVIGATOR **/
	 
	 //alert(window.navigator.platform);
	 //alert(navigator.userAgent);
     //alert(navigator.language);
	 
	 var plugins = navigator.plugins;
	 var p = ""; //pra imprimir esses plugins
	 //no objeto navigator , a gente tem os plugins que estão dentro do browser
	 
	 for(var i= 0 ; i < plugins.length; i++){
	     p += plugins[i].name + "\n";  // atribui a essa variável o nome dos nossos plugins 
	 }
	 //alert(p); 
	 
	 
	  /** Objeto LOCATION **/
	  //Esse Objeto tem as informações da ocalização do nosso documento 
	  
	  alert(location.href); //localizaçõa do nosso documento
	  alert(location.protocol); // nesse caso : file , poderia ser também o protocolo http, ftp, https	  
	  
	  
	  /** Objeto SCREEN **/
	  
	  //Esse objeto vai ter as informações de dimensões da nossa telan
	  
	   alert("Largura : " + screen.width);
	   alert("Altura : " + screen.height);
	   
	   
	    /** Objeto HISTORY **/
		
		//Esse objeto tem as informações do histórico de navegação nessa janela
		
		history.go(2); // vai pra frente 2 páginas
		history.go(-2); // volta 2 páginas
		history.back(); // volta 1 página 
		history.forward(); // vai 1 página pra frente
}