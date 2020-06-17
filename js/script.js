var creaBiglietto = document.getElementById('creaBiglietto');


creaBiglietto.addEventListener("click", function () {
  var nome = document.getElementById('nome').value;
  var km = document.getElementById('km').value;
  var categoria = document.getElementById('categoria').value;
  var costoBiglietto = 0.21;
  var costofinale;

  if (categoria == "under18") {
    costofinale = (costoBiglietto * km) * 0.8;
  }
  else if (categoria == "over65") {
    costofinale = (costoBiglietto * km) * 0.6;
  }
  else {
    costofinale = costoBiglietto * km;
  }

var numTreno = Math.floor(Math.random() * (10000 - 9000 + 1)) + 9000;
var numCarrozza = Math.floor(Math.random() * (13 - 1 + 1)) + 1;

document.getElementById('passeggero').innerHTML = nome;
document.getElementById('chilometraggio').innerHTML = km;
document.getElementById('numTreno').innerHTML = numTreno;
document.getElementById('numCarrozza').innerHTML = numCarrozza;
document.getElementById('prezzototale').innerHTML = costofinale.toFixed(2);

document.getElementById('biglietto').classList.add("show");
document.getElementById('biglietto').classList.remove("hidden");

})

annullaBiglietto.addEventListener("click", function (){

  document.getElementById('biglietto').classList.add("hidden");
  document.getElementById('biglietto').classList.remove("show");

  document.getElementById('nome').value = "";
  document.getElementById('km').value = "";
  document.getElementById('categoria').value = "";


})
