// Função responsável por controlar a troca de conteúdo das Tabs
function abrirTab(evento, idConteudo) {

    /*document.querySelectorAll('.tab')
           - Seleciona TODOS os botões que possuem a classe "tab"*/
    document.querySelectorAll('.tab').forEach(tab => {
        /*forEach percorre cada item da lista, um por um
                    Aqui, "tab" representa cada botão individual*/

        tab.classList.remove('ativo');/*
            Remove a classe "ativo" de todas as tabs
            Isso garante que apenas uma tab fique ativa por vez*/
    });

    /*
        Seleciona TODOS os conteúdos das tabs
        (cada bloco de texto correspondente a uma tab)
    */
    document.querySelectorAll('.tab-conteudo').forEach(conteudo => {

        /*
            Percorre cada conteúdo e remove a classe "ativo"
            Assim, todos os conteúdos ficam ocultos
        */
        conteudo.classList.remove('ativo');
    });

    /*
        evento.target representa exatamente
        o botão que o usuário clicou
    */
    evento.target.classList.add('ativo');

    /*
        Exibe apenas o conteúdo que corresponde
        à tab clicada, usando o id recebido
    */
    document.getElementById(idConteudo).classList.add('ativo');
}
