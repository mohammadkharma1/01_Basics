let a = prompt("Wie viel Prozent hast du bei der Schularbeit gehabt?");
let Grade = Number(a);
if (Grade >= 90) {
  console.log("Grade: A");
} else if (Grade >= 80 && a < 90) {
  console.log("Grade : B");
} else if (Grade >= 60 && a < 70) {
  console.log("Grade:C");
} else if (Grade >= 40 && a < 50) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
