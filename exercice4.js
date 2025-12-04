let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));

for (let i = min; i <= max; i++) {
    let output = "";
    
    if (i % 3 === 0 && i % 5 === 0) {
        output = "Five&Three";
    } 
    
    else if (i % 3 === 0) {
        output = "Three";
    } 
    
    else if (i % 5 === 0) {
        output = "Five";
    } 
    
    else {
        output = i;
    }
    
    console.log(output);
}