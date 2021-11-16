var a = 2;
a = a - 1;
console.log("var a doit être égal à 1 : " + a);

a++; // a + 1
console.log("var a doit être égal à 2 : " + a);

var b = 8;
b += 2;
console.log("var b doit être égal à 10 : " + b);

var c = a + b * b;
console.log("var c doit être égal à 30 : " + c);

var d = a * b + b;
console.log("var d doit être égal à 40 : " + d);

var e = a * (b +b);
console.log("var e doit être égal à 40 : " + e);

var f = a * b / a;
console.log("var f doit être égal à 10 : " + f);

var g = b / a * a;
console.log("var g doit être égal à 10 : " + g);