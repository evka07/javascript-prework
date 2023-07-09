let computerMove = `kamień`;
let playerMove = 'papier';

function printMessage('Zagrałem kamień! ' +
'Jeśli Twój ruch to papier, to wygrywasz!') {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}