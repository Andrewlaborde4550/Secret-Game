let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let maximosIntentos=5;


function asignarTextoElemento (elemeto,texto){
    let elementoHtml = document.querySelector(elemeto);
    elementoHtml.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los numeros
        if(listaNumerosSorteados.length == numeroMaximo){
            asignarTextoElemento('p','ya se soretearon todos los numeros posibles');
        }else{
            // si el numero generado esta incluido en la lista 
            if (listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
            }
        }
    
} 


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','numero secreto es menor');
        }else{
            asignarTextoElemento('p','el numero secreto es mayor')
        }
        if (intentos == maximosIntentos) {
            asignarTextoElemento('p',`Llegaste al número máximo de ${maximosIntentos} intentos`);
            document.querySelector('#intentos').setAttribute('disabled','true');
        }else{
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`indica un numero de 1 al ${numeroMaximo}:`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function condicionesFinales(){
    if (intentos > maximosIntentos) {
        asignarTextoElemento('p',`llegaste al numero maximo de ${maximosIntentos} reinicios de juego`);
        document.querySelector('#reiniciar').setAttribute('disabled','true');
    }
}

function reiniciarJuego() {
    //limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalo de numeros
    // generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
    
}

condicionesIniciales();


