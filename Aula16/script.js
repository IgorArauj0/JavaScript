//Seleciona o body da página HTML
const body = document.querySelector('body');

//Função para alternar o tema
function alternarTema() {
//adiciona ou remove a class "dark"
    body.classList.toggle('dark');
}