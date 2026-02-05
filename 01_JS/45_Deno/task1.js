let password = ("1000");
let passwordFromUser = prompt("Enter your password");

if (passwordFromUser === password) {
    console.log("Access granted");
}
if (passwordFromUser !== password) {
    console.log("Access denied");
}