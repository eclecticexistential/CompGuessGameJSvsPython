
var x=document.getElementById("submit");
x.addEventListener("click",function(){
  var hiddenAnswer=document.getElementById('here').value;
  document.getElementById('here').value = ""
  var z=document.getElementById('num');
  z.style.background=color="#AAF";
  game(hiddenAnswer,z);
})

function game(hiddenAnswer,z){
	compGuess = Math.floor(Math.random()*10)+1
	guesses = [];
	x = 0
	y = 0

	function randomIntFromInterval(min,max)
	{
		return Math.floor(Math.random()*(max-min+1)+min);
	}

	while(guesses.length < 4){
		if(compGuess == hiddenAnswer && guesses.length == 0){
			z.innerHTML="Computer guessed your number "+hiddenAnswer+" on the first try!";
			playAgain()
			}
		if(compGuess == hiddenAnswer){
			z.innerHTML="Computer guessed your number "+hiddenAnswer+" in "+ guesses.length + " guesses.";
			playAgain()
      break
			}
		if(compGuess < hiddenAnswer){
			guesses.push(compGuess)
			alert("Computer's guess "+ compGuess + " is too low.");
			x = compGuess
			if(y != 0){
				compGuess = randomIntFromInterval(x,y)
			}
			else{
				compGuess = randomIntFromInterval(x,10)
				}
			}
		if(compGuess > hiddenAnswer){
			guesses.push(compGuess)
			alert("Computer's guess "+ compGuess + " is too high.");
			y = compGuess
			if(x!=0){
				compGuess = randomIntFromInterval(x,y)
			}
			else{
				compGuess = randomIntFromInterval(1,y)
				}
			}
		if(guesses.length == 4){
			z.innerHTML="You win! Computer was unable to guess "+hiddenAnswer+" in "+ guesses.length + " guesses.";
			playAgain()
      break
	}
}

function playAgain(){
		answer = prompt("Play again?").toLowerCase()
		if(answer == 'yes'){
			compGuess = x = 0
			hiddenAnswer = ""
			z.innerHTML = ""
		}
		if(answer == 'no'){
			alert("Goodbye!")
      return
		}
		}
}