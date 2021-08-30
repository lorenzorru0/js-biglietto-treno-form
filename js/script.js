var buttonGenera = document.getElementById("genera");
var buttonAnnulla = document.getElementById("annulla");

buttonGenera.addEventListener("click", 
    function() {
        var offertaBiglietto;
        var prezzoBiglietto;
        var nomeCognome = document.getElementById("nome").value;
        var kmPercorsi = parseInt(document.getElementById("km").value);
        var fasciaEta = document.getElementById("fasciaEta").value;

        if (nomeCognome.length == 0) {
            document.getElementById("biglietto").classList.remove("view");
            document.getElementById("errore").classList.add("block");
        } else if (isNaN(kmPercorsi) || kmPercorsi <= 0) {
            document.getElementById("biglietto").classList.remove("view");
            document.getElementById("errore").classList.add("block");
        } else if (fasciaEta == undefined) {
            document.getElementById("biglietto").classList.remove("view");
            document.getElementById("errore").classList.add("block");
        } else {
            document.getElementById("errore").classList.remove("block");
            if (fasciaEta == "minorenne") {
                offertaBiglietto = "Offerta Minorenni";
                prezzoBiglietto = (kmPercorsi * 0.21) * 0.2;
            } else if (fasciaEta == "over") {
                offertaBiglietto = "Offerta Silver";
                prezzoBiglietto = (kmPercorsi * 0.21) * 0.4;
            } else {
                offertaBiglietto = "Biglietto Standard";
                prezzoBiglietto = kmPercorsi * 0.21;
            }

            document.getElementById("nome-biglietto").innerHTML = nomeCognome;
            document.getElementById("offerta-biglietto").innerHTML = offertaBiglietto;
            function randomIntFromInterval(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min)
            }
            document.getElementById("carrozza").innerHTML = randomIntFromInterval(1, 6);
            document.getElementById("codiceCP").innerHTML = randomIntFromInterval(90000, 99999);
            document.getElementById("prezzo").innerHTML = prezzoBiglietto.toFixed(2);
            document.getElementById("biglietto").classList.add("view");
        }
    }
);

buttonAnnulla.addEventListener("click", 
    function() {
        document.getElementById("nome").value = "";
        document.getElementById("km").value = "";
        document.getElementById("fasciaEta").value = "";
        document.getElementById("biglietto").classList.remove("view");
        document.getElementById("errore").classList.remove("block");
    }
);
