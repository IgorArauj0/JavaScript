<<<<<<< Updated upstream
<<<<<<< Updated upstream
// Função responsável por validar o Login do usuário
function realizarLogin() {
    //captura os valores dos campos de input
    const email = document.querySelector('#email').value;

    //captura o valor do campo de senha
    const senha = document.querySelector('#senha').value;

    //seleciona o elemento onde a mensagem será exibida
    const mensagem = document.querySelector('#mensagem');

   //seleciona a área restrita que será exibida após o login
    const areaRestrita = document.querySelector('#areaRestrita');

    //credenciais simuladas para validação (do lado do cliente)
=======
// Função responsável por validar o login do usuário
function realizarLogin() {

    // Captura o valor digitado no campo de e-mail
    const email = document.querySelector('#email').value;

    // Captura o valor digitado no campo de senha
    const senha = document.querySelector('#senha').value;

    // Seleciona o elemento onde as mensagens serão exibidas
    const mensagem = document.querySelector('#mensagem');

    // Seleciona a área restrita que será exibida após o login
    const areaRestrita = document.querySelector('#areaRestrita');

    // Credenciais simuladas para validação (exemplo didático)
>>>>>>> Stashed changes
    const emailValido = 'aluno@faculdade.com';
    const senhaValida = 'senha123';

<<<<<<< Updated upstream
    //trim() remove espaços em branco no início e no fim da string
   if (email.trim() === '' || senha.trim() === '') { 

    //Exibe mensagem de erro se algum campo estiver vazio
    mensagem.innerText = 'Por favor, preencha todos os campos.';

    //define a cor da mensagem como vermelha
    mensagem.style.color = 'red';

    return; //encerra a função

=======
=======
// Função responsável por validar o login do usuário
function realizarLogin() {

    // Captura o valor digitado no campo de e-mail
    const email = document.querySelector('#email').value;

    // Captura o valor digitado no campo de senha
    const senha = document.querySelector('#senha').value;

    // Seleciona o elemento onde as mensagens serão exibidas
    const mensagem = document.querySelector('#mensagem');

    // Seleciona a área restrita que será exibida após o login
    const areaRestrita = document.querySelector('#areaRestrita');

    // Credenciais simuladas para validação (exemplo didático)
    const emailValido = 'aluno@faculdade.com';
    const senhaValida = '123456';

<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
    // Verifica se algum campo está vazio
    // trim() remove os espaços em branco antes e depois do texto digitado
    // Isso evita que o campo seja considerado preenchido apenas com espaços
    if (email.trim() === '' || senha.trim() === '') {

        // Exibe mensagem de aviso para o usuário
        mensagem.innerText = 'Preencha todos os campos.';

        // Define a cor da mensagem como vermelha
        mensagem.style.color = 'red';

        // Interrompe a execução da função
        return;
    }

    // Verifica se o e-mail e a senha informados estão corretos
    if (email === emailValido && senha === senhaValida) {

        // Exibe mensagem de sucesso
        mensagem.innerText = 'Login realizado com sucesso!';

        // Define a cor da mensagem como verde
        mensagem.style.color = 'green';

        // Exibe a área restrita do sistema
        areaRestrita.style.display = 'block';

    } else {

        // Exibe mensagem de erro quando os dados não conferem
        mensagem.innerText = 'E-mail ou senha inválidos.';

        // Define a cor da mensagem como vermelha
        mensagem.style.color = 'red';
    }
>>>>>>> Stashed changes
}

if(email === emailValido && senha === senhaValida) {

    //Exibe mensagem de sucesso
    mensagem.innerText = 'Login realizado com sucesso!';

    //define a cor da mensagem como verde
    mensagem.style.color = 'green';

    //exibe a área restrita
    areaRestrita.style.display = 'block'; 

} else {

    //Exibe mensagem de erro para credenciais inválidas
    mensagem.innerText = 'Email ou senha inválidos. Tente novamente.';

    //define a cor da mensagem como vermelha
    mensagem.style.color = 'red';

   }
}