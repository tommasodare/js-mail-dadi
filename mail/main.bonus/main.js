/* 👉 Bonus:
Dopo aver svolto l'esercizio con il [for] fai una cartella bonus e svolgilo anche anche usando un metodo delle array tipo [includes] */

const partyList = ["marco@gmail.com", "nicola@gmail.com", "lucia@gmail.com", "fabrizio@gmail.com"]
//console.log(partyList);
const emailUser = prompt("Insert here you email");
//console.log(emailUser);

for (let index = 0; index < partyList.length; index++) {
    const myPartyList = partyList[index];
    //console.log(myPartyList);

    if (myPartyList.includes(emailUser)) {
        alert(`Your email:${emailUser} is in the list`);
    }
}