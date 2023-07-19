{
    const printMessage = function(msg) {
        let div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

    const clearMessages = function() {
        document.getElementById('messages').innerHTML = '';
    }

    const randomChoice = function() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    const getMoveName = function(argMoveId) {
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

    const displayResult = function(player, computer) {
        const resultDiv = document.getElementById("message");
        let resultText = '';

        const playerMoveName = getMoveName(player);
        const computerMoveName = getMoveName(computer);

        if (player === computer) {
            resultText = 'Remis! Obaj gracze wybrali ' + playerMoveName;
        } else if (
            (player === "paper" && computer === "rock") ||
            (player === "rock" && computer === "scissors") ||
            (player === "scissors" && computer === "paper")
        ) {
            resultText = 'Wygrałeś! Ty wybrałeś  ' + playerMoveName + ', a komputer ' + computerMoveName;
        } else {
            resultText = 'Przegrałeś! Ty wybierz ' + playerMoveName + ', a komputer ' + computerMoveName;
        }

        clearMessages();
        printMessage(resultText);
    }

    const clickPlayer = function(e) {
        const playerChoice = e.target.id;
        const computerChoice = randomChoice();
        displayResult(playerChoice, computerChoice);
    }
    const paperBtn = document.querySelector('#paper');
    const rockBtn = document.querySelector('#rock');
    const scissorsBtn = document.querySelector('#scissors');

    paperBtn.addEventListener('click', clickPlayer);
    rockBtn.addEventListener('click', clickPlayer);
    scissorsBtn.addEventListener('click', clickPlayer);


}