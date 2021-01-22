var operando_a = "";
var operando_b = "";
var operacion = "";


/*
 * Limpiar variables globales.
 */
const resetear = function() {
    operando_a = 0;
    operando_b = 0;
    operacion = "";
}

/*
 * Realiza la operacion aritmetica solicitada y retorna el valor.
 *
 * Parametros de entreda:
 * operando_a = primer digito ingresado.
 * operando_b = segundo digito ingresado.
 * operacion = operacion aritmetica a realizar.
 * 
 * 
 * Paramtro de salida:
 * Resultado de la operacion artimetica.
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
 * Función principal que captura los eventos de los botones de la calculadora.
 */
const inicializarCalculadora = function() {

    //Visor del resultado.
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


    //Botón uno (1)
    uno.onclick = function(e) {
        resultado.textContent = resultado.textContent + "1";
        (operando_a == "") ? operando_a = "1": operando_b = "1";
    }

    //Botón dos (2)
    dos.onclick = function(e) {
        resultado.textContent = resultado.textContent + "2";
        (operando_a == "") ? operando_a = "2": operando_b = "2";
    }

    //Botón tres (3)
    tres.onclick = function(e) {
        resultado.textContent = resultado.textContent + "3";
        (operando_a == "") ? operando_a = "3": operando_b = "3";
    }

    //Botón cuatro (4)
    cuatro.onclick = function(e) {
        resultado.textContent = resultado.textContent + "4";
        (operando_a == "") ? operando_a = "4": operando_b = "4";
    }

    //Botón cinco (5)
    cinco.onclick = function(e) {
        resultado.textContent = resultado.textContent + "5";
        (operando_a == "") ? operando_a = "5": operando_b = "5";
    }

    //Botón seis (6)
    seis.onclick = function(e) {
        resultado.textContent = resultado.textContent + "6";
        (operando_a == "") ? operando_a = "6": operando_b = "6";
    }

    //Botón siete (7)
    siete.onclick = function(e) {
        resultado.textContent = resultado.textContent + "7";
        (operando_a == "") ? operando_a = "7": operando_b = "7";
    }

    //Botón ocho (8)
    ocho.onclick = function(e) {
        resultado.textContent = resultado.textContent + "8";
        (operando_a == "") ? operando_a = "8": operando_b = "8";
    }

    //Botón nueve (9)
    nueve.onclick = function(e) {
        resultado.textContent = resultado.textContent + "9";
        (operando_a == "") ? operando_a = "9": operando_b = "9";
    }

    //Botón cero (0)
    cero.onclick = function(e) {
        resultado.textContent = resultado.textContent + "0";
        (operando_a == "") ? operando_a = "0": operando_b = "0";
    }

    //Botón resert (C)
    reset.onclick = function(e) {
        resultado.textContent = "";
        resetear();
    }

    //Botón sumar (+)
    suma.onclick = function(e) {
        resultado.textContent = resultado.textContent + "+";
        operacion = "+";
    }

    //Botón restar (-)
    resta.onclick = function(e) {
        resultado.textContent = resultado.textContent + "-";
        operacion = "-";
    }

    //Botón multiplicar (*)
    multiplicacion.onclick = function(e) {
        resultado.textContent = resultado.textContent + "*";
        operacion = "*";
    }

    //Botón division (/)
    division.onclick = function(e) {
        resultado.textContent = resultado.textContent + "/";
        operacion = "/";
    }

    //Botón igual (=)
    igual.onclick = function(e) {
        resultado.textContent = "";
        resultado.textContent = resolver(operando_a, operando_b, operacion);
    }

}


inicializarCalculadora();