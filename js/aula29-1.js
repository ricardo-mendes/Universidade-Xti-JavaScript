
//Eventos (HTML, DOM0 e DOM2)

//Manipulaodor de Evento DOM nível 0 ( API antiga )

/*window.onload = function(){
     var btn = document.getElementById("botao");
	 //para desatrelhar um manipulator de evento a um elemento basta fazer  btn.onclick = null;
	 btn.onclick = function(){
	     um();
	 }
}

function um(){
   alert("um");
}*/

//API mais recente do DOM - o DOM nível 2

window.onload = function(){

    var btn = document.getElementById("botao");
    btn.addEventListener("click", um, false ); // 1º parâmetro - evento que quero disparar , 2º parametro - a função que queremos utilizar
	// 3º parametro - indica se eu quero tratar o meu evento com propagação de evento
    //obs : ir no site da w3schools - Dom Events
    //o evento é click , mas o atributo das tags html é onclick , assim com os demais atributos
    //O nosso manipulador de eventos vai associar esse elemento através do seu atributo , nesse caso seria o onclick 
	
	//Se nós quisermos remover esse evento desse elemento :
	//btn.removeEventListener("click" , um , false);
}


function um(){
   alert("um");
}	

function dois(){
   alert("dois");
}





