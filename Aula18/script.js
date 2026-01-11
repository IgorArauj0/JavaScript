// Função responsável por processar a pré-inscrição do aluno
function processarInscricao() {

    // Busca no HTML o valor digitado no campo de nome
    const nome = document.querySelector('#nomeAluno').value;

    // Busca no HTML o curso selecionado pelo usuário
    const curso = document.querySelector('#curso').value;

    // Busca no HTML o turno selecionado pelo usuário
    const turno = document.querySelector('#turno').value;

    // Seleciona o elemento onde a mensagem final será exibida
    const resultado = document.querySelector('#resultado');

    // Verifica se algum campo está vazio
    // trim() remove espaços em branco antes e depois do texto
    if (nome.trim() === '' || curso === '' || turno === '') {

        // Exibe uma mensagem de erro para o usuário
        resultado.innerText = 'Por favor, preencha todos os campos para continuar.';

        // Interrompe a execução da função
        return;
    }

    // Caso todos os campos estejam preenchidos,
    // cria uma mensagem institucional personalizada
    resultado.innerText = 
        `Olá, ${nome}!
        
        Sua pré-inscrição no curso de ${curso}, 
        no turno da ${turno}, foi registrada com sucesso.

        Em breve, nossa equipe entrará em contato
        para dar continuidade ao processo seletivo.`;
}
