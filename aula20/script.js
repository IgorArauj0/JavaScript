// Abre o modal de aviso institucional
function abrirModalAviso() {
    document.querySelector('#modalAviso').classList.add('ativo');
    document.querySelector('#overlay').classList.add('ativo');
}

// Abre o modal do calendário acadêmico
function abrirModalCalendario() {
    document.querySelector('#modalCalendario').classList.add('ativo');
    document.querySelector('#overlay').classList.add('ativo');
}

// Fecha qualquer modal aberto
function fecharModais() {
    document.querySelector('#modalAviso').classList.remove('ativo');
    document.querySelector('#modalCalendario').classList.remove('ativo');
    document.querySelector('#overlay').classList.remove('ativo');
}
