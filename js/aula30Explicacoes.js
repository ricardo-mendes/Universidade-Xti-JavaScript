// BOM 

// browser object model 

//É a parte da linguagem que descreve os objetos do browse, através do BOM , vamos acessar as propriedades e funções do browse
//o BOM não está previsto em nenhuma outra especificação w3c , por exemplo
//Mas ele é bem implementado na maioria dos navegadores , muitas das funcionalidades do BOM tem equivalentes na API DOM

//Sempre que tivemos uma função equivalente na API do DOM a gente deverá utilizar o DOM ao invés do BOM, até porque como o BOM , ele não tem especificações pra definir um padrão exato  , é melhor  utilizar uma API toda padronizada. 

//Todas as implementações JavaScript feitas para o BOM , ficaram a critério dos fabricantes de browse

//O BOM está acessível através do objeto Window 
//No objeto Window temos algumas funções para auxiliar na criação de janelas , que são exatamentes , a janela de um browse , a janela onde a gente abre um documento web , 
//nós temos funçoes como já vimos , para criar uma janela de alerta , um prompt , prar criar uma janela de confirmação 
//Nós temos funcionalidades que permitem criar temporizadores, ou seja , definir que de tanto em tanto tempo uma determinada ação JavaScript deverá acontecer.

//No objeto Window , temos acesso aos documentos , dentro de documentos nós podemos acessar os formularios  HTML , podemos gravar informações para acessar em um segundo momento , pra caso a gente venha fechar o navegador , quando a gente voltar a abrir o navegador novamente , a gente pode acessar informações que ficaram gravadas no computador através dos cookies 

//Através do objeto Window a gente tem acesso também aos links , imagens , ao objeto navigator (onde vamos encontrar informações a respeito do nosso navegador , qual o navegador, qual o S.O que estamos utiizando)

//objeto location vai nos dizer qual a nossa localização , qual o servidor , porta, protocolo, pagina que estamos utilizando 

//objeto Screen , onde nós temos informações sobre a largura da tela , a largura do nosso browser , onde ele está posicionado na tela

//objeto history - vai mostrar pra gente , quais foram as páginas que nós já acessamos , através dele a gente pode voltar no histórico das páginas , ou pode , ir para uma página qu a gente já acessou , andar pra frente e pra trás no histórico de navegação 


window.onload = function(){

     //alert("oi"); //função implementada pelos fabricantes de browse , eu posso acessar essa função sem a necessidade de colocar o objeto window, que é o objeto mais genérico
	 //confirm("Você quer viajar");
	 //prompt("Qual a tecnologia que você mais gosta");
	 
	 //Podemso criar janelas personalizadas
	 //window.open("JavaScript_aula05.html", "xti", "width=300,height=500,toolbar=no,Location=no");  // criar um POP-UPS
	 // Com a função open() eu posso informar um determinada endereço , um título pra janela e posso colocar outras propriedades
	 
	 //Através do BOM , a gente pode manipular qualquer janela que a gente estiver mexendo 
	 //window.resizeTo(300,300); //quero redimensionar minha janela
	 window.moveTo(300,300)//quero mover minha janela

}






