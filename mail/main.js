/* 📌 Mail
Crea una lista di email di invitati ad una festa.
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo. */

const partyList = ["marco@gmail.com", "nicola@gmail.com", "lucia@gmail.com", "fabrizio@gmail.com"]
//console.log(partyList);
const emailUser = prompt("Insert here you email");
//console.log(emailUser);
 
for (let index = 0; index < partyList.length; index++) {
    const myPartyList = partyList[index];
    //console.log(myPartyList);

    if (myPartyList === emailUser) {
        alert(`Your email:${emailUser} is in the list`);
        break
    } else {
        alert(`Your email:${emailUser} is not in the list`);
        break
    }
} 