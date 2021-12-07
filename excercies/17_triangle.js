// boucle FOR + document.write

var diese = "";
var rang;
for (rang = 0; rang <= 7; rang++) {
    diese += "#";
    document.write(diese + "<br>");
}

// boucle WHILE + console.log

var ligne = "";
var i = 1;
while (i <= 7) {
    ligne += "#"; // ligne = ligne + "#";
    console.log(ligne);
    i++;
}