var nombre1 = 5;
var nombre2 = 3;

var nb3 = 3;
var nb4 = 5;

nombre1 = nb3;
console.log(nombre1);
document.write("nombre1 vaut désormais 3 <br>");


nombre2 = nb4;
console.log(nombre2);
document.write("nombre2 vaut désormais 5");

// Correction

var nombre1 = 5;
var nombre2 = 3;

var temporaire;

console.log("nombre1 = 5 : " + nombre1);
console.log("nombre2 = 3 : " + nombre2);

var temporaire = nombre1;
nombre1 = nombre2;
nombre2 = temporaire;

console.log("nombre1 = 5 : " + nombre1);
console.log("nombre2 = 3 : " + nombre2);