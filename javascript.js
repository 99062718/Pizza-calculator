/*
Tycho Hartingsveld
Software developer
*/

const S = 7;
const M = 10;
const L = 12;
var costenTotaal = 0;
var costen;
// het maakt hier 3 constanten en een variabel aan die de kosten van de pizza per groote en de totale costen bepalen

function pizzaCosten(size, aantal){
	return size * aantal;
}
// hier maakt het een functie voor het berekenen van de kosten van de pizzas

aantal = prompt("Hoeveel kleine pizzas wilt u hebben?"); // hier vragen we de klant hoeveel kleine pizzas zij willen hebben
costen = pizzaCosten(S, aantal); // hier gebruiken we de eerder beschreven functie
document.write("-----------------------<br>" + aantal + "x Kleine pizzas - €" + costen + "<br>"); // hier schrijven we de prijs en het aantal op het scherm
costenTotaal += costen; // hier berekenen we de totale costen zo ver

aantal = prompt("Hoeveel medium pizzas wilt u hebben?");
costen = pizzaCosten(M, aantal);
document.write(aantal + "x Medium pizzas - €" + costen + "<br>");
costenTotaal += costen;
// hier gebeurt hetzelfde als bij kleine pizzas maar dan met medium

aantal = prompt("Hoeveel groote pizzas wilt u hebben?");
costen = pizzaCosten(L, aantal);
document.write(aantal + "x Groote pizzas - €" + costen + "<br>");
costenTotaal += costen;
// hier gebeurt hetzelfde als bij kleine pizzas maar dan met groote pizzas

alert("Bedankt voor het bestellen bij pizzammmlekker.nl. Eet smakelijk!"); // we bedanken de klankt hier voor bestellen
document.write("Totale costen - €" + costenTotaal + "<br>-----------------------"); // we schrijven hier het totale bedrag op