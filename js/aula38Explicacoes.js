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
		  
			 var ajax = new XMLHttpRequest(); //através desse objeto que fazemos todas as requisiçoes
			 //ser acionado quando uma requisição ao servidor tiver chegado , Ajax vem de Asynchronous ( significa que alguma operação vai acontecer por debaixo dos panos)
			 //ação sincrona = uma ação que eu disparo e espero retorno dela pra fazer uma outra ação. Ex: Eu clico em um link e tenho que esperar o processo de submissão dessa requisição ao servidor e esperar a página ser retornada pra mim do servidor
			 
			 //processo assincrono = eu posso disparar um link , e a partir do momento que disparei esse link eu posso continuar navegando na página e fazendo outras ações e assim que o servidor tivesse retornado uma ação pra mim e ele vai trazer essa informação pra mim na página
			 
			 //Como sabemos que um processo terminou de ser executado ?
			 //Através de um evento do nosso objeto Ajax, do nosso HttpRequest , esse envento que é o  onreadystatechange , informa pra gente que houve alguma alteração, houve uma resposta do servidor a uma requisição nossa , sempre que o cliente faz uma requisição ao servidor e o servidor dá algum tipo de resposta, acontece algum tipo de atualização no status da comunicação entre ele e o servidor , então essa alteração no status vai ser informada nesse evento
			 //A primeira coisa que a gente tem que fazer é atrelar um evento , um manipualdor de evento pra quando alguma coisa acontecer 
			 //a gente poderia fazer o tratamento da informação que a gente tá requisitando para o servidor
			 
			 //como que sabemos o status da nossa comunicação ?
			 //atrvés a propriedade readyState , vai informa o status da nossa comunicação com o servidor
			 //Pode ter 5 valores /status
			 // 0  = indica uma comunicação não iniciada com o servidor
			 // 1  = indica que houve um inicio de comunicação
			 // 2  = indica que houve um inicio de requisição ao servidor, que a gente encaminhou alguma coisa para o servidor
			 // 3  = informa que o servidor está em processo de envio de resposta ,servidor recebeu a requisição e a está processando
			 // 4  = indica que o servidor  acabou de enviar a resposta da requisição 
			

			ajax.onreadystatechange =  function(){
			      if(ajax.readyState == 4){  
				      alert("requisição chegou");
				  }
			}
			 
			 //está faltando qual endereço a gente quer acessar 
			
			 /**1º Parâmetro - método que nós vamos utilizar pra realizar a requisição , exsitem 2 métodos principais - **/
			 //get(manipula pequena quantidade de informações)
			 //post(manipula grande quantidade de informações)
			 
			 /**2º Parâmetro - URL **/
			 //qual arquivo , servidor que quero acessar
			 //pode utililzar um valor relativo, absoluto para o endereço, ou caminho completo do endereço
			 
			 /**3º Parâmetro - Não é obrigatório , mas informa se a função vai ser assicrona ou sincrona**/
			 //Se não informarmo nada vai ser assincrona ou true
			 //requisição sincrona - false
			 
			 /** Tem mais 2 parâmetros que dificilmente vai utilizar **/
			 //Usuário e senha 
			 //Por que dificilmente vai utilizar ?
			 //Esses parâmetros servem pra fazer uma conexão segura e autentificada em uma determinada página, e se colocar um usuário e senha direto no Javacript , isso fica vulnerável , porque qualquer pessoa que entrar no meu JavaScript e ler esses paramtros, vão saber quais são essas credenciais
			 
			 
			 //ajaxa.open(); // open indica para o ajaz onde ele tem que acessar
			 // ajaxa.open("POST", "http://www.xti.com.br"); //endereço completo
			 ajax.open("POST", "ajax/arquivo.txt");  //endereço relativo a essa página que estamos utilizando 
			
      		//ajax.send(null); //essa função é que realmente vai inciar a conexão com o servidor 
			//Pode utilizar ela sem passar nenhuma informação , nesse caso eu não quero passar nenhum parâmetro adicional ao arquivo txt , mas se estivéssemos acessando uma página que recebe alguns parametros , a gente poderia passar os parametros aqui
			//ajax.send("param1=xpto&param2=xti.brazil"); //mesma sintaxe utilizada na url das nossas páginas 
			ajax.send(null);
			return false;
		}
}