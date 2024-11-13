let nomJour = "Jeudi";
let numJour = 24;
let nomMois = "Octobre";
let isHiver = true;

console.log(isHiver,nomJour,numJour,nomMois);

let tabJours = ["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"];
let tabMois = ["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"];
console.log(tabJours[3]);
console.log(tabMois[9])

let MadateV1 = {
	"jour" : tabJours[2],
	"mois" : tabMois[11]
}
let date =  new Date();
let MadateV2 = {
	"jour" : date.getDay(),
    "mois" : tabMois[date.getMonth()],
    "année" : date.getFullYear()
}
console.log(MadateV1);
console.log(MadateV2);


let nbr1 = 3;
let nbr2 = 7;
let nbr3 = 8;
let nbr4 = 21;

console.log(nbr1+nbr2);
console.log(nbr4-nbr3);

nbr2 = nbr1*nbr2;
console.log(nbr2);
nbr2++;
console.log(nbr2);
console.log(nbr4/nbr1);
console.log(nbr4%nbr1);

let nomSerie = prompt("Quelle est ta série préférée ?")
let nomPerso = prompt("Quelle est ton personnage favori ?")

alert(`Ma série préférée est ${nomSerie} et mon personnage est ${nomPerso}!`);