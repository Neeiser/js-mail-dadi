/* 1: Chiedi all’utente la sua email */
/* 2: Controlla che sia nella lista di chi può accedere. */
/* 3: Stampa un messaggio appropriato sull’esito del controllo. */


/* 1 */
let userMail = prompt('Inserisci la tua mail');


/* 2 */
const mailArrey = ['polpo@gmail.com', 'zebra@gmail.com', 'gatto@gmail.com', 'cane@gmail.com', 'caimano@gmail.com', 'anatra@gmail.com', 'gorilla@gmail.com', 'tartaruga@gmail.com', 'pulcino@gmail.com', 'pinguino@gmail.com', ];

for (let i = 0; i < mailArrey.length; i++){

    if (mailArrey[i] == userMail) {
        console.log('registrato')
    } else {
        console.log('non registrato')
    }

}