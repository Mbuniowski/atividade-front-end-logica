let lado1;
let lado2;
let lado3;

function calcularTraingulo(){

    lado1 = parseInt(document.querySelector("#lado1").value);
    lado2 = parseInt(document.querySelector("#lado2").value);
    lado3 = parseInt(document.querySelector("#lado3").value);

    let imgTriangulo = document.querySelector('#imgTriangulo');

    console.log('LADO 1: ' + lado1);
    console.log('LADO 2: ' + lado2);
    console.log('LADO 3: ' + lado3);

    if ((lado1 == lado2) && (lado1 == lado3)) {
        document.querySelector("#tipo").innerHTML = "EQUILÁTERO";
        imgTriangulo.setAttribute('src', 'img/equilatero.png');
    }else if ((lado1 != lado2) && (lado1 != lado3) && (lado2 != lado3)) {
        document.querySelector("#tipo").innerHTML = "ESCALENO";
        imgTriangulo.setAttribute('src', 'img/escaleno.png');
    }else{
        document.querySelector("#tipo").innerHTML = "ISÓCELES";
        imgTriangulo.setAttribute('src', 'img/isosceles.png');
    }

}