
function calcularIMC(){
 
	
	var formulario = document.getElementById("formulario");

    var kilos = +formulario.kilos.value;       // atributo name	, formulario.Kilos - retorna o campo   -   value o valor que esta no campo
	// + declara que essa variavel vai ter esse valor , se mão for valor numero ele vai converter em um numero
	// poderia tambem usat :  parseInt(formulario.kilos.value) 
	// se fosse number ele tambem trata como String
	
	var metros = +formulario.metros.value;     
	
	
	var centimetros = +formulario.centimetros.value;

    var altura = ((metros * 100) + centimetros)/100; 	    // 1 metro = 100 cm 
	//alert("Altura : "+altura);
	var imc = kilos / (altura * altura);
	//alert("Imc : "+imc);
	
	formulario.imc.value = imc.toFixed(2);   // para fixar o valor no campo e o numero de casas decimais depois da virgula , imc = variavel
	
	if (imc <=  20){
	    alert("Abaixo do Peso");
	} else if (imc > 20 && imc <= 25){
        alert("Peso ideal");
    } else if (imc > 25 && imc <= 30){
        alert("Sobre Peso"); 		  
	} else if (imc > 30 && imc <= 35){
        alert("Obesida Moderada"); 	
    } else if (imc > 35 && imc <= 40){
        alert("Obesidade Severa"); 	 		
	} else if (imc > 40 && imc <= 50){
        alert("Obesidade Morbida"); 		  
	} else if (imc > 50){
	     alert("Super Obesidade");
	} else {
	     alert("Dados errados");
	}
}

