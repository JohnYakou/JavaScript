// WHILE

var manege = 0;
while(manege < 10){
    manege++;
    document.write("C'est le tour numéro n " + manege + " <br>");
}
document.write("<hr>");

// FOR

for(var i = 1; i <= 10; i++){
    document.write("C'est le tour numéro n " + i + " <br>");
}
document.write("<hr>");

// QUESTION 2

// PROMPT WHILE

var question = parseInt(prompt("Combien de tours voulez-vous faire ?"));
var compteur = 1;
while(compteur <= question){
    document.write("C'est le tour numéro n " + compteur + " <br>");
    compteur++;
}
document.write("<hr>");

// PROMPT FOR

var nbTours = parseInt(prompt("Combien de tours voulez-vous faire ?"));
for(var tour = 1; tour <= nbTours; tour++){
    document.write("C'est le tour numéro n " + tour + " <br>");
}
document.write("<hr>");