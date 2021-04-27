// chiedo all’utente il numero di chilometri che vuole percorrere
var chilometriTragitto = parseInt(prompt("Quanti chilometri devi percorrere?"));
if (isNaN(chilometriTragitto)) {
  alert("Puoi inserire solo numeri");
} else {
}

// chiedo la sua età
var etaPasseggero = parseInt(prompt("Quanti anni hai?"));
if (isNaN(etaPasseggero)) {
  alert("Puoi inserire solo i numeri");
} else {
}

// stabilisco il costo del biglietto in base ai km inseriti dall'utente (0.21 euro al km)
var costoUnChilometro = 0.21;
var costoBiglietto = chilometriTragitto * costoUnChilometro;

// stabilisco gli sconti
var scontoVenti = (costoBiglietto * 20) / 100;
var scontoQuaranta = (costoBiglietto * 40) / 100;

// stabilisco un vincolo
if (isNaN(chilometriTragitto) || isNaN(etaPasseggero)) {
  alert("Puoi inserire solo i numeri");
} else {
  if (etaPasseggero < 18) {
    costoBiglietto = costoBiglietto - scontoVenti;
    var scontoApplicato = scontoVenti;
  } else if (etaPasseggero > 65) {
    costoBiglietto = costoBiglietto - scontoQuaranta;
    scontoApplicato = scontoQuaranta;
  } else {
    costoBiglietto;
    scontoApplicato = 0;
  }
}

// stampo il costo del biglietto
document.getElementById("costo-biglietto").innerHTML = costoBiglietto.toFixed(2);

// stampo il riepilogo Dati
document.getElementById("chilometri-tragitto").innerHTML = chilometriTragitto;
document.getElementById("eta-passeggero").innerHTML = etaPasseggero;
document.getElementById("sconto-applicato").innerHTML = scontoApplicato.toFixed(2);
  
