'use strict';

const weapons=['rock','paper','scissor'];

let userChoice;
let compChoice;

const showResult = function(result){
	console.log('User Choice: ${userChoice}');
	console.log('Computer Choice: ${compChoice}');
	console.log('Result: ${result}');
};


const game = function(input){
	userChoice = input;
	let randomNumber = Math.trunc(Math.random()*3);
	compChoice = weapons[randomNumber];

	if(userChoice === 'rock'){
		if(compChoice === 'rock'){
			showResult('Game Draw');
		}else if(compChoice === 'paper'){
			showResult('You Lose');
			compScore++;
		}else if(compChoice === 'scissor'){
			showResult('You Won');
			userScore++;
		}
	}else if(userChoice === 'paper'){
		if(compChoice === 'rock'){
			showResult('You Won');
			userScore++;
		}else if(compChoice === 'paper'){
			showResult('Game Draw');
		}else if(compChoice === 'scissor'){
			showResult('You Lose');
			compScore++;
		}
	}else if(userChoice === 'scissor'){
		if(compChoice === 'rock'){
			showResult('You Lose');
			compScore++;
		}else if(compChoice === 'paper'){
			showResult('You Won');
			userScore++;
		}else if(compChoice === 'scissor'){
			showResult('Game Draw');
		}
	}
    document.getElementById('user-score').textContent=userScore;
	document.getElementById('comp-score').textContent=compScore;
};