let winnings = 0
let total = 0
var userGuessArr = []
console.log ("welcome to Jeff's Keno shortend version guessing game.\n\n\n")
console.log("Here are the Rules:\n\n")
console.log("1. Takes in 1.00 to play.\n")
console.log("2. To start you will be asked to select 5 random numbers between 1 and 80.\n")
console.log("3. Then, 10 random numbers will be selected from that numbered amount\n")
console.log("4. You will win 2.00 per number you guess right. If you guess wrong you lose 2.00 per number. IF you guess all the numbers correctly you win 100.00.\n\n\n")

function num() {
const betnum = prompt("Pick your bet!");
  if((betnum >= 1) && (betnum <= 5) ) {
      alert("Let the game begin!");
      userGuess()
   total += betnum
  } else if (betnum < 1) {
      alert("That is not an option, Please pick a new number.");
  } else if (betnum >= 51) {
      alert("That is not an option, Please pick a new number.");
      num();
  } 
}
num()

function userGuess() {
  let count = 1;
  while (count < 6) {
    count +=1;


  const guess = prompt("Enter a number between 1 and 9");
  if (guess > 0 && guess <10) {
    userGuessArr.push(guess)
   } else if (guess !== null) {
    alert ('That is not an option Please try again!')
    userGuess();
    total - 1 
    break
   }
  }

}
alert('Here are your guessed numbers?')
 let randomNum = userGuessArr[(Math.random() * userGuessArr.length)]
 
console.log(userGuessArr.join(" "))

alert('Here are the numbers that are randomly picked?')

const randomNumber = ['1', '2', '3', '4', '5']; 

const emptyInt = []

for(let i = 0; i < randomNumber.length; i++){
  emptyInt.push(Math.floor(Math.random() * 10));


}

console.log(emptyInt.join(" "));


var userGuestArr = prompt("Congrats you won!");
if (userGuessArr > 1 && userGuess < 9){
  alert `You earned this $${userGuestArr}`
   total = total +- emptyInt
} else if (userGuestArr !== null) {
  alert('Sorry, you lost!')
}

 alert('Here is your total earnings plus money betted')
  alert(total);
