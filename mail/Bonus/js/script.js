
const mailArrey = ['polpo@gmail.com', 'zebra@gmail.com', 'gatto@gmail.com', 'cane@gmail.com', 'caimano@gmail.com', 'anatra@gmail.com', 'gorilla@gmail.com', 'tartaruga@gmail.com', 'pulcino@gmail.com', 'pinguino@gmail.com', ];

let userWroteMail = document.getElementById('user-mail');
let userSubmittedMail = document.getElementById('user-mail-submit');
let userMailResult = document.getElementById('mail-test-result');

let match= false;

userSubmittedMail.addEventListener("click", function() {
    
    for (let mailCount = 0; mailCount < mailArrey.length; mailCount++){
    
        if (mailArrey[mailCount] == userWroteMail) {
            match= true;
        }
    };

    if (match == true) {
        userMailResult.innerHTML = ('You are the chosen one!');
        console.log(match);
    } else {
        userMailResult.innerHTML = ('Go away!');
    }  
});
