// Função responsável por controlar a troca de conteúdo das Tabs
// É executada sempre que um botão (tab) é clicado
function abrirTab(evento, idConteudo) {

    /*Seleciona TODOS os botões com a classe "tab"
        Retorna uma lista de elementos*/
    document.querySelectorAll('.tab').forEach(tab => {
/*forEach percorre a lista de tabs. "tab" representa cada botão individual*/

        /*Remove a classe "ativo" de todas as tabs
            Assim, nenhuma fica selecionada inicialmente*/
        tab.classList.remove('ativo');
    });

    /*Seleciona TODOS os conteúdos das tabs
        Cada conteúdo corresponde a um botão*/
    document.querySelectorAll('.tab-conteudo').forEach(conteudo => {

        /*Percorre cada conteúdo
        Remove a classe "ativo" para ocultar todos*/
        conteudo.classList.remove('ativo');
    });

    /*evento.target representa exatamente
        o botão que foi clicado pelo usuário*/
    evento.target.classList.add('ativo');

    /*Exibe apenas o conteúdo correto
        idConteudo é o id enviado pelo botão no HTML*/
    document.getElementById(idConteudo).classList.add('ativo');
}
// O JavaScript primeiro desativa todas as tabs e conteúdos, depois ativa somente o botão clicado e exibe o conteúdo correspondente.