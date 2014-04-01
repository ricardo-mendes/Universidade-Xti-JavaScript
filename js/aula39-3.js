window.onload = function(){
          
		 document.getElementById("botao").onclick = function(){ //esta atrelhando ao botão esse manipulador de eventos
		 
			 /**		 
			 //esse codigo não vai funcionar em  todos os browsers 
			 var ajax = new XMLHttpRequest(); //esse objeto não é criado dessa maneira, nas versões 5 e 6 do I.E temos outra forma de criar esse objeto
			 ajax = new ActiveXOjbrct("Microsoft.XMLHTTP"); //informando o tipo de objeto que quero criar
			 var r = document.getElementById("resposta");**/
			
			//requisitar("ajax/arquivo.xml");
			
			//quando atribuimos um manipulador de eventos a um elemento do nosso hmtl eu posso acessar esse elemento através da palavra chave this
            requisitar(this.href); //vai trazer o endereço desse arquivo  (ajax/arquivo.txt) 		
            //com isso mesmo se o internauta desabilitar o javascript ele vai conseguir ver o arquivo			
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
			  
			  //var xml = new XML(ajax.responseText);   			       
			  //r.appendChild(document.createTextNod(xml.url));
			  alert(ajax.responseText);
			  r.innerHTML = ajax.responseText;
		}
		
		//função genérica
		function requisitar(url){
		
		     var ajax = iniciaAjax();
			 carregando(document.getElementById("resposta"));			
			 ajax.onreadystatechange =  function(){
				if(ajax.readyState == 4){ 		   			  
                 
					mostrar(ajax);
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