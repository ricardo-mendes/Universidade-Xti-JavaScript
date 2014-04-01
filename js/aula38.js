/**

AJAX - Asynchronous JavaScript and XML   ( Asynchronous : assincrono )

AJAX não é uma nova linguagem de programação, mas uma nova maneira de usar padrões existentes.

AJAX é a arte de trocar dados com um servidor, e atualizar partes de uma página web - sem recarregar a página inteira.

Objeto 
    XMLhttpRequest
	
	Carregamento de conteúdos com JavaScript e XML , TXT , JSP ...

É uma técnica de programação para carregar o conteúdos via XML , arquivo Texto , páginas dinamicas como ASP , JSP , PHP utilizando JavaScript
Através do JavaScript você faz acesso a um conteudo dinâmico , recupera esse conteúdo dinâmico e coloca dentro da página HTML utilizando JavaScript
Podemos carregar qualquer conteudo dinâmico que esteja em um servidor , podemos carregaer um arquivo texto , XML , JSON (formato conhecido na linguagem JavaScript , podemos acessar páginas PHP , JSP , ASP , ASP X, pode acessar qualquer conteúdo dinâmico , não somente XML 


Para essa técnica de carregamento de conteúdo nós damos o nome de Ajax
Ex de uso , o email na minha caixa de entrada sem eu ter atualizado a página 
No google quando traz uma lista de palavras para voce
Nos mapas do google maps quando arrasta os mapas de um lado para o outro e automaticamente esses mapas estão sendo carregados sem necessidade de atualizar a página inteira.
Ajax fo criado pela Microsoft , com a finalidade de permitir a troca de informações entre o cliente de e-mail (web) e o servidor , exatamento como temos hoje na maioria dos emails web
Tudo isso acontece através do Objeto XMLhttpRequest , esse objeto ele não faz parte do DOM, ele foi criado pela Microsoft, posteriormente foi implementado por outros navegadores e em 2006 a W3C publicou o primeiro rascunho de uma proposta de especificação desse objeto ,e ai ele passou a virar uma recomendação 
oficial

Ex na W3Schools
http://www.w3schools.com/ajax/tryit.asp?filename=tryajax_xml2

Seleciona uma informação ,essa informação é requisitada ao servidor , o servidor retorna essa informação e o JavaScript apresenta os dados na pagina sem a necessidade de atualizar a pagina inteira

*/

window.onload = function(){
          
		 document.getElementById("botao").onclick = function(){ //esta atrelhando ao botão esse manipulador de eventos
		  
		 var ajax = new XMLHttpRequest();
		 var r = document.getElementById("resposta");
			 		
		ajax.onreadystatechange =  function(){
			   if(ajax.readyState == 4){ 		   
					  //alert(ajax.responseText);
				      //r.appendChild(document.createTextNode(ajax.responseText)); //vai criar um nó do tipo texto , o que acontece no email, sem precisa recarregar a página
                      // OU , mas a forma correta é a anterior, usando a DOM CORE API
					  //r.innerHTML = ajax.responseText;	//vai substituir o HTML com o texto que ele conseguiu encontrar	
                       
					   /** Trabalhando com XML **/
					   /*
                       var xml = ajax.responseXML;  //nossa resposta é XML
                       var url = xml.getElementsByTagName("url")[0].firstChild.nodeValue;   //pega o 1ª filho que é o nó do tipo texto , value - pra recuperar o texto
					   
					   r.appendChild(document.createTextNode(url));*/
					   
					   /** Outra forma **/
					   //Essa outra forma de trabalhar com XML ainda não é Cross Browser, só alguns browses implementaram essa nova tecnologia E4X
					   //O I.E não aceita
                      
  					   var xml = new XML(ajax.responseText);  //o objeto XML converteu essa String em um objeto XML , onde posso navegar por esse objeto como sendo um objeto JavaScript     			       
					   r.appendChild(document.createTextNod(xml.url));
					  
                        /***  ***/	 
			   } 
		}
        //Para receber as respostas do servidor, pra saber que arquivo é esse , nós temos 4 propriedades
       
	   //status  = é um número que representa o status dessa requisião que fizemos, ex: uma pagina não encontrada,recebemos o erro 404 , esse número 404 representa o status dessa nossa requisição , o 404 significa que eu tenho um documento não encontrado
        //esse status significa uma requisição de documentos bem sucedida , o servidor vai responder status = 200

       //statusText   = vai trazer um texto representando esse status, status == 200 , vai trazer um texto = "ok"
	   
	   //responseText  = retorna o resultado da nossa requisição em formato de texto 
	   
	   //responseXML = retorna pra gente o resultado da nossa requisição em XML
			 
		//ajax.open("POST", "ajax/arquivo.txt");
        //ajax.open("POST", "ajax/arquivo.html");
        ajax.open("POST", "ajax/arquivo.xml");  		
		ajax.send(null);	
		return false;
		}
}

//através a propriedade readyState , vai informa o status da nossa comunicação com o servidor
			 //Pode ter 5 valores /status
			 // 0  = indica uma comunicação não iniciada com o servidor
			 // 1  = indica que houve um inicio de comunicação
			 // 2  = indica que houve um inicio de requisição ao servidor, que a gente encaminhou alguma coisa para o servidor
			 // 3  = informa que o servidor está em processo de envio de resposta ,servidor recebeu a requisição e a está processando
			 // 4  = indica que o servidor  acabou de enviar a resposta da requisição 
			


