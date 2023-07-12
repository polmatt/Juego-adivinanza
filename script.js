let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById('numeroEntrada')
let mensaje = document.getElementById('mensaje')
let intento = document.getElementById('intento')
let intentos = 0

function chequearResultado(){
    intentos ++
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value)

    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = 'Por favor ingrese un número del 1 al 100';
        mensaje.style.color = 'black';
        return
    }
    
    if(numeroIngresado == numeroAzar){
        mensaje.textContent = '¡¡Felicitaciones, haz ganado!!';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        return
    }
    else if(numeroIngresado < numeroAzar){
        mensaje.textContent = '¡Mas alto! , el número es mayor al que ingresaste';
        mensaje.style.color = 'red';
    }
    else {
        mensaje.textContent = '¡Mas bajo!, el número es menor al que ingresaste';
        mensaje.style.color = 'red';
    }

}