// alert("OK");

// -- 1. Addition

// Je déclare plusieurs variables
var nb1, nb2, resultat;

// J'affecte des variables
nb1 = 10;
nb2 = 5;

// J'utilise mes variables avec calcul
resultat = nb1 + nb2;

// J'ffiche le résultat dans la console
console.log(resultat);

// -- 2. Soustraction

resultat = nb1 - nb2;
console.log(resultat);

// -- 3. Multiplications
resultat = nb1 * nb2;
console.log(resultat);

// 4. Divisionq
resultat = nb1 / nb2;
console.log(resultat);

// 5. Modulo
// Le modulo retourne le reste d'une division
resultat = nb1 % nb2;
console.log(resultat);

nb1 = 11;
resultat = nb1 % nb2;
console.log("Le reste de la division de " + nb1 + " par " + nb2 + " est égal à : " + resultat);

// -- 6. Les écritures simplifiées
nb1 = 15;
nb1 = nb1 + 5; // égal à 20

nb1 += 10; // nb1 = nb1 + 10
console.log('Le résultat de "nb1 += 10" est ' + nb1);

nb2 -= 2; // nb2 = nb2 - 2
console.log(nb2); // L'écriture simplifiée fonctionne aussi avec les autres opérateurs

// Je peux échapper un caractère avec un anti-slash (alt gr + 8)