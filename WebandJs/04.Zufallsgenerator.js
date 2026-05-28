function zufallszahlGenerieren() {

  const min = parseInt(document.getElementById("min").value);
  const max = parseInt(document.getElementById("max").value);


  if (isNaN(min) || isNaN(max)) {
    alert("Bitte beide Werte eingeben!");
    return;
  }


  if (min > max) {
    alert("Der untere Wert darf nicht größer als der obere sein!");
    return;
  }

 
  const zufallszahl =
    Math.floor(Math.random() * (max - min + 1)) + min;


  document.getElementById("ausgabe").innerText = zufallszahl;
}