//COOKIES

//Relembrar o conceito de variáveis , é a forma que nós temos de atribuir um determinado valor a um nome , e assim poder utilizar esse valor em outros lugares do nosso Script
//O valor da nossa variável , só vai permanecr no browser, enquanto a página permanecer aberta ,quando fecha a página o JavaScript destrói todas as nossas variáveis que tivermos inicializados no nosso documento

//Eu quero que quando clicar na lâmpada , apareça o meu nome , mesmo depois de eu ter fechado a página

 //Cookies = são informações , que ficam armazenadas no computador do usuário , mesmo depois que fecha o browser, vão ser gravados no hd do usuário
 //Para segurança :
 // Tem uma série de restrições de segurança , armazenam pouca informação , não consegue executar programas a partir do cookie , por questões de segurança da propria linguagem , não precisa ficar preocupada com o que é que estão armazenando no meu computaodr atravé do JavaScript , pois ele tem todo um esquema de segurança que proibe qualquer tipo de acesso malicioso na máquina do usuário 
 
 //Posso armazenar informações em um servidor remoto , em um banco de dados um uma outra máquina , algumas informações é muito mais interessante a gente está armazenando localmente , o acesso é mais rápido , não precisa acessar a rede para poder pegar uma informação que está armazenado em outro banco de dados, o internauta tem a possibilidade de limpar os cookies  quando ele bem entender ,não vai poder limpar se tivesse num banco de dados



window.onload = function(){ 
     document.getElementById("xti").onclick = ligar; 
	 setInterval(apresentaHoras, 1000);
	 
	 var nome = readCookie("nome");//Antes de perguntar o nome, eu quero saber se o cookie já está gravado no computador do internauta
	 if(nome == null){
		 var nome = prompt("Qual o seu nome");
		 writeCookie("nome", nome, 1); // nome , o nosso valor é o próprio nome , e quero deixar ele armazenado por um dia
	 }
	 
	 //new Date().toGMTString(); // vai formatar a data no formato espperado pelo cookie
	 //consigo acessar e gravar informações dentro de um cookie
	 //document.cookie = "nome=valor; expires=data; path =/ ";  // nome do cookie, valor do cookei, data de expiração , caminho
	 //Nossos cookies podem ter no máximo 4k de tamanho , não vai colocar um objeto gigantesco ai dentro
	 //A gente só poder armazer 20 cookies por dominio , em caminho(path) , quando eu coloco uma / , significa que esse cookie é um cookie do dominio que nós estamos carregando junto com esse JavaScript 
	 //Qual é o dominio ?
	 // O dominio é file , nosso diretório file:///C:
	 //Poderia também está acessando um outro dominio , xti.com.br
	 // Se nós colocarmos um diretório , ex : "path=/pessoas}". Significa que esse cookie é apenas para ser acessado por páginas que estejam dentro do diretório pessoas na raiz do nosso dominio, todos os cookies estão vinculados com a página que você criou o cookie.	 
	 
	 //Todos os cookies estão vinculados com a página que você criou o cookie
	 
	 //E ele tem também uma data de expiração , que precisa estar no formato gmt  
}

function ligar(){
    document.getElementById("xti").src = "img/xlamp_on.png";
	
	var nome = readCookie("nome");
	if(nome != null){
	   alert("É bom estar com você " + nome);
	}
	setTimeout(desligar , 3000);
}

function desligar(){
    document.getElementById("xti").src = "img/xlamp_off.png";
}

function apresentaHoras(){
    var agora = new Date();
	var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
	document.getElementById("horas").innerHTML = horas;
}






