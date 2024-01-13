// Captura dos elementos do HTML
const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.getElementById("link");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adiciona conteúdo aos elementos usando .innerText e .innerHTML
titulo.innerText = "Code Park 1";
link.innerText = "Link para Proz Educação";

// Adiciona itens simples à lista não ordenada usando .innerHTML
listaNaoOrdenada.innerHTML = "<li>Onde pesquisar</li><li>Aprenda sobre JS</li><li>Sobre DOM</li>";

// Adiciona itens com links à lista ordenada usando .innerHTML
listaOrdenada.innerHTML =
  '<li><a href="https://google.com.br">Google</a></li>' +
  '<li><a href="https://www.mundojs.com.br/2019/07/18/diferencas-entre-innerhtml-innertext-e-textcontent/">MundoJS</a></li>' +
  '<li><a href="https://www.youtube.com/watch?v=WWZX8RWLxIk">Youtube</a></li>';
