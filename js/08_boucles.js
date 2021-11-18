//alert("test");

/* Les boucles */

// la boucle FOR

/*
for(3 arguments){
    /* code
}
    1. Initialise un compteur, par défaut on utilise i
    2. Condition à véfifier (vrai)
    3. "Pas" d'incrémentation => combien j'ajoute par tour (i++) (ou de décrémentation)
*/

for(var i = 1; i<= 10; i+=2){
    document.write("<p>Instruction exécutée : " + i + " fois.</p>");
}

// La boucle WHILE (tant que)

var j = 1;
while (j <= 10){
    document.write("<p>Instruction exécutée : " + j + " fois.</p>");
    j++;
}

/* Excercie

J'ai 1000 $ sur mon compte, chaque mois j'ajoute 50$.
Combien de temps me faut-il pour avoir 2000$ sur mon compte ?
*/

var a = 1000;
while (a <= 2000){
    document.write("<p>J'ai : " + a + " euros.</p>");
    a = a + 50;
}

// Correction avec while

/* var monCompte = 1000;
var temps = 0;
while(monCompte < 2000){
    monCompte += 50;
    temps++;
}
document.write("<p> Sous sur mon compte : " + monCompte + "</p>")
document.write("<p> Jusqu'à 2000 euros, il me faut : " + monCompte + " mois.</p>") */

// Correction avec for

var tps = 0;
for(var mesSous = 1000; mesSous < 2000; mesSous+= 50){
    document.write("<p>Le mois suivant, j'ai : " + mesSous + " euros.</p>");
    tps++;
}
document.write("<p>Il m'aura fallu : " + tps + " mois.</p>");