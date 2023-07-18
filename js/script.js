{
    function printMessage(msg) {
        let div = document.createElement('div');
        div.innerHTML = msg;
        document.getElementById('messages').appendChild(div);
    }

    function clearMessages() {
        document.getElementById('messages').innerHTML = '';
    }

    let randomChoice = function () {
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

    function displayResult(player, computer) {
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

    function clickPlayer(e) {
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