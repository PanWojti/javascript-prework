let playerScore = 0;
let computerScore = 0;

const game = function () {

	const playGame = function (Arg){
  	clearMessages();
		const playerInput = Arg;
		const randomNumber = Math.floor(Math.random() * 3 + 1);
		console.log('Wylosowana liczba to: ' + randomNumber);
		const getMoveName = function (argMoveId){
			if(argMoveId == 1){
				return 'kamień';
			} else if (argMoveId == 2) {
				return 'papier';
			} else if (argMoveId == 3) {
				return 'nożyce';
			} else {
				printMessage('Nie znam ruchu o id ' + argMoveId + '.');
				return 'nieznany ruch';
			}
		}
		const computerMove = getMoveName(randomNumber);
		printMessage('Mój ruch to: ' + computerMove);
		console.log('Gracz wpisał: ' + playerInput);
		const playerMove = getMoveName(playerInput);;
		printMessage('Twój ruch to: ' + playerMove);
		const displayResult = function (argComputerMove, argPlayerMove) {
			if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
				printMessage('Ty wygrywasz!');
				playerScore++;
				printMessage('Wynik - Player: ' + playerScore + '  Computer:' + computerScore);
			} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
				printMessage('Komputer wygrywa!');
				computerScore++;
				printMessage('Wynik - Player: ' + playerScore + '  Computer:' + computerScore);
			} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
				printMessage('Komputer wygrywa!');
				computerScore++;
				printMessage('Wynik - Player: ' + playerScore + '  Computer:' + computerScore);
			} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
				printMessage('Ty wygrywasz!');
				playerScore++;
				printMessage('Wynik - Player: ' + playerScore + '  Computer:' + computerScore);
			} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
				printMessage('Ty wygrywasz!');
				playerScore++;
				printMessage('Wynik - Player: ' + playerScore + '  Computer:' + computerScore);
			} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
				printMessage('Komputer wygrywa!');
				computerScore++;
				printMessage('Wynik - Player: ' + playerScore + '  Computer:' + computerScore);
			} else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
				printMessage('Remis!');
				printMessage('Wynik - Player: ' + playerScore + '  Computer:' + computerScore);
			} else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
				printMessage('Remis!');
				printMessage('Wynik - Player: ' + playerScore + '  Computer:' + computerScore);
			} else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
				printMessage('Remis!');
				printMessage('Wynik - Player: ' + playerScore + '  Computer:' + computerScore);
			} else if (argPlayerMove == 'nieznany ruch') {
				printMessage('Wprowadziłeś nieprawidłową cyfrę!');
			}
		}

		displayResult(computerMove, playerMove);
	}

	// Gracz zagrał kamień
	document.getElementById('play-rock').addEventListener('click', function(){
  	playGame(1);
	});
	// Gracz zagrał papier
	document.getElementById('play-paper').addEventListener('click', function(){
  	playGame(2);
	});
	// Gracz zagrał nożyce
	document.getElementById('play-scissors').addEventListener('click', function(){
  	playGame(3);
	});

}

game();
