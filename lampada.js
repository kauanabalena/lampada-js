var lamp = window.document.getElementById('lampada')

function estaQuebrada(){
    return lamp.src.indexOf('quebrar') > -1
}

function Ligar(){
    if (!estaQuebrada()){
    lamp.src = 'img/ligar.svg'}
}

function Desligar(){
    if (!estaQuebrada()){
    lamp.src = 'img/desligar.svg'}
}

lamp.addEventListener('click', Quebrar)

function Quebrar(){
    lamp.src = 'img/quebrar.svg'
}