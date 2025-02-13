/* Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda per individuare gli strumenti necessari allo sviluppo. */

const userNumber = Math.floor(Math.random()*7)
console.log(userNumber);

const userPc = Math.floor(Math.random()*7)
console.log(userPc);

if (userPc > userNumber) {
    console.log("Il pc ha vinto");
} else {
    console.log("Il giocatore ha vinto");
}
