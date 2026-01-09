//getAttribute - Para obter o valor do atributo (valor da linha);
//setAttribute - Definir ou modificar valor

function changeImage() {
    const img = document.getElementById("myImage");
    // Aqui conseguimos armazenar o conteúdo da linha do IMG do HTML

    const obterValor = img.getAttribute("src");
    //Aqui pegamos o atributo SRC da img para futuras ações

    if (obterValor === "github-black.png") {
        img.setAttribute("src", "github-blue.png"); // Usando o SetAttribute para modificar o valor da Linha

    }  else {
        img.setAttribute("src", "github-black.png");
        img.setAttribute("alt", "Imagem gitHub Black")
    } // Aqui ele olhará para o caso contrário, ou seja, a img azul do GitHub quando estiver ativa
}