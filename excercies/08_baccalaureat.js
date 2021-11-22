/* var bac = parseInt(prompt("Saisisez votre moyenne du Baccalaureat."));

if(bac < 10){
    document.write("Recalé");
}else if(bac === 10){
    document.write("Reçu");
}else if(bac > 12){
    document.write("Reçu avec mention");
} */


// Correction

var moyenne = parseFloat(prompt("Quelle est ta moyenne au bac ?")); /* parseFloat permet d'afficher des chiffres à virgules */

if(moyenne < 10){
    document.write("Tu es recalé.");
}else if((moyenne >= 10) && (moyenne < 12)){
    document.write("Tu es reçu.");
}else if((moyenne >= 12) && (moyenne <= 20)){
    document.write("Tu es reçu avec mention.");
}else{
    document.write("Et de 0 à 20 ça donne ?");
}