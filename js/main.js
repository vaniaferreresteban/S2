"use strict";
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

const potConduir = (age) => age >= 18 ? document.getElementById("e1.2.1").innerHTML += "Pots conduïr" : document.getElementById("e1.2.1").innerHTML += "No pots conduir";

const ex122 = (a, b) => a > b ? document.getElementById("e1.2.2").innerHTML += "num1 és més gran" : document.getElementById("e1.2.2").innerHTML += "num2 és més gran";

window.addEventListener(
    "load",
    () => {
        add(2, 3);
        randomNumber();
        greet('Vania');
        printNumbers([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
        ex115("Aqui va un missatge 3 segons tard");
        potConduir(17);
        ex122(5, 10);
    },
    { once: true }
);
