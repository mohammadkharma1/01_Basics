let grade = Number(prompt("Welche Punkte hast du?"));
let attendance = Number(prompt("Wie gut ist deine Mitarbeit?"));
let extraCredit = Number(prompt("Wie viele Sachen hast du extra gemacht?"));

// let grade = 80;
// let attendance = 34;
// let extraCredit = 4;

if (grade >= 80 && (attendance >= 90 || extraCredit >= 5)) {
  console.log("Elegible for advanced exam.");
} else {
  console.log("not eligible for advanced exam.");
}
