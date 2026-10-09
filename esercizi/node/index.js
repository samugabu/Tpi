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