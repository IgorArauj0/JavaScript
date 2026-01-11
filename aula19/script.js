// Função responsável por validar o login
function realizarLogin() {

    // Captura os valores digitados
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    // Seleciona elementos que serão manipulados
    const mensagem = document.querySelector('#mensagem');
    const areaRestrita = document.querySelector('#areaRestrita');

    // Credenciais simuladas (exemplo real)
    const emailValido = 'aluno@faculdade.com';
    const senhaValida = '123456';

    // Validação de campos vazios
    if (email.trim() === '' || senha.trim() === '') {
        mensagem.innerText = 'Preencha todos os campos.';
        mensagem.style.color = 'red';
        return;
    }

    // Verifica se os dados estão corretos
    if (email === emailValido && senha === senhaValida) {

        mensagem.innerText = 'Login realizado com sucesso!';
        mensagem.style.color = 'green';

        // Exibe a área restrita
        areaRestrita.style.display = 'block';

    } else {

        // Mensagem de erro
        mensagem.innerText = 'E-mail ou senha inválidos.';
        mensagem.style.color = 'red';
    }
}
