/* 1: Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. */
/* 2: Stabilire il vincitore, in base a chi fa il punteggio più alto. */


/* 1 */

let randomUserNumber = Math.floor(Math.random() * 10) +1;   /* Numero intero random da 1 a 10 */
let randomComputerNumber = Math.floor(Math.random() * 10) +1;   /* Numero intero random da 1 a 10 */

console.log('Il tuo tiro è di: ' + randomUserNumber);
console.log('Il tiro del computer è di: ' + randomComputerNumber);


/* 2 */

if (randomUserNumber > randomComputerNumber) {
    console.log('Hai vinto!');
} else if (randomUserNumber < randomComputerNumber) {
    console.log('Hai perso!');
} else {
    console.log('Pareggio!')
}