console.log("This is a prop passing into the function");

function myFunction(p1 = 3, p2 = 4) { 
    return p1 * p2; 
}

// console.log(myFunction());       // uses default values: 3 * 4 = 12
console.log(myFunction(5, 6));   // outputs: 30


function cricK( cook = 6 , bread = 10){ 
    return cook/bread; 
}


console.log(myFunction()); 
console.log(cricK());

console.log(myFunction() * cricK());

// here is the arrowed version 

console.log("Arrow funciton"); 

const myfunction = (p1=5 , p2=4) => p1*p2; 

const chicken = (cooker = 6 , flame = 20) => cooker / flame; 

console.log(myfunction()); 
console.log(chicken()); 

console.log(myfunction()*chicken()); 

