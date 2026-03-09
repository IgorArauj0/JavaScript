// O evento DOMContentLoaded é disparado quando todo o HTML da página
// já foi carregado e convertido em elementos DOM pelo navegador.
// Isso garante que o JavaScript só será executado depois que
// todos os elementos da página existirem na memória.
document.addEventListener("DOMContentLoaded", function () {

    // Aqui estamos selecionando o formulário da página.
    // O método getElementById busca um elemento HTML pelo atributo "id".
    // No nosso caso ele procura pelo formulário que possui:
    // id="campoFormulario"
    const formulario = document.getElementById("campoFormulario");


    // Agora adicionamos um "ouvinte de evento" ao formulário.
    // Esse evento será executado sempre que o usuário tentar enviar
    // o formulário (clicando no botão Enviar).
    formulario.addEventListener("submit", function (event) {

        // PRIMEIRA ETAPA DA VALIDAÇÃO
        // ----------------------------------------------------
        // Antes de validar novamente os campos do formulário,
        // precisamos limpar todas as mensagens de erro que já
        // foram exibidas anteriormente.
        //
        // Isso evita que mensagens antigas permaneçam na tela
        // quando o usuário tentar enviar o formulário novamente.
        resetarMensagensDeErro();


        // SEGUNDA ETAPA DA VALIDAÇÃO
        // ----------------------------------------------------
        // Aqui chamamos a função responsável por verificar se
        // todos os campos obrigatórios foram preenchidos.
        //
        // Essa função retorna:
        // O operador "!" significa NEGAÇÃO LÓGICA.
        // "Se os campos NÃO forem válidos"
        // true  -> se todos os campos estiverem preenchidos
        // false -> se algum campo estiver vazio
        if (!validarCamposObrigatorio()) {

            // Se a função retornar FALSE, significa que existem
            // campos obrigatórios vazios.
            //
            // Nesse caso usamos "preventDefault()" para impedir
            // que o formulário seja enviado ao servidor.
            //
            // Isso permite que o usuário veja os erros e corrija
            // as informações antes de tentar enviar novamente.
            event.preventDefault();
        }


        // TERCEIRA ETAPA DA VALIDAÇÃO
        // ----------------------------------------------------
        // Aqui verificamos se o valor digitado no campo de senha
        // é igual ao valor digitado no campo de confirmação de senha.
        //
        // Essa função também retorna:
        // true  -> se as senhas forem iguais
        // false -> se as senhas forem diferentes
        if (!compararValores()) {

            // Se as senhas não coincidirem, o envio do formulário
            // também será bloqueado.
            //
            // Assim o usuário será obrigado a corrigir a senha
            // antes de conseguir enviar o formulário.
            event.preventDefault();
        }

    });

});



    // FUNÇÃO: validarCamposObrigatorio
    // Verifica se todos os campos com a classe "obrigatorio"
    // possuem algum valor digitado

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


  
    // FUNÇÃO: compararValores
    // Verifica se o valor digitado nos campos de senha
    // e confirmação de senha são iguais
  
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


    // FUNÇÃO: exibirErro
    // Responsável por mostrar a mensagem de erro
    // abaixo do campo que apresentou problema
    
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