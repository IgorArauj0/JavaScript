// Seleciona o formulário
const formulario = document.querySelector('#formulario');

// Captura o evento de envio
formulario.addEventListener('submit', function (evento) {

    // Impede o envio padrão do formulário
    evento.preventDefault();

    // Valida os campos
    validarCampos();
});


// Função principal de validação
function validarCampos() {

    validarNome();
    validarEmail();
    validarSenha();
}


// Validação do nome
function validarNome() {
    const nome = document.querySelector('#nome');
    const campo = nome.parentElement;

    if (nome.value.trim() === '') {
        campo.classList.add('invalido');
        campo.classList.remove('valido');
        campo.querySelector('.erro').innerText = 'Nome obrigatório';
    } else {
        campo.classList.add('valido');
        campo.classList.remove('invalido');
        campo.querySelector('.erro').innerText = '';
    }
}


// Validação do e-mail
function validarEmail() {
    const email = document.querySelector('#email');
    const campo = email.parentElement;

    if (email.value.trim() === '' || !email.value.includes('@')) {
        campo.classList.add('invalido');
        campo.classList.remove('valido');
        campo.querySelector('.erro').innerText = 'E-mail inválido';
    } else {
        campo.classList.add('valido');
        campo.classList.remove('invalido');
        campo.querySelector('.erro').innerText = '';
    }
}


// Validação da senha
function validarSenha() {
    const senha = document.querySelector('#senha');
    const campo = senha.parentElement;

    if (senha.value.length < 6) {
        campo.classList.add('invalido');
        campo.classList.remove('valido');
        campo.querySelector('.erro').innerText = 'Mínimo 6 caracteres';
    } else {
        campo.classList.add('valido');
        campo.classList.remove('invalido');
        campo.querySelector('.erro').innerText = '';
    }
}
