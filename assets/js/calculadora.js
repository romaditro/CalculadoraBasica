//
//visor

var operando_a = "";
var operando_b = "";
var operacion = "";

/*
 *
 */
const limpiar = function() {
    resultado.textContent = "";
}

/*
 *
 */
const resetear = function() {
    operando_a = 0;
    operando_b = 0;
    operacion = "";
}

/*
 *
 */
const resolver = function(operando_a, operando_b, operacion) {
    let resultado = 0;

    switch (operacion) {
        case "+":
            resultado = parseFloat(operando_a) + parseFloat(operando_b);
            break;

        case "-":
            resultado = parseFloat(operando_a) - parseFloat(operando_b);
            break;

        case "*":
            resultado = parseFloat(operando_a) * parseFloat(operando_b);
            break;

        case "/":
            resultado = parseFloat(operando_a) / parseFloat(operando_b);
            break;
    }

    return resultado;
}

/*
 *
 */
const inicializarCalculadora = function() {

    let resultado = document.getElementById('resultado');

    //acciones
    let reset = document.getElementById('reset');
    let suma = document.getElementById('suma');
    let resta = document.getElementById('resta');
    let multiplicacion = document.getElementById('multiplicacion');
    let division = document.getElementById('division');
    let igual = document.getElementById('igual');


    //Digitos
    let uno = document.getElementById('uno');
    let dos = document.getElementById('dos');
    let tres = document.getElementById('tres');
    let cuatro = document.getElementById('cuatro');
    let cinco = document.getElementById('cinco');
    let seis = document.getElementById('seis');
    let siete = document.getElementById('siete');
    let ocho = document.getElementById('ocho');
    let nueve = document.getElementById('nueve');
    let cero = document.getElementById('cero');


    //eventos de click
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
        (operando_a == "") ? operando_a = "1": operando_b = "1";
    }
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
        (operando_a == "") ? operando_a = "2": operando_b = "2";
    }
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
        (operando_a == "") ? operando_a = "3": operando_b = "3";
    }
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
        (operando_a == "") ? operando_a = "4": operando_b = "4";
    }
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
        (operando_a == "") ? operando_a = "5": operando_b = "5";
    }
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
        (operando_a == "") ? operando_a = "6": operando_b = "6";
    }
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
        (operando_a == "") ? operando_a = "7": operando_b = "7";
    }
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
        (operando_a == "") ? operando_a = "8": operando_b = "8";
    }
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
        (operando_a == "") ? operando_a = "9": operando_b = "9";
    }
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
        (operando_a == "") ? operando_a = "0": operando_b = "0";
    }
    reset.onclick = function(e) {
        resultado.textContent = "";
        resetear();
    }

    suma.onclick = function(e) {
        resultado.textContent = resultado.textContent + "+";
        operacion = "+";
    }
    resta.onclick = function(e) {
        resultado.textContent = resultado.textContent + "-";
        operacion = "-";
    }
    multiplicacion.onclick = function(e) {
        resultado.textContent = resultado.textContent + "*";
        operacion = "*";
    }
    division.onclick = function(e) {
        resultado.textContent = resultado.textContent + "/";
        operacion = "/";
    }
    igual.onclick = function(e) {
        resultado.textContent = "";
        resultado.textContent = resolver(operando_a, operando_b, operacion);
    }

}


inicializarCalculadora();