// Criando um elemento para o título
let titulo = document.createElement("h1");

// Manipulando o elemento
titulo.id = "titulo";
titulo.innerText = "Loja de Milk shake";

// Capturando o "elemento pai" dos elementos 'titulo' e 'produto'
let body = document.querySelector("body");

// Adicionando o elemento 'titulo' no DOM
body.appendChild(titulo);

// ------------------------------------------- //

// Criando um elemento para o produto
let produto = document.createElement("div");

// Manipulando o elemento
produto.innerHTML = `
  <div>
    <h2>Milk Shake Oreo</h2>
    <img src="./img/Milkshake-Oreo.jpg" alt="Milk Shake Oreo">
    <p>Sorvete de chocolate, leite, bolacha oreo, chantilly.</p>
    <p id="Milk shake oeo">R$ 14.90</p>
  </div>
`;

// Adicionando o elemento no dom
body.appendChild(produto)

