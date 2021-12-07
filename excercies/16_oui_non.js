var disMoi = "";
var i = 1;

while ((disMoi !== "oui") && (disMoi !== "non") && (disMoi !== "Oui") && (disMoi !== "Non")) {
    disMoi = prompt("Allez ! On joue à ni oui ni non ?");
    document.write('"' + disMoi + '" n\'est pas une réponse, pour la ' + i + ' ° fois, veux-tu jouer à ni oui ni non ? <br>')
    i++;
}
document.write("<p style='background-color: cyan; text-align:center;>PERDU ;-) Tu as tenu " + i + " tours.</p>");