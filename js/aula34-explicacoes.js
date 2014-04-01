//DOM ( Document Object Model )
// DOM  HTML/CORE API

//http://www.w3schools.com/js/js_htmldom.asp
//http://www.w3schools.com/js/js_htmldom_document.asp
//http://www.w3schools.com/js/js_ex_dom.asp    // Exemplos de utilização da API DOM , exemplos trabalhando com o objeto Documet , Anchor(que são links no nosso documento ), exemplos trabalhando com botões , formulários

/*
O HTML DOM pode ser acessado com JavaScript (e com outras linguagens de programação).

No DOM, todos os elementos HTML são definidos como objetos .

A interface de programação são as propriedades e métodos de cada objeto.

A propriedade é um valor que você pode obter ou definir (como alterar o conteúdo de um elemento HTML).

Um método é uma ação que você pode fazer (como adicionar ou excluir um elemento HTML).

Exemplo :
var txt=document.getElementById("intro").innerHTML;

No exemplo acima, getElementById é um método , enquanto InnerHTML é uma propriedade .

*/


// É uma interface independente de plataforma e linguagem que permite aos programas e scripts  acessar e atualizar dinamicamente a estrutua , o conteúdo e a estilização de documentos , sejam eles HTML , XML ou qualquer outro documento

//Primeira versão do DOM - DOM nível 01 foi lançado pelo W3C

//DOM nivel 2 

//DOM nivel 3

//Temos 3 subconjuntos de APIs DOM

// - DOM CORE API
// - DOM HMTL API
// - DOM XML API 


/*** API DOM CORE ***/

// É uma API neutra quanto a linguagens e modelos que voce pode implementar em qualquer linguagem de programação, não precisa ser só em JavaScript, pode utilizar em Java , C  , em qualquer outra linguagem .
//E para qualquer modelo baseado em XML. 
//Na linguagem Java ,nós temos por exemplo , uma biblioteca chamada DOM , exatamente para manipular XML , que é baseada exatamente nessa API concebida pela W3C
//Essa API - DOM CORE - É o núcleo do DOM , ela fornece toda a funcionalidade que a gente vai precisar para modificar , remover ou criar novos conteúdos nas nossas páginas web, é uma API genérica que atende a qualquer tipo de docuemnto baseado em XML , HTML 

/*** API DOM HTML ***/

// É uma voltada pra documentos HTML , tem uma visão Orientada a Objetos HTML , cada elemento HTML eu tenho seu equivalente na API DOM HTML, trabalhar com a API DOM HTML é muito semelhante a trabalhar com a API BOM
// A diferença é que a API BOM , é uma implementação de cada um dos navegadores , cada navegador implementa do seu jeito 
// E a API DOM HTML , é uma API especificada pela W3C , ou seja, é uma tentativa de padronizar o acesso aos elementos HTML da mesma forma pra todos os browses 
// Vale ressaltar que a nossa API DOM CORE ,é a API mais genérica , e a nossa API DOM HTML , ela foi feita em cima dessa API CORE
// Então tudo que nós podemos DOM HTML , nós também conseguimos fazer com a API CORE , e é exatamente isso que nós vamos ver nessa aula

// Para cada um dos elementos HTML eu vou ter uma interface (interfaces dos objetos) equivalente com os seus respectivos Atributos ,e funções para serem acessados a partir da API DOM HTML , API especifica para trabalhar com documentos HTML 

// Temos alguns elemntos que são genéricos para qualquer tipo de documento
// Ex: elemento , atributo , nó 
//Seja um documento HTML ou XML
