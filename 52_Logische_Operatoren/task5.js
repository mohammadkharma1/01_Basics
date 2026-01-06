
let heartRate= Number (prompt("What is your heartrate?"));
let age = Number (prompt("How old are you?"));

if(age< 30 && heartRate<100){
    console.log("Light exercise")
}

else if (age < 15 || heartRate< 150){
    console.log("it's hard but possible")
}

else{
    console.log("its too hard")
}