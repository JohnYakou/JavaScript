//alert("test");

// L'opérateur ET : && ou AND => cumule deux conditions

// Exemple

if((prenomLogin === prenom) &&(ageLogin === monAge)){
    /* code si les deux conditions sont vraies */
}

if((A) && (B)){...}
=> si A est FAUX et B est VRAi => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAi => VRAI

// L'opérateur OU : || ou OR (| = barre oblique = pipe)

if ((C) OR (D)){...}
=> si C est FAUX et D est FAUX => FAUX
=> si C est FAUX et D est VRAI => VRAI
=> si C est VRAI et D est FAUX => VRAI
=> si C est VRAI et D est VRAI => VRAI

// L'opérateur "!" signifie le contaire de quelquechose

var utilisateur = true;
if(!utilisateurLog){
    // si l'utilisateur n'est pas loggé
}

// ce qui revient à écrire :

if(utilisateurLog == false){
    // si l'utilisateur n'est psa loggé
}