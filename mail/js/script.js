/* 1: Chiedi all’utente la sua email */
/* 2: Controlla che sia nella lista di chi può accedere. */
/* 3: Stampa un messaggio appropriato sull’esito del controllo. */


/* 1 */
let userInputMail = prompt('Inserisci la tua mail');


/* 2 */
const mailArrey = ['polpo@gmail.com', 'zebra@gmail.com', 'gatto@gmail.com', 'cane@gmail.com', 'caimano@gmail.com', 'anatra@gmail.com', 'gorilla@gmail.com', 'tartaruga@gmail.com', 'pulcino@gmail.com', 'pinguino@gmail.com', ];
let match= false;

for (let mailCount = 0; mailCount < mailArrey.length; mailCount++){

    if (mailArrey[mailCount] == userInputMail) {
        match= true;
    }
}

/* 3 */

if (match == true) {
    console.log('Registrato');
} else {
    console.log('Non Registrato');
}