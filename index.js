// Code your solutions in this file
function writeCards(array, event) {
    let newArray = [];
    let message;
    for (let i = 0; i < array.length; i++) {
        message = `Thank you, ${array[i]}, for the wonderful ${event} gift!`;
        newArray.push(message);
    }

    return newArray;
}

console.log(writeCards(['tim', 'dan', 'bill'], 'christmas'));


function countDown(integer) {
    while (integer > -1) {
        console.log(integer);
        integer--;
    }
}

