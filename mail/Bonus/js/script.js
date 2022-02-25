
const userSubmittedMail = document.getElementById('user-mail-submit');
const userMailResult = document.getElementById('mail-test-result');

const mailArrey = ['polpo@gmail.com', 'zebra@gmail.com', 'gatto@gmail.com', 'cane@gmail.com', 'caimano@gmail.com', 'anatra@gmail.com', 'gorilla@gmail.com', 'tartaruga@gmail.com', 'pulcino@gmail.com', 'pinguino@gmail.com', ];

userSubmittedMail.addEventListener("click", function() {
    const userWroteMail = document.getElementById('user-mail').value;
    let match= false;
    
    for (let mailCount = 0; mailCount < mailArrey.length; mailCount++){

        if (mailArrey[mailCount] == userWroteMail) {
            match= true;
            console.log(userWroteMail); /* NON LO TROVA  */
        }
    }

    if (match == true) {
        userMailResult.innerHTML = ('You are the chosen one!');
    } else {
        userMailResult.innerHTML = ('Go away!');
    }
    
});

