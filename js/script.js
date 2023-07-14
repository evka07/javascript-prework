function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function randomChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getMoveName(argMoveId) {
    if (argMoveId === "rock") {
        return 'rock';
    } else if (argMoveId === "paper") {
        return 'paper';
    } else if (argMoveId === "scissors") {
        return 'scissors';
    } else {
        return 'unknown move';
    }
}
