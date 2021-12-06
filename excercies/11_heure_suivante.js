/* var mois = parseInt(prompt("Saisir l'heure", "Saisir un chiffre entre 0 et 23"));
var minute = parseInt(prompt("Saisir les minutes", "Saisir un chiffre entre 0 et 59"));
var seconde = parseInt(prompt("Saisir les secondes", "Saisir un chiffre entre 0 et 59"));

if(mois === 14, minute === 17, seconde === 59){
    document.write("14h18m00s");
}else if(mois === 6, minute === 59, seconde === 59){
    document.write("7h00m00s");
}else if(mois === 23, minute === 59, seconde === 59){
    document.write("0h00m00s");
}else{
    document.write("Je n'ai pas compris votre demande. Arreter de faire l'idiot.");
} */

/* CORRECTION */

var heure = prompt("Entrez l'heure :");
var minute = prompt("Entrez les minutes :");
var seconde = prompt("Entrez les secondes :");

if((heure>=0) && (heure<=23) && (minute>=0) && (minute<=59) && (seconde>=0) && (seconde<=59)){
    seconde++;
    if(seconde===60){
        seconde=0;
        minute++;
        if(minute===0){
            minute=0;
            heure++;
            if(heure===24){
                heure = 0;
            }
        }
    }
    document.write("<p>Dans 1 seconde, il sera " + heure + "h " + minute + "m " + seconde + "s</p>");
}else{
    document.write("Heure incorrecte !");
}