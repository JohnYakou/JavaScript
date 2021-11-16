//alert("Test");

// -- Structure de base IF

if(true){ // entre parenthèse la condition
    /* code */
}


// Exemple

var nb1 = 10;
if(nb1 < 50){
    console.log("nb1 est bien inférieur à 50");
}

// Fin exemple

if(true){
    // code si true
} else{
    // code sinon
}

// Example

nb1 = 60;
if(nb1 < 50){
    console.log("nb1 est bien inférieur à 50");
} else{
    console.log("nb1 est supérieur à 50");
}

// Excercie

// on utilise le if pour vérifier l'age de l'internaute.
// Si il est majeur, on lui souhaite la bienvenue
// Sinon [1] je le signal et [2] je le renvoie vers un autre site

var Age = prompt("Saisissez votre âge")
if(Age > 18){
    console.log("Nous vous souhaitons la bienvenue");
} else{
    alert("Désolé, vous êtes trop jeune, vous allez être rediriger vers Google 😅")
    window.location.href = "http://google.com";
}

// Fin excercie

// Correction

var Majorite = 18;

var age = parseInt(prompt("Indiquez votre âge"));

if(age >= Majorite){
    alert("Bienvenue");
}else{
    alert("Allez voir un autre site...")
    document.location.href = "http://www.google.com";
}

// Fin correction