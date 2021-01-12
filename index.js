// Code your solutions in this file
function writeCards(names, event) {
    let messagesArray = []
    for (let i = 0; i < names.length; i++){
        messagesArray.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messagesArray
}

function countDown(num) {
    while (num >= 0) {
        console.log(num--);
    }
}