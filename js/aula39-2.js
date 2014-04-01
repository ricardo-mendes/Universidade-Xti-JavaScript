window.onload = function(){
          
		 document.getElementById("botao").onclick = function(){ //esta atrelhando ao botão esse manipulador de eventos
		 
		     var ajax = iniciaAjax();
			 var cep = document.getElementById("cep").value;
			 var r = document.getElementById("resposta");
			 
			 carregando(document.getElementById("resposta"));			
			 ajax.onreadystatechange =  function(){
				if(ajax.readyState == 4){ 		   			  
					  // Para remover a imagem de carregamento
					 while(r.hasChildNodes()) { //pra remover 
						r.removeChild(r.lastChild);
					 }
			         r.innerHTML = ajaxa.responseText; 
				} 
			}
		   
		    //http://www.i-stream.com.br/webservices/cep.asmx/ConsultaCEP?CEP=70294070
			ajax.open("GET", "http://localhost:8082/portal/ajax/cep.jsp?cep="+cep);  		
			ajax.send(null);	
		 
			
			return false;		
		}
		
		function carregando(c){ //recebe um container , onde quero incluir essa imagem quando ela tiver que ser apresentada
		    while(c.hasChildNodes()){  //vou remover todos os elementos dentro do container, que pode ser a nossa div
			   c.removeChild(c.lastChild);
			}
			var img = document.createElement("img");  //depois de remover tudo coloco uma imagem apresentado o gif animado
			img.setAttribute("src", "ajax/ajax-loader.gif");
			c.appendChild(img);
		}
		
		
		function mostrar(ajax){ 
		      //codigo que apresenta a nossa requisição
		      var r = document.getElementById("resposta");
			  
			  // Para remover a imagem de carregamento
			  while(r.hasChildNodes()) { //pra remover 
			     r.removeChild(r.lastChild);
			 }
			  
			 alert(ajax.responseText); //vai dá erro , pois o JavaScript tem algumas restrições de segurança , pois não podemos acessar nenhuma página que esteja fora do dominio dessa pagina que esta rodando o javascript em uma outra url, outro servidor web
			 /** Existem algumas técnicas para contornar esse tipo de situação**/
      		/**uma das técnicas é criar localmente utilizando páginas dinâmicas um ASP, JSO, PHP, criar um aplicativo que faça requisições a um servidor remoto , poderia criar uma página JSP que acessasse essa página remota e trouxesse essa informação para gente no nosso servidor , a JSP pode fazer a chamada a esse outro endereço passando como parâmetro o CEP que queremos consultar , o JSP e o JavaScript precisam estar no mesmo servidor **/
			 
			 /** Outra maneira é com o proxy, se o proxy for instalado servidor web, todas as chamadas ao serviço podem ser feitas por meio do proxy e ai ele vai distribuir essa requisições de acordo com a url que a gente utilizar **/
		}
		
		
		function requisitar(url){
		
		     var ajax = iniciaAjax();
			 var cep = document.getElementById("cep").value;
			 var r = document.getElementById("resposta");
			 
			 carregando(document.getElementById("resposta"));			
			 ajax.onreadystatechange =  function(){
				if(ajax.readyState == 4){ 		   			  
					  // Para remover a imagem de carregamento
					 while(r.hasChildNodes()) { //pra remover 
						r.removeChild(r.lastChild);
					 }
			         r.innerHTML = ajaxa.responseText; 
				} 
			}
		   
			ajax.open("POST", url);  		
			ajax.send(null);	
		    
		}
		
		
		function iniciaAjax(){
		    var ajax = null;
			if(window.XMLHttpRequest){ // se existir no nosso browser
			   ajax = new XMLHttpRequest();
			}
			//Nas versões mais recentes do I.E a Microsoft criou um outro objeto
			else if(window.ActiveXObject){
			    try{
				    ajax = new ActiveXObject("Msxml2.XMLHTTP");
				}catch(e){
				    ajax = new ActiveXObject("Microsoft.XMLHTTP");  //objeto mais antigo
				}
			   
			}	
			return ajax;
		}
		
		
}