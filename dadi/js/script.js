/* 1: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. */
/* 2: Stabilire il vincitore, in base a chi fa il punteggio più alto. */


/* 1 */

let randomUserNumber = Math.floor(Math.random() * 10) +1;   /* Numero intero random da 1 a 10 */
let randomComputerNumber = Math.floor(Math.random() * 10) +1;   /* Numero intero random da 1 a 10 */

/* BONUS: */

let UserNumberBox = document.getElementById('user-number');
let ComputerNumberBox = document.getElementById('computer-number');
let winnerBox = document.getElementById('winner');
UserNumberBox.innerHTML = ('Il tuo tiro è di: ' + randomUserNumber);
ComputerNumberBox.innerHTML = ('Il tiro del computer è di: ' + randomComputerNumber);


/* 2 */

if (randomUserNumber > randomComputerNumber) {
    winnerBox.innerHTML = ('Hai vinto!');
} else if (randomUserNumber < randomComputerNumber) {
    winnerBox.innerHTML = ('Hai perso!');
} else {
    winnerBox.innerHTML = ('Pareggio!')
}