// O evento DOMContentLoaded garante que todo o HTML foi carregado
// antes de o JavaScript começar a executar.
document.addEventListener("DOMContentLoaded", function () {

    // Seleciona o formulário pelo ID definido no HTML
    const formulario = document.getElementById("campoFormulario");


    // Escuta o evento de envio (submit) do formulário
    formulario.addEventListener("submit", function (event) {

        // Antes de validar novamente, limpamos todas as mensagens de erro antigas
        resetarMensagensDeErro();


        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!validarCamposObrigatorio()) {

            // Caso exista erro, impede o envio do formulário
            event.preventDefault();
        }


        // Verifica se a senha e a confirmação de senha são iguais
        if (!compararValores()) {

            // Se forem diferentes, também impede o envio
            event.preventDefault();
        }

    });



    // ------------------------------------------------------------
    // FUNÇÃO: validarCamposObrigatorio
    // Verifica se todos os campos com a classe "obrigatorio"
    // possuem algum valor digitado
    // ------------------------------------------------------------
    function validarCamposObrigatorio() {

        // Seleciona todos os elementos que possuem a classe "obrigatorio"
        let camposObrigatorios = document.querySelectorAll(".obrigatorio");

        // Variável que indica se todos os campos estão válidos
        let camposValidos = true;

        // Percorre todos os campos encontrados
        for (let i = 0; camposObrigatorios.length > i; i++) {

            let campo = camposObrigatorios[i];

            // Se o campo estiver vazio ou nulo
            if (campo.value === "" || campo.value === null) {

                // Exibe a mensagem de erro no campo correspondente
                exibirErro(campo, "Este campo é obrigatório");

                // Marca que existe erro no formulário
                camposValidos = false;
            }
        }

        // Retorna true ou false informando se os campos estão válidos
        return camposValidos;
    }



    // ------------------------------------------------------------
    // FUNÇÃO: compararValores
    // Verifica se o valor digitado nos campos de senha
    // e confirmação de senha são iguais
    // ------------------------------------------------------------
    function compararValores() {

        // Seleciona os campos de senha
        const senha = document.getElementById("campoSenha");
        const confirmarSenha = document.getElementById("confSenha");

        // Se os valores forem diferentes
        if (senha.value !== confirmarSenha.value) {

            // Exibe erro no campo de confirmação de senha
            exibirErro(confirmarSenha, "As senhas não coincidem");

            return false;
        }

        // Caso sejam iguais, retorna verdadeiro
        return true;
    }



    // ------------------------------------------------------------
    // FUNÇÃO: exibirErro
    // Responsável por mostrar a mensagem de erro
    // abaixo do campo que apresentou problema
    // ------------------------------------------------------------
    function exibirErro(elemento, mensagem) {

        // Busca o elemento que contém a mensagem de erro
        // dentro do mesmo "form-group" do input
        let mensagemErro = elemento.parentElement.querySelector(".error-message");

        // Define o texto da mensagem
        mensagemErro.textContent = mensagem;

        // Torna a mensagem visível
        mensagemErro.style.display = "inline-block";
    }



    // ------------------------------------------------------------
    // FUNÇÃO: resetarMensagensDeErro
    // Remove todas as mensagens de erro exibidas anteriormente
    // ------------------------------------------------------------
    function resetarMensagensDeErro() {

        // Seleciona todos os elementos que exibem erro
        let mensagensErro = document.querySelectorAll(".error-message");

        // Percorre todos eles limpando o texto
        for (let i = 0; i < mensagensErro.length; i++) {

            mensagensErro[i].textContent = "";
        }
    }

});