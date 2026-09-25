//Aggiunta local storage pèer conservare i dati

/*
Prcedimento:
1. recuperae gli eventuali i dati salvati (F5);
2. visualizzare nella tabella;
3. salvare ogni nuovo dato nel local storage;
4. aggiornare il local storage anche quando elimino un feedback.
*/

const form = document.getElementById("form");
const messaggio = document.getElementById("corpoTabella");
//const dati = [];
//Recupero dal localstorage
const dati = JSON.parse(localStorage.getItem("form")) || []; 

function creaRiga(dato) {
    const campi = [
        "nome",
        "email",
        "data",
        "ora",
        "tipoFeedback",
        "testoFeedback",
        "iscrizione"
    ];
    const riga = document.createElement("tr");

    for (let i = 0; i < campi.length; i++) {
        const cella = document.createElement("td");
        cella.textContent = dato[campi[i]];
        riga.appendChild(cella);
    }

    const cellaAzioni = document.createElement("td");
    const bottoneElimina = document.createElement("button");
    bottoneElimina.textContent = "X";

    bottoneElimina.addEventListener("click", function () {
        riga.remove();
        dati.splice(dati.indexOf(dato), 1);
    });

    cellaAzioni.appendChild(bottoneElimina);
    riga.appendChild(cellaAzioni);

    messaggio.appendChild(riga);
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const data = document.getElementById("data").value;
    const ora = document.getElementById("ora").value;
    const tipoFeedback = document.getElementById("tipoFeedback").value;
    const testoFeedback = document.getElementById("testoFeedback").value.trim();
    const newsletter = document.getElementById("iscrizione").checked;

    if (!nome || !email || !data || !ora || !tipoFeedback || !testoFeedback) {
        alert("Compila tutti i campi obbligatori.");
        return;
    }

    const iscrizione = newsletter ? "Si" : "No";
    const dato = {
        nome,
        email,
        data,
        ora,
        tipoFeedback,
        testoFeedback,
        iscrizione
    };

    dati.push(dato);

    //salvataggio in local storage
    //memorizza solo stringhe, quindi va converitto tutto in una stringa
    localStorage.setItem("form", JSON.stringify(dati));

    creaRiga(dato);
    form.reset();
});