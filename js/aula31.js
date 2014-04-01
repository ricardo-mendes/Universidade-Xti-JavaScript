// TEMPORIZADORES

// Permitem determinar um intervalo de tempo para que uma função seja executada.

//Temos 2 tipos :

// Um que não se repete e outro que se repete em um intervalo de tempo



window.onload = function(){ // Aplica um manipulador de evento , assim que a página for carregada
     document.getElementById("xti").onclick = ligar; //Tem que colocar sem os parenteses, pois  não está chamando a função e sim atribuindo a função a um evento. Perque é document.getElementById()
	 
	 setInterval(apresentaHoras, 1000);
}

function ligar(){
    document.getElementById("xti").src = "img/xlamp_on.png";
	//Não se repete
	//setTimeout("desligar()", 3000);  //função e o intervalo em milissegundos que eu quero que essa função execute a função que estou passando
	//ao invés de passar com "" - fazendo uma chamada JavaScript , poderíamos colocar uma referência ao nome da função sem estar entre String , se for entre aspas pode colocar um código JavaScript 
	setTimeout(desligar , 3000);
	
	//clearTimeout(chave);//Pode limpar o timeout do temporizador , passa por paramêtro a chave do nosso temporizador , ela é criada quando executa a função setTimeout() , eu teriq que fazer :
	//var chave = setTimeout(...) ; clearTimeout(chave);
}

function desligar(){
    document.getElementById("xti").src = "img/xlamp_off.png";
}

function apresentaHoras(){
    var agora = new Date();
	var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds();
	document.getElementById("horas").innerHTML = horas;
}