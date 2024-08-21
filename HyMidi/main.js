// Função que toca um som baseado no seletor do áudio
function tocaSom(seletorAudio) {
    // Seleciona o elemento de áudio usando o seletor
    const elemento = document.querySelector(seletorAudio);

    // Verifica se o elemento existe e é um elemento de áudio
    if (elemento && elemento.localName === 'audio') {
        elemento.play(); // Toca o áudio
    } else {
        // Caso não encontre o elemento ou o seletor seja inválido
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

// Seleciona todas as teclas com a classe 'tecla'
const listaDeTeclas = document.querySelectorAll('.tecla');

// Itera sobre cada tecla na lista
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]; // Obtém a tecla atual
    const instrumento = tecla.classList[1]; // Obtém o nome do instrumento a partir da classe
    const idAudio = `#som_${instrumento}`; // Cria o seletor do áudio usando template string

    // Define a ação de clique na tecla
    tecla.onclick = function () {
        tocaSom(idAudio); // Toca o som correspondente
    };

    // Define a ação quando uma tecla é pressionada
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa'); // Adiciona a classe 'ativa' quando a tecla é pressionada
        }
    };

    // Define a ação quando a tecla é liberada
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa'); // Remove a classe 'ativa' quando a tecla é liberada
    };
}
