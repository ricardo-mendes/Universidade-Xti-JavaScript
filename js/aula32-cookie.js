function writeCookie(name, value, days){
    //Por defualt não exist expiração , o cookie é temporário 
	var expires = ""; //data de expiração
	
	//especifica o numero de dias para guardar o cookie
	if(days){ //se for maior que zero
	  var date = new Date();
	  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // dia atual + milissegundos , pois esse temo é em milissegunso
	  expires = "; expires" + date.toGMTString(); // data de expiração , essa String e a data formatada para GMTString
	} 
	
	if(value != "" && value != null && value != "null"){
	   //Define o cookie com o nome, valor e data de expiração
	   document.cookie = name + "=" + value + expires + "; path=/";
	} 
	
}

function readCookie(name){
    //Encontra o cookie espeficado e retorna o seu valor
	var searchName = name + "=";
	var cookies = document.cookie.split(';');
	for(var i=0; i < cookies.length; i++){
	  var c = cookies[i];
	  while(c.charAt(0) == ' ')
	     c = c.substring(1, c.length);
		 if(c.indexOf(searchName) == 0)
		    return c.substring(searchName.length, c.length);
	}
	  return null;
}

function eraseCookie(){  
   //Exclui cookie    // erase = apagar
   writeCookie(name, "", -1);
} 