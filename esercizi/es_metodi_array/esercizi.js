const eventi = [
 { id: 1, 
    titolo: "Torneo di robotica", 
    categoria: "Tecnologia", 
    costo: 12, 
    posti: 24, 
    iscritti: 18, 
    attivo: true 
},

 { id: 2, 
    titolo: "Laboratorio di fotografia", 
    categoria: "Arte", 
    costo: 8, 
    posti: 15, 
    iscritti: 15, 
    attivo: 
    true 
},

 { id: 3, 
    titolo: "Visita al museo della scienza", 
    categoria: "Scienze", 
    costo: 20, 
    posti: 30, 
    iscritti: 21, 
    attivo: true 
},

 { id: 4, 
    titolo: "Corso di primo soccorso", 
    categoria: "Formazione", 
    costo: 0, 
    posti: 20, 
    iscritti: 12, 
    attivo: false 
},

 { id: 5, titolo: "Hackathon scolastico", 
    categoria: "Tecnologia", 
    costo: 5, 
    posti: 40, 
    iscritti: 35, 
    attivo: true 
},

 { id: 6, 
    titolo: "Teatro serale", 
    categoria: "Cultura", 
    costo: 15, 
    posti: 25, 
    iscritti: 9, 
    attivo: true 
}
];

//ES1
console.log("=== ESERCIZIO 1 ===");
const postiLiberi = (evento) => evento.posti - evento.iscritti;

eventi.forEach((evento) => {
  console.log(`${evento.titolo} | posti liberi: ${postiLiberi(evento)}`);
});

console.log(`Numero eventi: ${eventi.length}`);

//ES2
console.log("\n=== ESERCIZIO 2 ===");
const eventiDisponibili = eventi.map((evento) => ({
  ...evento,
  postiLiberi: postiLiberi(evento)
}));

console.table(eventiDisponibili);
console.log("L'array originale 'eventi' ha la proprietà postiLiberi?", 
    'postiLiberi' in eventi[0]);

//ES3
console.log("\n=== ESERCIZIO 3 ===");

const eventiPrenotabili = eventi.filter((evento) => 
    evento.attivo && postiLiberi(evento) > 0
);

const eventiTecnologia = eventi.filter((evento) => 
    evento.categoria === "Tecnologia"
);

console.log("Eventi Prenotabili:");
console.table(eventiPrenotabili);
console.log("Eventi Tecnologia:");
console.table(eventiTecnologia);
console.log("Lunghezza array originale eventi:", eventi.length);

//ES4
console.log("\n=== ESERCIZIO 4 ===");
const eventoId3 = eventi.find((evento) => evento.id === 3);

if (eventoId3) {
  console.log(`Evento ID 3 -> Titolo: ${eventoId3.titolo}, Iscritti: ${eventoId3.iscritti}`);
} else {
  console.log("Evento non trovato");
}

const primoCompleto = eventi.find((evento) => 
    postiLiberi(evento) === 0
);

console.log(`Primo evento completo: ${primoCompleto ? primoCompleto.titolo : "Nessuno"}`);

const eventoInesistente = eventi.find((evento) => evento.id === 99);
if (eventoInesistente) {
  console.log(eventoInesistente.titolo);
} else {
  console.log("Evento non trovato");
}

//ES5
console.log("\n=== ESERCIZIO 5 ===");

const totaleIscrittiAttivi = eventi.reduce((acc, evento) => {
  return evento.attivo ? acc + evento.iscritti : acc;
}, 0);

console.log(`Il numero totale di iscritti agli eventi attivi è: ${totaleIscrittiAttivi}`);

const incassoPrevistoAttivi = eventi.reduce((acc, evento) => {
  return evento.attivo ? acc + evento.costo * evento.iscritti : acc;
}, 0);

console.log(`L'incasso totale previsto per gli 
    eventi attivi è di: ${incassoPrevistoAttivi}€`);

//ES6
const eventiOrdinati = [...eventi].sort((a, b) => a.costo - b.costo);

console.log("Costo primo evento in 'eventi':", eventi[0].costo);    
console.log("Costo primo evento in 'eventiOrdinati':", eventiOrdinati[0].costo); 

const salvaEventi = (lista) => {
  const jsonString = JSON.stringify(lista);
  localStorage.setItem("eventiScolastici", jsonString);
};

const caricaEventi = () => {
  const jsonString = localStorage.getItem("eventiScolastici");
  if (jsonString !== null) {
    return JSON.parse(jsonString);
  } else {
    return [...eventi];
  }
};

salvaEventi(eventiOrdinati);
const datiCaricati = caricaEventi();
console.log("Dati letti dal localStorage e convertiti da JSON ad array:");
console.table(datiCaricati);