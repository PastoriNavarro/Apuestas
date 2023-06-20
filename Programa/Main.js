let monedas = 50;
const min = 1;
const max = 6;

let dado = Math.round(Math.random() * (max - min) + min);


while(monedas != 0){

    let apuesta = prompt("¿Cuantas monedas quieres apostar?")

    while(apuesta > monedas){
        apuesta = prompt("No puedes apostar más de " + monedas + " monedas. Vuelva a apostar");

    }

    while(apuesta < 1){
        apuesta = prompt("Tienes que hacer alguna apuesta");
        
    }

   

    let numeroIntroducido = prompt("Introduce un número del 1 al 6");

    while(numeroIntroducido < 1 || numeroIntroducido > 6){
        numeroIntroducido = prompt("El valor introducido no es válido. Introduce un número del 1 al 6");
    }

    if(numeroIntroducido == dado){
    monedas = monedas + (apuesta * 2) - apuesta;
    alert("¡Felicidades! Has ganado " + apuesta * 2 + " monedas. ahora tienes " + monedas + " monedas");
    

    }else if(numeroIntroducido != dado){
    monedas = monedas - apuesta;
    alert("¡Lo siento! El número era el " + dado + " Has perdido " + apuesta + " monedas. Te quedan " + monedas + " monedas");
    dado = Math.round(Math.random() * 6);
    
    if(monedas == 0){
        alert("GAME OVER");
    }
    
    }
}










