function calcular() {
    
    let tempo;
    let velocidade;
    let distancia;
    let consumo;

    // ENTRADA DO DADO DE TEMPO
    tempo = parseFloat(document.querySelector('#TXTtempo').value);

    // ENTRADA DE DADO DE VELOCIDADE
    velocidade = parseFloat(document.querySelector('#TXTvelocidade').value);

    // CALCULO DE DISTANCIA
    distancia = velocidade * tempo;

    // CALCULO DE CONSUMO DE COMBUSTIVEL
    consumo = distancia / 12;

    //SAIDA (CONSUMO)
    document.querySelector('#resultado').innerHTML = consumo.toFixed(2);
}

// /FUNÇÃO DE LIMPAR FORMULÁRIO
function limpar() {
    document.querySelector('#TXTtempo').value = '';
    document.querySelector('#TXTvelocidade').value = '';
    document.querySelector('#resultado').innerHTML = '-';

}
