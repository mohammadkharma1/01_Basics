let a =Number ( prompt("Welche Temperatur hat es draussen in Celsius?"));
let b =Number( prompt("Welche Feuchtigkeit ist draussen in Prozent ?"));

if (a >= 20 && a <= 25 && b < 60) {
  console.log("Perfect day for outdoor activities!");
} else {
  console.log("Maybe stay indoors today.");
}
