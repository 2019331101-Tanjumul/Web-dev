let w = 1; 

while (w<=10){ 
    console.log(w,"I love Bangladesh"); 
    w++;
}

let pdoc= w.document.querySelector("p"); 
pdoc.classList.toggle('.blind');
