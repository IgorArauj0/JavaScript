// Função chamada ao enviar o formulário
function validarFormulario(event) {

    // Impede o envio automático do formulário
    event.preventDefault();

    // Captura os valores dos campos
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const curso = document.getElementById('curso').value;

    // Elemento onde exibiremos mensagens
    const mensagem = document.getElementById('mensagem');

    // Remove classes anteriores
    mensagem.classList.remove('sucesso', 'erro');

    // Validação dos campos
    if (nome.trim() === '' || email.trim() === '' || curso === '') {
        mensagem.innerText = 'Todos os campos são obrigatórios para a inscrição.';
        mensagem.classList.add('erro');
        return;
    }

    // Se tudo estiver correto
    mensagem.innerText = 'Inscrição realizada com sucesso! Nossa equipe entrará em contato.';
    mensagem.classList.add('sucesso');
}
