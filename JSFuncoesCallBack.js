window.onload = function(){
	 /*
			var pessoa = function(nome, olaNoConsole){
				olaNoConsole(nome);
			}
			
			var olaNoConsole = function(nome){
				alert("Nome : " + nome);
			}
			
			pessoa("Ricardo" , olaNoConsole)*/
			
			/*
			var pessoa = function(nome , dizerOla){
				dizerOla(nome);
			}
			
			pessoa("Mendes", function(nome){
				alert("Nome : " + nome);
			})*/
			
			//__________________________
			
			
			// ; é necessario
			// Por que se colocar == true dá erro
			// style
			// Como criar objetos, seus atributos e métodos
			//não tem classe , mas tem objetos, como então eu tenho contrutor , e como faz um método ?
			
			
			var campoVermelho = function(campo){
				campo.setAttribute("style", "border: 1px solid red");
				//campo.setAttribute("style", "width: 500px;");
			};
			
			var campoAzul = function(campo){
				campo.setAttribute("style", "border: 1px solid blue");
			}
			
			
			//Lista Campos
			
			var listaCampos = function(callback){
				var campos = document.getElementsByTagName("p");
				var totalItens = campos.length , i;
				
				if(typeof callback !== 'function'){
					callback = false;
				}
				
				for(i = 0; i < totalItens; i++){
					if(callback){  // Por que se colocar == true dá erro
						callback(campos[i]);
					}
				}			
				return campos;			
			};
			
			//___________________________
			
			var customCampo = {
				'cor' : 'red',
				'defineCor' : function(campo){
					campo.setAttribute("style", "border: 1px solid " + this.cor);
				}
			};
			
			//listaCampos(customCampo.defineCor);
			
			
			//__________________________
			//ESCOLHE COR 
			
			var blue = document.getElementById("azul");
			var red = document.getElementById("vermelho");
			
			
			blue.onclick = function(){
				listaCampos(campoAzul);
			}
			
			//blue.addEventListener("click", listaCampos(campoAzul), false);
			
			
			red.onclick = function(){
				listaCampos(campoVermelho);
			}
			
			
					
			
}