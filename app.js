 let numeroSecreto = 0;
 let intentos = 0;
 let listaNumerosSorteados = [];


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('numeroDeUsuario').value);

    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if(numeroSecreto > numeroDeUsuario){
            asignarTextoElemento('p','El número secreto es mayor');
        } else {
            asignarTextoElemento('p','El número secreto es menor');
        }
        intentos++;
        borrarInput();
    }
    return;
}

function inicializarValores() {
    //Colocar texto del inicio
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Ingresa un numero del 1 al 10');
    //Asignar número secreto
    numeroSecreto = generarNumeroSecreto();
    //Reiniciar numero de intentos
    intentos = 1; 
    return;
}


function reiniciarJuego() {
    inicializarValores();
    //Limpiar Campo
    borrarInput();
    //Desactivar boton
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    return;
}

function borrarInput() {
    document.getElementById('numeroDeUsuario').value = '';
    return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;

    console.log(`número generado: ${numeroGenerado}`);
    console.log(listaNumerosSorteados);
    //Si el numéro generado está en la lista volvemos a generar otro número
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}



inicializarValores();