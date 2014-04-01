
//12345678900
function validar(){

    var formulario = document.getElementById("formulario");
	var cpf = formulario.cpf;
	var email = formulario.email;
	
	var re_cpf = /(\d{3})(\d{3})(\d{3})(\d{2})$/;
	var re_email = /^([\w-]+(\.[\w-]+)*)@(( [\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(\.[a-z]{2})?)$/i;
	
	if(re_cpf.test(cpf.value)){
	   alert("CPF Válido");
	   cpf.value = cpf.value.replace(re_cpf, "$1.$2.$3-$4"); // Eu atrubui ao valor do cpf o valor que tinha lá dentro , alterando o formato do valor
	}else{
	   alert("CPF deve ter apenas 11 numeros sem ponto ou traço");
	}
	
	//verificando se o e-mail é inválido !
	if(!re_email.test(email.value)){
	    alert("E-mail Inválido");
	}else{
	     alert("E-mail válido");
	}
}

