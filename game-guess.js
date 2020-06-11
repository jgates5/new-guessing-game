let total = 10
	 
const userGuess = []
const matchNumArray = []
forRandomNumberArray = [1, 2, 3, 4, 5]

console.log ("welcome to Jeff's Keno shortend version guessing game.\n\n\n")
console.log("Here are the Rules:\n\n")
console.log("1. Takes in $10.00 to play.\n")
console.log("2. To start you will be asked to select 5 random numbers between 1 and 5.\n")
console.log("3. Then, 5 random numbers will be selected from that numbered amount\n")
console.log("4. You will win 20.00 per number you guess right. If you guess wrong you lose 20.00 per number.\n\n\n")

while(true)(


function num() {
const betnum = prompt("Pick your bet!");
if((betnum >= 0) && (betnum <= 10) ) {
    alert("Let the game begin!");
   total = total - 10.00;
} else if (betnum < 1) {
    alert("That is not an option, Please pick a new number.");
} else if (betnum >= 11) {
   alert("That is not an option, Please pick a new number.");
num();
  
 } 
}
num();




for ( let i = 0; i < 5; i++) {              
userGuess.push(prompt('Enter number between 1 and 5 '));
userGuess.push(prompt('Enter number between 1 and 5 '));
userGuess.push(prompt('Enter number between 1 and 5 '));
userGuess.push(prompt('Enter number between 1 and 5 '));
userGuess.push(prompt('Enter number between 1 and 5 '));
total= total + 20;

alert('Your guess of numbers: ' + userGuess.join(' '));

const randomMaker = () => {
for (let i =0; i < 5; i++ ) {
matchNumArray.push(forRandomNumberArray[Math.floor(Math.random()*forRandomNumberArray.length)])
 total = total +- 20;
}
}
randomMaker()


console.log(prompt('Here is the random guess number: ' + matchNumArray.join(" ")));


function winLottery(userGuess, matchNumArray) {
let message = "You Lose";
for (let i = 0; i < userGuess.length; i++ ) {
for (let j = 0; j < matchNumArray.length; j++ ) {
if(userGuess[i] == matchNumArray[j]) {
message = "You Win";
alert(message)
total = total +- 20;
}
}
}
}

winLottery(userGuess, matchNumArray);
  alert("Your new total Wallet is " +- total);

const playAgain = prompt('Would you like to play again?');
if('playAgain === yes') {
alert("Awesome!");
} else {
alert('Thanks for playing.')
break;
}
num()
}

  )