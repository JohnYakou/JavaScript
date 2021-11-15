//alert("c'est bon"); On a testé notre chemin avec une fonction alert()

/* ---------------------------------------------------------------------
LA CONCATENATION
----------------------------------------------------------------------- */

var annee = 2017; // variable de type nombre
var futur = 5;
var calcul = annee + futur;
console.log(calcul);
document.write(calcul + "<br>"); // affiche le résultat sur la page avec un br

var mois = "7";
var calcul2 = annee + mois;
console.log(calcul2);
document.write(calcul2 + "<br>");

var debutPhrase = "Aujourd'hui, ";
var nbStagiaires = 11;
var suitePhrase = " stagiaires";
var finPhrase = "sont présents.";
document.write(debutPhrase + nbStagiaires + suitePhrase + " " + finPhrase); // le " " est souvent utilisé lors de la récupéraion de données saisies par l'utilisateur