var nb1 = parseInt(prompt("Saisisser un nombre."));
var nb2 = parseInt(prompt("Saisissez un autre nombre."));

if(nb1 > nb2){
    document.write("<p>Le " + nb1 + " est plus grand que le " + nb2 + " </p>");
}else if(nb2 > nb1){
    document.write("<p>Le " + nb2 + " est plus grand que le " + nb1 + "</p>");
}else if(nb1 === nb2){
    document.write("<p>Le "+ nb1 + " est égal au " + nb2 + "</p>");
}else{
    document.write("Veillez entrez des nombres s'il vous plait.");
}

/*correction

var nb1 = parseInt(prompt("Entrez un nombre."));
var nb2 = parseInt(promp("Entrez un deuxième nombre"));

if( (!isNaN(nb1)) && (!isNaN(nb2)) ){
    if(nb1 < nb2){
        document.write("Votre premier nombre : " + nb1 + " est plus petit que votre deuxième nombre : " + nb2);
    }else if(nb1 > nb2){
        document.write("Votre premier nombre : " + nb1 + " est plus grand que votre deuxième nombre : " + nb2);
    }else{
        document.write("Votre premier nombre : " + nb1 + " est égal à votre deuxième : " + nb2);
    }
}else{
    alert("Vous n'avez pas saisi de chiffre(s)");
} */