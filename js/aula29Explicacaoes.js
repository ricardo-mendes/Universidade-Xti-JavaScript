//Eventos (HTML, DOM0 e DOM2)

//Eventos são interações com o documento web, toda vez que a gente interage com uma pagina web a gente dispara eventos
//O evento é qualquer ocorrência interativa com o nosso HTML
//Evento é o clique

//MANIPULADORES DE EVENTOS
// São as funções a serem executadas quando um evento acontecer
//quando eu clicar em um botão ele deverá disparar uma função (essa função que vai ser executada é o meu manipulador de evento
//Manipualdor é a função JavaScript que nós vamos associar a esse evento nesse elemento

// E o Disparador de Evento é o próprio elemento html 

//Alguns disparadores de evento tem o seu manipulador de evento padrão
//ex: o link<a> quando a gente clica sobre ele , o browse já tem um manipulador de evento padrão pra ele (levar o internauta ao endereço que estiver associado ao  atributo href)
//Esse é o manipulador de evento padrão do browse

//Nós temos como associar um outro evento substituindo o nosso manipulador de evento padrão
//É possível cancelar a ação do manipulador padrão de evento, se a gente colocar a declaração :
// return false;  // No nosso manipulador de evento customizado
//Se na função que nós chamamos quando um evento ocorre , eu no final dela colocar essa declaração return false, nós vamos eliminar a chamada ao próximo manipulador de evento, seria o manipulador de evento padrão

/** Como atrelhamos um manipulador de evento a um disparador de evento , ou seja a um elemento html ***/

//Pode fazer isso via html
// Via DOM 0 , usando a API DOM mais antiga
//via DOM 2, usando a API DOM mais recente

/**** BENEFÍCIOS do DOM nivel 2  ****/

// Ele é baseado todo em uma especificação, existe todo um trabalho de especificação desses manipuladores de eventos
// Não é tão dependente de propriedades especificas de manipuladores de eventos , - a gente pode passar o nosso evento direto no parametro
// Eu posso criart até mesmo novos eventos ( só no DOM nível 2 )
// Eu posso registrar várias funções de manipuladores de eventos em um único documento html