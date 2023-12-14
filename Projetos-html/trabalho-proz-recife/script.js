function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Carregue a página inicial por padrão
loadPage("index.html");
