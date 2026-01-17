// Função responsável por iniciar e atualizar o relógio
function iniciarRelogio() {

    // Seleciona o elemento HTML que exibirá o horário (ex: <span id="relogio"></span>)
    const elementoRelogio = document.querySelector("#relogio");

    // Executa um código repetidamente a cada 1000 milissegundos (1 segundo)
    return setInterval(() => {

        // Cria um novo objeto Date com a data e hora atuais do sistema
        let dataAtual = new Date();

        // Converte a hora atual para o formato local (HH:MM:SS)
        let horaAtual = dataAtual.toLocaleTimeString();

        // Atualiza o conteúdo do elemento HTML com a hora atual
        elementoRelogio.textContent = horaAtual;

    }, 1000); // Intervalo de 1 segundo
}

// Chama a função para iniciar o relógio assim que o script é executado
iniciarRelogio();
