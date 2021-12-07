var choix = prompt("Choisis un nombre entre 2 et 9 :");
while ((choix > 1) || (choix < 10)) {
    if ((choix >= 2) && (choix <= 9)) {
        for (var i = 1; i <= 10; i++) {
            var resultat = choix * i;
            document.write(choix + " X " + i + " = " + resultat + "<br>");
        }
        break;
    } else {
        choix = Number(prompt("Entrez un nombre entre 2 et 9 compris :"))
    }
}