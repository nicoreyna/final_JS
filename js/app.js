//Defino cada variable tomando del HTML cada elemento por su ID
var resultado = document.getElementById('display');
var on = document.getElementById('on');
var signo = document.getElementById('sign');
var raiz = document.getElementById('raiz');
var dividido = document.getElementById('dividido');
var por = document.getElementById('por');
var menos = document.getElementById('menos');
var punto = document.getElementById('punto');
var igual = document.getElementById('igual');
var mas = document.getElementById('mas');
var uno = document.getElementById('1');
var dos = document.getElementById('2');
var tres = document.getElementById('3');
var cuatro = document.getElementById('4');
var cinco = document.getElementById('5');
var seis = document.getElementById('6');
var siete = document.getElementById('7');
var ocho = document.getElementById('8');
var nueve = document.getElementById('9');
var cero = document.getElementById('0');

var num = display.innerHTML;
var limite = 8;

var primerNumero;
var segundoNumero;
var operacion;

//Almaceno todas las teclas en una variable
var tecla = document.getElementsByClassName('tecla');

//Luego de almacenar las teclas, hago el ciclo para que tomar esas teclas con el Escuchador
for (i = 0; i < tecla.length; i++){
    tecla[i].addEventListener("mousedown", reducirTamaño);
}

function reducirTamaño (evento){
    evento.target.style.transform = "scale(0.9,0.9)";
}

for (i = 0; i < tecla.length; i++){
    tecla[i].addEventListener("mouseup", volverTamaño);
}

function volverTamaño (evento){
    evento.target.style.transform = "scale(1,1)";
}

//Creo una función para mostrar los números que hago click
function mostrar (num) {
    if (display.innerHTML.length < 8 ) {
    if (display.innerHTML == "0") {
    display.innerHTML = num
    } else {
    display.innerHTML += num
    }
    }
}

//Le añado escuchadores a cada uno de los números que hago click sobre la función anterior
uno.addEventListener('click', function() {
    mostrar("1")
    })

dos.addEventListener('click', function() {
    mostrar("2")
    })

tres.addEventListener('click', function() {
    mostrar("3")
    })

cuatro.addEventListener('click', function() {
    mostrar("4")
    })

cinco.addEventListener('click', function() {
    mostrar("5")
    })

seis.addEventListener('click', function() {
    mostrar("6")
    })

siete.addEventListener('click', function() {
    mostrar("7")
    })

ocho.addEventListener('click', function() {
    mostrar("8")
    })

nueve.addEventListener('click', function() {
    mostrar("9")
    })

cero.addEventListener('click', function() {
    mostrar("0")
    })

//Agrego el "punto" y verifico si ya hay o no otro en pantalla para no agregar de mas.
punto.addEventListener("click", function () {
    imprimirPunto(".")
});

function imprimirPunto (e) {
    if(resultado.textContent.indexOf(".") == -1) {
        resultado.textContent += "."
        }
}

//Añade el signo negativo
signo.addEventListener('click', signoNegativo);

function signoNegativo () {
    if (display.innerHTML > 0) {
        display.innerHTML = "-" + display.innerHTML;
    } 
    else{
        //si está el signo negativo en pantalla, lo quito.
        display.innerHTML = display.innerHTML.replace(/[-|(|)]/g, "");
    
    }
}

function masmenos(){
    var caja2 = document.f1.txtcaja2.value;
    if (caja2 > 0){
        document.f1.txtcaja2.value = "(-" + caja2 + ")";
    }
}

//Borra todo el contenido y deja sólo el cero.
on.onclick = function (e){
    resetear ();
}

function resetear (){
    resultado.textContent = "0";
}

//Operaciones matemáticas
mas.onclick = function (num) {
    primerNumero = display.innerHTML;
    operacion = "+";
    borrar();
}

menos.onclick = function (num) {
    primerNumero = display.innerHTML;
    operacion = "-";
    borrar();
}

dividido.onclick = function (num) {
    primerNumero = display.innerHTML;
    operacion = "/";
    borrar();
}

por.onclick = function (num) {
    primerNumero = display.innerHTML;
    operacion = "*";
    borrar();
}

igual.onclick = function (num) {
    segundoNumero = display.innerHTML;
    resolver();
}

//Funcion que utilizo para borrar el contenido del display cuando se hace click en el simbolo de la operacion
function borrar () {
    display.innerHTML = "";
}

function resolver () {
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat (primerNumero) + parseFloat (segundoNumero)
            break;
        case "-":
            res = parseFloat (primerNumero) - parseFloat (segundoNumero)
            break;
        case "/":
            res = parseFloat (primerNumero) / parseFloat (segundoNumero)
            break;
        case "*":
            res = parseFloat (primerNumero) * parseFloat (segundoNumero)
            break;
    }

    borrar();
    display.innerHTML = res;
}