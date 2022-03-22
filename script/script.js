'use strict';

const weapons=['rock','paper','scissor'];

let userChoice;
let compChoice;

let userScores = 0;
let compScores = 0;

const showResult = function (result){
	
	document.getElementById('user-choice').textContent=`User Choice: ${userChoice}`;

	document.getElementById('comp-choice').textContent=`Computer Choice: ${compChoice}`;

	document.getElementById('result').textContent=`${result}`;

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
			compScores++;
		}else if(compChoice === 'scissor'){
			showResult('You Won');
			userScores++;
		}
	}else if(userChoice === 'paper'){
		if(compChoice === 'rock'){
			showResult('You Won');
			userScores++;
		}else if(compChoice === 'paper'){
			showResult('Game Draw');
		}else if(compChoice === 'scissor'){
			showResult('You Lose');
			compScores++;
		}
	}else if(userChoice === 'scissor'){
		if(compChoice === 'rock'){
			showResult('You Lose');
			compScores++;
		}else if(compChoice === 'paper'){
			showResult('You Won');
			userScores++;
		}else if(compChoice === 'scissor'){
			showResult('Game Draw');
		}
	}
    document.getElementById('user-scores').textContent=userScores;
	document.getElementById('comp-scores').textContent=compScores;
};