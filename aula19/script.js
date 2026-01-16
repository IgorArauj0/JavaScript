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
    const emailValido = 'aluno@faculdade.com';
    const senhaValida = 'senha123';

    //trim() remove espaços em branco no início e no fim da string
   if (email.trim() === '' || senha.trim() === '') { 

    //Exibe mensagem de erro se algum campo estiver vazio
    mensagem.innerText = 'Por favor, preencha todos os campos.';

    //define a cor da mensagem como vermelha
    mensagem.style.color = 'red';

    return; //encerra a função

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