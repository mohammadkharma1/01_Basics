function rechnen() {
  var religion = Number(document.getElementById("religion").value);
  var mathe = Number(document.getElementById("mathe").value);
  var deutsch = Number(document.getElementById("deutsch").value);
  var englisch = Number(document.getElementById("englisch").value);
  var amec = Number(document.getElementById("amec").value);
  var nwes = Number(document.getElementById("nwes").value);
  var sport = Number(document.getElementById("sport").value);
  var swp = Number(document.getElementById("swp").value);
  var infi = Number(document.getElementById("infi").value);
  var physik = Number(document.getElementById("physik").value);
  var geo = Number(document.getElementById("geo").value);
  var bet = Number(document.getElementById("bet").value);
  var werk = Number(document.getElementById("werk").value);
  var mt = Number(document.getElementById("mt").value);
 
  var summe =
    religion +
    mathe +
    deutsch +
    englisch +
    amec +
    nwes +
    sport +
    swp +
    infi +
    physik +
    geo +
    bet +
    werk +
    mt;
 
  var durchschnitt = summe / 14;
 
  document.getElementById("ausgabe").innerHTML =
    "Dein Durchschnitt ist: " + durchschnitt.toFixed(2);
}