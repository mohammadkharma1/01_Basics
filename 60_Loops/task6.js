let sum = 0;
let count = Number(prompt("How many numbers do you want to enter?")); 

for (let i = 1; i <= count; i++) {
    let num = Number(prompt(`Enter number ${i}:`)); 
    sum += num; 
}

let average = sum / count; 
console.log("The average is:", average);