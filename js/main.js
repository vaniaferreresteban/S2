"use strict";

//1.1 Arrow Functions
const add = (a, b) => document.getElementById("e1.1.1").innerHTML += a + b;
const randomNumber = () => document.getElementById("e1.1.2").innerHTML += Math.floor(Math.random() * 99) + 1;
const greet = (name) => {
    const person = new Person(name);
    return person.greet();
}
const printNumbers = (numbersArr) => numbersArr.forEach(number => document.getElementById("e1.1.4").innerHTML += number + ', ');

const ex115 = (message) => setTimeout(() => {
    console.log(message);
}, "3000");

//1.2 Operadors Ternaris
const potConduir = (age) => age >= 18 ? document.getElementById("e1.2.1").innerHTML += "Pots conduïr" : document.getElementById("e1.2.1").innerHTML += "No pots conduir";

const ex122 = (a, b) => a > b ? document.getElementById("e1.2.2").innerHTML += "num1 és més gran" : document.getElementById("e1.2.2").innerHTML += "num2 és més gran";

const ex123 = (number) => {
    if (Math.sign(number) == 0) {
        document.getElementById("e1.2.3").innerHTML += number + " es zero. "
    } else if (Math.sign(number) == -1) {
        document.getElementById("e1.2.3").innerHTML += number + " es negatiu. "
    } else if (Math.sign(number) == 1) {
        document.getElementById("e1.2.3").innerHTML += number + " es positiu. "
    } else {
        document.getElementById("e1.2.3").innerHTML += number + "Error desconegut. "
    }
}
const trobarMaxim = (a, b, c) => a >= b ? (a >= c ? document.getElementById("e1.2.3").innerHTML += "<br> El més gran es " + a + '.' : document.getElementById("e1.2.3").innerHTML += "<br> El més gran es " + c + '.') : (b >= c ? document.getElementById("e1.2.3").innerHTML += "<br> El més gran es " + b + '.' : document.getElementById("e1.2.3").innerHTML += "<br> El més gran es " + c + '.');

const parOImpar = (numbersArr) => {
    console.log(numbersArr)
    for (let i = 0; i < numbersArr.length; i++) {
        numbersArr[i] % 2 == 0 ? (i != numbersArr.length ? document.getElementById("e1.2.4").innerHTML += numbersArr[i] + " es parell, " : document.getElementById("e1.2.4").innerHTML += numbersArr[i] + " es parell.") : (i != numbersArr.length ? document.getElementById("e1.2.4").innerHTML += numbersArr[i] + " es imparell, " : document.getElementById("e1.2.4").innerHTML += numbersArr[i] + " es imparell.")
    }
}
//1.3 Callbacks
const processar = (callback, number) => {
    callback(number);
}
const calculadora = (num1, num2, callback) => callback(num1, num2);
const esperarISaludar = (callback, arr) => callback(arr);

window.addEventListener(
    "load",
    () => {
        //1.1 Arrow Functions
        add(2, 3);
        randomNumber();
        greet('Vania');
        printNumbers([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
        ex115("Aqui va un missatge 3 segons tard");
        //1.2 Operadors Ternaris
        potConduir(17);
        ex122(5, 10);
        ex123(1);
        ex123(-1);
        ex123(0);
        trobarMaxim(1, 2, 3);
        parOImpar([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
        //1.3 Callbacks
        processar(potConduir, 18);
        calculadora(2, 2, add);
        esperarISaludar(printNumbers, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);

    },
    { once: true }
);
