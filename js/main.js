// Compito: Calcolare costo biglietto treno (variabili età passeggero, Km percorsi)
// Info Compito: 0.21€ a KM / Sconto 20% Under 18 / Sconto 40% Over 65.
//  1) Determinare età e Km percorsi da passeggeri tramite due prompt
//  2) Una volta determinato i parametri applicare i relativi sconti
//  0anni --------sconto20-------18anni--------prezzoPieno--------65ammi--------sconto40------99anni
//  3) impostare casella risultato

// inserimento parametri

// Variabili:

var nomecognome = prompt("cognome nome cliente");

var etaPasseggero = prompt("Qual'è la sua età");

var kmPercorsi = prompt("Quanti Km vorrà percorrere");

var costoKm = 0.21;
console.log(costoKm);

var costoViaggio = costoKm * kmPercorsi;
console.log(costoViaggio);

var costoKmUnder = (costoKm * 80) / 100;
console.log(costoKmUnder);

var costoViaggioUnder = (costoKmUnder * kmPercorsi);

var costoKmOver = (costoKm * 60) / 100;

var costoViaggioOver = (costoKmOver * kmPercorsi);

if (etaPasseggero < 18) {
    console.log("costoViaggioUnder");
    document.getElementById('prezzo').innerHTML= costoViaggioUnder;
} else if ((etaPasseggero >= 18) && (etaPasseggero < 65)) {
    console.log("costoViaggio");
    document.getElementById('prezzo').innerHTML= costoViaggio;
} else {
    console.log("costoViaggioOver");
    document.getElementById('prezzo').innerHTML= costoViaggioOver;
}

document.getElementById('nem').innerHTML= nomecognome;

document.getElementById('agecliente').innerHTML= etaPasseggero;

document.getElementById('km').innerHTML= kmPercorsi;
