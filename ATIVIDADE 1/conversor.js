let temperatura;
let escala = ';'
let resultado;

function conversor() {

temperatura = parseFloat(document.querySelector('#TXTtemperatura').value);
escala = document.querySelector('#slcEscala').value;

console.log(temperatura);

// VERIFICA SE É O OPERADOR E CELSIUS
if (escala == 'celsius') {
    resultado = (temperatura - 32) / 1.8;
    //SAIDA (VALOR CONVERSÃO)
    document.querySelector('#resultado').innerHTML = resultado;
    //converter();

}
// VERIFICA SE É O OPERADOR E Fahrenheit
if (escala == 'Fahrenheit') {
    resultado = temperatura * 1.8 + 32;
    //SAIDA (VALOR CONVERSÃO)
    document.querySelector('#resultado').innerHTML = resultado;
    //converter();
}
}

// }
//FUNÇÃO DE LIMPAR FORMULÁRIO
function limpar(){
    document.querySelector('#TXTtemperatura').value = '';
    document.querySelector('#slcEscala').value = '';
    document.querySelector('#resultado').innerHTML = '-';
  
}
   
