
//Nested if else 

// The game
// wining number = 19 

// 19 your guess is right 
// 17 too low 
// 20 too high

let winning_number = 19; 

let userGuess = +prompt("Guess a Number here !"); 
console.log(userGuess); 

// console.log(typeof userGuess); 

if(userGuess === winning_number){ 
  console.log("Ur guess is right "); 

} else { 
  if(userGuess<winning_number){ 
    console.log("Too low"); 
  } else{ 
    console.log("too high"); 
  }
}
//else if with loop 
