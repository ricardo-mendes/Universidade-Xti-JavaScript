/**** BENEFÍCIOS do DOM nivel 2  ****/

// Ele é baseado todo em uma especificação, existe todo um trabalho de especificação desses manipuladores de eventos
// Não é tão dependente de propriedades especificas de manipuladores de eventos , - a gente pode passar o nosso evento direto no parametro
// Eu posso criart até mesmo novos eventos ( só no DOM nível 2 )
// Eu posso registrar várias funções de manipuladores de eventos em um único documento html

window.onload = function(){
    var btn = document.getElementById("botao");
    btn.onclick = function(){return false}; // não vai pra aula 12 , que é um atributo que eu coloquei no elemento html hrfe="aula12.js"; , quebrei o manipulador de evento padrão do browse
    //btn.onclick = function(){um(); dois();}	// btn.onclick = function(){um(); dois();} // vai até funcionar , mas imagina se tivesse trabalhando com um script grande , dependendo da ação de um usuário eu adiciono mais um evento para ser manipulado e dependendo da ação eu aciciono outro evento para ser manipulado, ai eu não teria essa possibilidade
    //btn.onclick = function(){dois();}
    //só vai chamar o 2
	
    //btn.addEventListener("click", um, false);
    //btn.addEventListener("click", dois, false);  // atrelhou os dois manipuladores de evento pra um mesmo evento neste elemento
}

function um(){
   alert("um");
   //return false;  //Só vai funcionar quando estiver trabalhando com o botão , evento submit e eu quero travar aquele comportamento do botão de submeter o form
}	

function dois(){
   alert("dois");
}
