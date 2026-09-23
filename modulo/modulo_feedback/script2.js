const form = document.getElementById("form");
const corpoTabella = document.getElementById("corpoTabella");
const dati = [];

function creaRiga(valori){
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

    corpoTabella.appendChild(riga);
    form.reset();
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
});