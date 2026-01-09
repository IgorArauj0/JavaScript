
function mostrarConteudoSimples(botao) {

    //A partir do botão clicado (botao)
    //Acessa o elemento pai da sessão, e dentro dele, localiza o elemento com a class ".conteudo"
    //Isso garante que cada botão controle apenas o conteúdo da sua própria sessão
    const conteudo = botao.parentElement.querySelector('.conteudo');

    //Alterna a visibilidade do conteúdo
    // Toggle = Utilizado para realizar alternâncias
    conteudo.classList.toggle('ativo');

    botao.textContent = conteudo.classList.contains('ativo')
      ? 'Ocultar conteúdo' //Se a condição acima for verdade, ele altera o texto para "ocultar conteúdo"
      : 'Mostrar conteúdo'; //Caso contrário, ele alterna para "mostrar conteúdo"
}

function mostrarConteudoAvancado(botao) {
    
}