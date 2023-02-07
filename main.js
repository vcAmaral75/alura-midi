//função toca som ------------------
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName == 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

/* 
quando for para um único elemento
*/
// document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');

//estrutura de repetição
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}` //'#som_' + instrumento -- para formar o texto do id usa template string entre crase

    //console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    //console.log(contador);

    tecla.onkeydown = function (evento) {
        // apenas para as teclas ESPAÇO ou ENTER
        // console.log(evento);

        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
