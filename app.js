let secretNumber = 0; 
let attempts = 1; 
let numSorteados = [];
let numeroMaximo = 10; 

function asignElementText(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}


function verifyAttempt() {
     let UserNumber = parseInt(document.getElementById('numberUser').value);

     if (UserNumber === secretNumber){
        asignElementText(`p`,`Acertaste el numero es ${secretNumber}!!. Lo hiciste en ${attempts} ${(attempts == 1) ? 'intento' : 'intentos'} `)
        document.querySelector('#reiniciar').removeAttribute('disabled');
        document.querySelector('#trybutton').setAttribute('disabled', 'true');
     } else {
        //no acierto 
        if (UserNumber > secretNumber){
            asignElementText(`p`,`El numero secreto es menor a ${UserNumber}`)
        }else{
            asignElementText(`p`,`El numero secreto es mayor a ${UserNumber}`)
        }   
        attempts++;
        systemclean();  
     }
      
    return;
} 

function systemclean(){
 
    document.querySelector('#numberUser').value = '';
}

function randomNumber(){
     let numeroGenerado = Math.floor (Math.random()*numeroMaximo)+1;
     console.log(numeroGenerado);
     console.log(numSorteados);
    //todos sorteados?
    if (numSorteados.length == numeroMaximo) {
        asignElementText(`p`,`Ya se sortearon todos los numeros posibles.`);
        document.querySelector('#trybutton').setAttribute('disabled', 'true');
        
    }else{

     if (numSorteados.includes(numeroGenerado)) {
        return randomNumber();
     }else{
        numSorteados.push(numeroGenerado);
        return numeroGenerado;
     }
    }
}

function condicionesIniciales() {
    asignElementText('h1','Juego Del numero secreto');
    asignElementText('p',`Ingrese un numero del 1 al ${numeroMaximo}`); 
    secretNumber = randomNumber();
    attempts = 1;  
}

function resetGame() {
    //limpiar caja
    systemclean(); 
    //indicar mensaje de intervalo de numeros
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute ('disabled','true');
    document.querySelector('#trybutton').removeAttribute('disabled');
}
condicionesIniciales();

