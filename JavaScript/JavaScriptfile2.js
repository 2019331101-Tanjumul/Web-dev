console.log("Tanjumul"); 
console.log("SUST"); 
console.log(`also will work`); 


var myName = "tanjumul"; 

console.log(myName);

let $myname = " alos tanju"; 

console.log($myname); //valid will work also ! 

//!valid #mywork = "tanju"; 

// cameLcase and SnakeCase 

let tanj_umul = "IS a snake case !"; 

console.log(tanj_umul); 

const pi  =3.1416 ;

console.log(pi*2*3); 

let firstname = " Tanjumul Alom Siam "; 

console.log(firstname[7-2]); // using the string indexing 

console.log(firstname.length); 

console.log(firstname[firstname.length-2]);

//using trim method to wipe out the spaces in the string 

let firstnames = "tanjumul_alom_siam"; 
console.log(firstnames.length); 

firstnames = firstnames.trim(); 
console.log(firstnames); 
console.log(firstnames.length);
fistName = firstnames.toUpperCase(); 
console.log(fistName); 

towName = firstnames.toLowerCase(); 
console.log(towName); 

// Now in this i only want to have first of the words not from the last then 

/**start index and ending  index then =  */

let newString = firstnames.slice(0,4); /** basically it's doing here is it's just 
taking the first 4 cahracters */
console.log(newString); 


//type of operator " variables "

/* string , numberes and bool  {primitive datatypes actually } */

let age = 22 ; 
let firstNaame = " tanjumul"; 

console.log(typeof(age)); 
console.log(typeof(firstNaame)); 

// let bool = false ;
// console.log(typeof(bool)); 
// 22 -> string as "22"
Newage = age + " "; 
console.log(Newage); 
console.log(typeof(Newage)); 

//string to number 

let mystr = +"33"; 
console.log(typeof mystr); 

let agee ="18"; 
agee = Number(agee); 
console.log(agee); 

myNamee = "Tanjumul-Alom"; 
myAge = 25; 

let aboutMe = `My name is ${myNamee} and my age is ${myAge}`;
console.log(aboutMe);

let myvariable  = null ; 

console.log(myvariable); 
console.log(typeof myvariable); // ?? why object ?  bug or error ! it's null 


//Bigint

let numberrs = BigInt(123444334); 
console.log(numberrs); 

//booleans and comparison operators

let num1 = 33; 
let num2 = 8; 

console.log(num1>num2);

// == or ===

let num3  = 7 ; 
let num4 = "7"; 
console.log(num3==num4); // in == it's not checking the datatypes

let num5 = 9; 
let num6 = "9";
console.log (num5 === num6); // here === is checking the datatypes also 

// != and !==
 

let num7 = 7 ; 
let num8 = "7"; 

console.log(num7!=num8); // we know that, it's not true due to one num and other is string 
console.log(num7 !== num8)// it's now checking the datatypes

//truely and falsy values 

/** null , false , undefined  */


//if else condition 

console.log("if else conditon")

let aged = 19; 

if (aged > 18){ 
    console.log(aged); 
} else { 
    console.log("User can't play Games"); 
}


//ternary operator 

let agged = 18; 
let drink = agged >=8 ? "Coffee":"MILK"
console.log(drink); 

//again:

let aggged = 8; 
let drinked = agged > 18 ?  "Coffee" : "MILk"; 

console.log(drinked); 

// and or operator 

let befirst = "tanjumul" ; 
let boyosh = 25; 

if (befirst[0] === "t"){ 
    console.log("Your name starts with t"); 
} else { 
    console.log("Your name is : tanjumul "); 
}

if(befirst[0]==="t" && boyosh > 15){ 
    console.log("JavaScript is Real");
} else{ 
    console.log("Bar Bar error !!")
}

/**or Operator here ! */
console.log("Or operator now : "); 

let befirstt = "tanjumul Alom"; 
let boyosht = 14;
if(befirstt[0]==="t" || boyosht > 15){ 
    console.log("JavaScript is Real : True");
} 
else{ 
    console.log("Bar Bar error in Or operator : False !!")
}  

