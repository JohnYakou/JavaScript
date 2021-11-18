alert("test");

var nb1 = 123;
var nb2 = "123";
console.log(nb1 == nb2); // true
// == compare les valeurs

console.log(nb1 === nb2); // false
// === compare les valeurs et les types

console.log(nb1 != nb2); // false
// != différent en valeur

console.log(nb1 !== nb2); // true
// !== different en valeur et en type

// ---------- Excercie ----------

var prenom, monAge, prenomLogin, ageLogin;
prenom ="John";
monAge = 22;

prenomLogin = prompt("Quel est votre prénom ?");

if(prenomLogin === prenom){
    ageLogin = parseInt(prompt("Votre âge ?"));
    if(ageLogin === monAge){
        alert("Bienvenu " + prenomLogin);
    }else{
        alert("Votre âge n'est pas celui stocké en base de donnée !")
    }
}else{
    alert("Attention, prénom non reconnu");
}