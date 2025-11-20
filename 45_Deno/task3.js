let num1 = prompt("Gib die erste Zahl ein");
let num2 = prompt("Gib mir die zweite Zahl ein ");

let number1 = Number(num1)
let number2 = Number(num2)

let selection = prompt("Nenn mir eine Rechenart");
console.log("selection:" + selection);


if (selection === "+"); {
    console.log(number1 + number2);
}
if (selection === "-"); {
    console.log(number1 - number2);
}
// if (selection === "*"); {
//     console.log(number1 * number2);
// }
// if (selection === "/"); {
//     console.log(number1 / number2);
// }