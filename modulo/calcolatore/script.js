const form = document.getElementById("formAcquisto");
const risultato = document.getElementById("risultato");
const corpoTabella = document.getElementById("corpoTabella");
const totaleComplessivo = document.getElementById("totaleComplessivo");
const bottoneEliminaTutto = document.getElementById("eliminatutto");
const prodotti = JSON.parse(localStorage.getItem("prodotti")) || [];

form.addEventListener("submit", gestisciSubmit);
bottoneEliminaTutto.addEventListener("click", eliminaTutto);

function salvaDati() {
    localStorage.setItem("prodotti", JSON.stringify(prodotti));
}

function calcolaSubtotale(prezzo, quantita) {
    return prezzo * quantita;
}

function calcolaSconto(subtotale) {
    let sconto = 0;
    if (subtotale >= 100) {
        sconto = subtotale * 0.10;
    }
    return sconto;
}

function calcolaTotale(subtotale, sconto) {
    return subtotale - sconto;
}

function calcolaTotaleComplessivo() {
    let somma = 0;
    for (let i = 0; i < prodotti.length; i++) {
        somma += prodotti[i].totale;
    }
    return somma;
}

function mostraRisultato(nome, subtotale, sconto, totale) {
    risultato.textContent = `${nome} - Subtotale: ${subtotale.toFixed(2)} euro - ` +
        `Sconto: ${sconto.toFixed(2)} euro - Totale: ${totale.toFixed(2)} euro`;
}

function totComplessivo() {
    totaleComplessivo.textContent =
        `Totale complessivo: ${calcolaTotaleComplessivo().toFixed(2)} euro`;
}

function eliminaTutto() {
    prodotti.length = 0;     
    salvaDati();
    corpoTabella.innerHTML = "";
    risultato.textContent = "";
    totComplessivo();
}

function creaRiga(prodotto) {
    const riga = document.createElement("tr");
    const campi = [
        "nome", 
        "prezzo", 
        "quantita", 
        "subtotale", 
        "sconto", 
        "totale"
    ];

    for (let i = 0; i < campi.length; i++) {
        const cella = document.createElement("td");
        const valore = prodotto[campi[i]];
        cella.textContent = valore;
        riga.appendChild(cella);
    }

    const cellaAzioni = document.createElement("td");
    const bottoneElimina = document.createElement("button");
    bottoneElimina.textContent = "Elimina";

    bottoneElimina.addEventListener("click", function () {
        riga.remove();                                   
        prodotti.splice(prodotti.indexOf(prodotto), 1);  
        salvaDati();                                    
        totComplessivo();                     
    });

    cellaAzioni.appendChild(bottoneElimina);
    riga.appendChild(cellaAzioni);
    corpoTabella.appendChild(riga);
}

function ricostruisciTabella() {
    corpoTabella.innerHTML = "";
    for (let i = 0; i < prodotti.length; i++) {
        creaRiga(prodotti[i]);
    }
    totComplessivo();
}

function gestisciSubmit(event) {
    event.preventDefault();

    const nome = document.getElementById("prodotto").value.trim();
    const prezzo = Number(document.getElementById("prezzo").value);
    const quantita = Number(document.getElementById("quantita").value);

    if (nome === "" || prezzo <= 0 || quantita <= 0) {
        return;
    }

    const subtotale = calcolaSubtotale(prezzo, quantita);
    const sconto = calcolaSconto(subtotale);
    const totale = calcolaTotale(subtotale, sconto);

    mostraRisultato(nome, subtotale, sconto, totale);

    const prodotto = { 
        nome, 
        prezzo, 
        quantita, 
        subtotale, 
        sconto, 
        totale 
    };

    prodotti.push(prodotto);

    creaRiga(prodotto);
    totComplessivo();
    salvaDati();
    form.reset();
}