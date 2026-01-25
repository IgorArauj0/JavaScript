// Verifica se o usuário já aceitou os cookies
function verificarCookies() {

    // Busca no localStorage se existe a informação de consentimento
    const cookiesAceitos = localStorage.getItem('cookiesAceitos');

    // Se os cookies já foram aceitos, o banner não aparece
    if (cookiesAceitos === 'true') {
        document.getElementById('cookieBanner').style.display = 'none';
    }
}

// Função executada ao clicar em "Aceitar todos"
function aceitarCookies() {

    // Salva a escolha do usuário no navegador
    localStorage.setItem('cookiesAceitos', 'true');

    // Oculta o banner de cookies
    document.getElementById('cookieBanner').style.display = 'none';
}

// Executa a verificação assim que a página carrega
verificarCookies();
