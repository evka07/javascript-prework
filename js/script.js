let computerMove = `kamień`;

let playerMove = 'papier';

function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}
printMessage ('Zagrałem kamień! ' +
'Jeśli Twój ruch to papier, to wygrywasz!')


printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);
function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

console.log(printMessage)