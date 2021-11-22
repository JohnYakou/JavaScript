/* var mois = parseInt(prompt("Saisissez un mois."));

if(mois = 1 & 3 & 5 & 7 & 8 & 10 & 12){
    document.write("Il y a 31 jours dans ce mois.");
}else if(mois = 4 & 6 & 9 & 11){
    document.write("Il y a 30 jous dans ce mois.")
}else{
    document.write("Il y a 28 jours dans ce mois.");
} */

var mois = parseInt(prompt("Quel mois choisissez-vous ?", "saisir un chiffre entre 1 et 12"));

if(mois === 2){
    document.write("Le mois de février contient 28 jours");
}else if((mois === 4) || (mois === 6) || (mois === 9) || (mois === 11)){
    document.write("Le mois numéro " + mois + " fait 30 jours");
}else if((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)){
    document.write("Le mois numéro " + mois + " fait 31 jours");
}else{
    document.write("Le mous numéro " + mois + " n'est pas dans le calendrier.");
}