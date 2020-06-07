let winnings = []
let total = 0

console.log ("welcome to Jeff's Keno shortend version guessing game.\n\n\n")
console.log("Here are the Rules:\n\n")
console.log("1. Takes in 1.00 to play.\n")
console.log("2. To start you will be asked to select 5 random numbers between 1 and 80.\n")
console.log("3. Then, 10 random numbers will be selected from that numbered amount\n")
console.log("4. You will win 2.00 per number you guess right. If you guess wrong you lose 2.00 per number. IF you guess all the numbers correctly you win 100.00.\n\n\n")

function num() {
const betNum = prompt("Pick your bet!");
  if((betNum >= 1) && (betNum <= 50) ) {
      alert("Let the game begin!");
   total += betNum
  } else if (betNum < 1) {
      alert("That is not an option, Please pick a new number.");
  } else if (betNum >= 51) {
      alert("That is not an option, Please pick a new number.");
      num();
  } 
}
num()

const arr = ['0', '1', '2', '3', '4', '5'];
minValue = 0;
maxValue = 5;
  for (array in arr) {
   arr[Math.floor(arr.length * Math.random)];
   prompt("Enter a number");
   if (array = minValue) {
         minValue = array;
     alert('nice');
 } else if (array = maxValue) {
       maxValue = array;
      alert("That is not an option, Please pick a new number.");
 } else if (array >= maxvalue) {
      alert("That is not an option, Please pick a new number.");
} else if (array <= minvalue) {
      alert("That is not an option, Please pick a new number.");
}
 }