/*
Node.JS
Ambiente di esecuzione, chiamato anche Runtime.
*/

const prodotti = [
 {
   id: 1,
   nome: "Notebook",
   categoria: "Informatica",
   prezzo: 850,
   quantita: 2,
   disponibile: true
 },
 {
   id: 2,
   nome: "Mouse",
   categoria: "Accessori",
   prezzo: 25,
   quantita: 5,
   disponibile: true
 },
 {
   id: 3,
   nome: "Monitor",
   categoria: "Informatica",
   prezzo: 230,
   quantita: 3,
   disponibile: false
 },
 {
   id: 4,
   nome: "Tastiera",
   categoria: "Acccessori",
   prezzo: 45,
   quantita: 4,
   disponibile: true
 }
];

//console.log(prodotti);
console.table(prodotti);

const calcolaValore = (prodotti) =>{
    const valore = prodotti.prezzo * prodotti.quantita;
    return valore;
}

console.log("\nARROW FUNCTION")
console.log("VCalore dei Notebokk: ", calcolaValore(prodotti[0]), " €")

const mostraProdotto = (prodotti, indice) =>{
    console.log(
        `${indice +1}. ${prodotti.nome} - ${prodotti.prezzo} € `
    );
}

//forech
prodotti.forEach(mostraProdotto);

/*
MAP => è un metodo che esegue una funzione callback per ogni elemneto e costruisce un nuovo array con i valore restituiti dalla callback
Significa che nao prende gli elemneyei dellìarray uno alla volta e, per ciascuno, chiama la funzione che gli abbiamo fornito

I vari passaggi:
1. scorre l'aaray
2. posa lìelemnto alla callback
3. la clallback elabora quell'elemnto
4. map() raccoglie tutti irisultati in un nuovo array
*/

console.log("\nMAP");

const nomiProdotti = prodotti.map((prodotti) => {
    return prodotti.nome;
})

const valoriProdotti = prodotti.map((prodotti) => {
    return prodotti.prezzo * prodotti.quantita;
})

console.log("Nomi dei prodotti: ");
console.log(nomiProdotti);
console.log("Valore dei prodotti: ");
console.log(valoriProdotti);

/*
FILTER => restituisce un nuov array solamente con elemneti che rispettano la condizione
*/
console.log("\nFILTER")

const prodottiCostosi = prodotti.filter((prodotti) => {
    return prodotti.prezzo > 150
})

console.log("Prodotti con prezzi maggiori di 150: ")
console.log(prodottiCostosi)
console.log("\n")

//Visualizza prodotti disponibili usanbdo filter
const prodottiDisponibili = prodotti.filter((prodotti) => {
  return prodotti.disponibile
})

console.log("Prodotti disponibili: ")
console.log(prodottiDisponibili)
console.log("\n")

/*
FIND => trova elemanto cvhe rispetta la condizione
*/

const prodottiTRovati = prodotti.find((prodotti) => {
  return prodotti.id === 3
})

console.log("Prodotti trovati: ")
console.log(prodottiTRovati)
console.log("\n")


/*
REDUCE => elabora tutti glie elemntii dell'array e restituisce un unico risultato

In questo esempio calcolo il valore complessivo dei prodotti
array.reduce((accumulatore, elemento => {}))
*/

const valoreTot = prodotti.reduce((totale, prodotti) => {
  const valoreProdotto = prodotti.prezzo * prodotti.quantita;
  return totale + valoreProdotto;
}, 0);

console.log(`Valore complessivo dei prodotti: ${valoreTot} euro`)

const n = [1, 2, 3, 4]

const somma = n.reduce((totale, n) => {
  return totale + n;
}, 0);

console.log(somma)

/*
SPREAD => permette di espandere gli elemneti di un arrary:
  -copiare elementi,
  -aggiungere elementi,
  -unire più array  
*/

const copiaArray = [...prodotti];
console.table(copiaArray);

const altri =[{
  id: 5,
   nome: "hello",
   categoria: "gpo",
   prezzo: 230,
   quantita: 3,
   disponibile: true
}]

const tot = [
  ...prodotti,
  ...altri
]

console.log(tot);

/*
ordina gli elemneti di un array
crea una copia e ordina in mod crescente
*/
 
array = [1, 2, 3, 4, 6, 58, 7]

const ordina = array.toSorted((a, b) => a - b);
console.log(array)
console.log(ordina)

const ordina2 = [...array].sort((a, b) => a - b);
consol.log(ordina2)