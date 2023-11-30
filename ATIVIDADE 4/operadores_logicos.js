/*Declaracão das variáveis*/
let ladoA;
let ladoB;
let ladoC;
let resultado;

function testar() {
    ladoA = parseInt(document.querySelector('#ladoA').value);
    ladoB = parseInt(document.querySelector('#ladoB').value);
    ladoC = parseInt(document.querySelector('#ladoC').value);
    resultado = document.querySelector('#resultado');

    let validacao = validar();

    if (validacao) {

        operadorAnD();

    } else {
        return false
    }
}

function validar() {
    if (!(ladoA > 0)) {
        alert('Digite valores maiores do que 0 no lado A');
        document.querySelector('#ladoA').focus();
        return false
    } else if (!(ladoB > 0)) {
        alert('Digite valores maiores do que 0 no lado B')
        document.querySelector('#ladoB').focus();
        return false
    } else if (!(ladoC > 0)) {
        alert('Digite valores maiores do que 0 no lado C')
        document.querySelector('#ladoC').focus();
        return false
    } else {
        return true
    }
}


//FUNÇÃO DO OPERADOR
function operadorAnD() {
    let imgOperacao = document.querySelector('#imgOperacao');

    if (ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
        imgOperacao.setAttribute('src', './IMG/Equilátero.PNG');
        resultado.innerHTML = 'Este triangulo e EQUILÁTERO!';
    }

    else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        resultado.innerHTML = 'Este triangulo é um ISÓSCELES!'
        imgOperacao.setAttribute('src', './IMG/Isósceles.PNG');

    }
    else {
        resultado.innerHTML = 'Este triangulo é um ESCALENO!'
        imgOperacao.setAttribute('src', './IMG/Escaleno.PNG');
    }
}
//FUNÇÃO DE LIMPAR FORMULÁRIO
function limpar() {
    document.querySelector('#ladoA').value = '';
    document.querySelector('#ladoB').value = '';
    document.querySelector('#ladoC').value = '';
    document.querySelector('#resultado').innerHTML = '-';
    imgOperacao.setAttribute('src', '');
}

// OR || SE UM FOR VERDADEIRO RETORNA VERDADEIRO
// AND && SE UM FOR FALSO RETORNA FALSO