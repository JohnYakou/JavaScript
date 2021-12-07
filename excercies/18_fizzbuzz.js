for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}

/* CORRECTION

for (var nombre = 1; nombre <= 100; nombre++){
    if((nombre % 3 === 0) && (nombre % 5 === 0)) console.log("FizzBuzz");
    else if(nombre % 3 === 0) console.log("Fizz");
    else if(nombre % 5 === 0) console.log("Buzz");
    else console.log(nombre);
} */