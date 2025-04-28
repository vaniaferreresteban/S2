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
const potConduir = (age) => {
    let e121HTML = document.getElementById("e1.2.1").innerHTML;

    age >= 18 ? e121HTML += "Pots conduïr" : e121HTML += "No pots conduir";
}


const ex122 = (a, b) => {
    let e122HTML = document.getElementById("e1.2.2").innerHTML;

    a > b ? e122HTML += "num1 és més gran" : e122HTML += "num2 és més gran";
}

const ex123 = (number) => {
    let e123HTML = document.getElementById("e1.2.3").innerHTML;

    if (Math.sign(number) == 0) {
        e123HTML += number + " es zero. "
    } else if (Math.sign(number) == -1) {
        e123HTML += number + " es negatiu. "
    } else if (Math.sign(number) == 1) {
        e123HTML += number + " es positiu. "
    } else {
        e123HTML += number + "Error desconegut. "
    }
}
const trobarMaxim = (a, b, c) => {
    let e123HTML = document.getElementById("e1.2.3").innerHTML;

    a >= b ? (a >= c ? e123HTML += "<br> El més gran es " + a + '.' : e123HTML += "<br> El més gran es " + c + '.') : (b >= c ? e123HTML += "<br> El més gran es " + b + '.' : e123HTML += "<br> El més gran es " + c + '.');
}

const parOImpar = (numbersArr) => {
    let e124HTML = document.getElementById("e1.2.4").innerHTML;

    for (let i = 0; i < numbersArr.length; i++) {
        numbersArr[i] % 2 == 0 ? (i != numbersArr.length ? e124HTML += numbersArr[i] + " es parell, " : e124HTML += numbersArr[i] + " es parell.") : (i != numbersArr.length ? e124HTML += numbersArr[i] + " es imparell, " : e124HTML += numbersArr[i] + " es imparell.")
    }
}
//1.3 Callbacks
const processar = (callback, number) => {
    callback(number);
}
const calculadora = (num1, num2, callback) => callback(num1, num2);

const esperarISaludar = (name, callback) => setInterval(callback, 2000, name);

const processarElements = (callback, arr) => callback(arr);

const processarCadena = (str, callback) => callback(str.toUpperCase());

//1.4 Rest & Spread operators
const ex141 = (...args) => {
    document.getElementById("e1.4.1").innerHTML += args;
}
const suma = (...numbers) => {
    let total = 0;
    numbers.forEach(num => {
        total += num
    })
    document.getElementById("e1.4.2").innerHTML += total;
};
const ex143 = () => {
    const objecte1 = { "tipus": "vinyl", "nom": "Ben Kaye - Constitution" };
    const objecte2 = { ...objecte1 };
    objecte2.label = "Tidy Trax – TIDY185T";
    document.getElementById("e1.4.3").innerHTML += 'objecte1: ' + JSON.stringify(objecte1) + '<br>objecte2: ' + JSON.stringify(objecte2);

}

const ex144 = (args) => {
    let e144HTML = document.getElementById("e1.4.4").innerHTML;
    let a, b, rest;
    [a, b] = [2, 3];
    [a, b, ...rest] = args;
    e144HTML += rest;
}

const ex145 = (...rest) => {
    let e145HTML = document.getElementById("e1.4.5").innerHTML;
    e145HTML += rest;
}

const ex146 = () => {

    const objecte1 = { "tipus": "Vinyl", "nom": "Ben Kaye - Constitution" };
    const objecte2 = { "Album": "Super Eurobeat Vol. 178", "any": "2007" };
    const objecte3 = { ...objecte1, ...objecte2 };

    let e146HTML = document.getElementById("e1.4.6").innerHTML;
    document.getElementById("e1.4.6").innerHTML += 'objecte1: ' + JSON.stringify(objecte1) + '<br>objecte2: ' + JSON.stringify(objecte2) + '<br>objecte3: ' + JSON.stringify(objecte3);
}


//1.5: Array transformations
const ex151 = (args) =>
    document.getElementById("e1.5.1").innerHTML +=
    args.map(arg => arg * 2);

const ex152 = (args) => document.getElementById("e1.5.2").innerHTML +=
    args.filter(arg => arg % 2 == 0);

const ex153 = (args) => document.getElementById("e1.5.3").innerHTML += args.find(arg => arg > 10);


const ex154 = (args) =>
    document.getElementById("e1.5.4").innerHTML +=
    args.reduce((arg, currentValue) => arg += currentValue);

const ex155 = args => document.getElementById("e1.5.5").innerHTML += args.filter(arg => arg <= 10).map(arg => arg * 2).reduce((acc, curr) => acc += curr);

const ex156 = args => document.getElementById("e1.5.6").innerHTML += args.every(arg => arg > 10) + ',' + args.some(arg => arg > 10);

//1.6: Array loops
const ex161 = args => args.forEach(arg => console.log(arg));
const ex162 = args => {
    for (let arg of args) console.log(arg);
}
const ex163 = args => {
    const newArgs = [...args.filter(arg => arg % 2 == 0)];
    document.getElementById("e1.6.3").innerHTML += newArgs;
}
const ex164 = object => {
    for (const property in object) {
        console.log(`${property}:${object[property]}`)
    }
}
const ex165 = args => {
    for (let arg of args) {
        console.log(arg)
        if (arg == 5) {
            break;
        }
    }
}
const ex166 = args => {
    let i = 0;
    for (let arg of args) {
        console.log(arg, i);
        i++;
    }
}

//Exercici 1.7: Promises & Async/Await
const ex171 = phrase => {
    return new Promise(function (myResolve, myReject) {
        if (phrase != 'Hola') {
            myReject('Està prohibit no dir "Hola"');
        }
        setTimeout(function () {
            myResolve(phrase);
        }, 2000)
    });
}
const ex172 = (phrase) => {
    let e172HTML = document.getElementById("e1.7.2").innerHTML;
    let e173HTML = document.getElementById("e1.7.3").innerHTML;
    let e175HTML = document.getElementById("e1.7.5").innerHTML;
    let e176HTML = document.getElementById("e1.7.6").innerHTML;

    ex171(phrase).then(
        function (value) {
            e172HTML += value;
        },
        function (error) {
            e172HTML += error;
        })
}
const ex173 = (phrase) => {
    new Promise(function (myResolve, myReject) {
        if (phrase != 'Hola') {
            myReject('Està prohibit no dir "Hola"');
        }
        myResolve(phrase);
    }).then(
        function (value) {
            e173HTML += value;
        },
        function (error) {
            e173HTML += error;
        });
}
const ex174 = async phrase => console.log(await ex171(phrase))
const ex175 = async phrase => {
    try {
        const myPromise = await ex171(phrase)
        e175HTML += myPromise;
    } catch (myReject) {
        e175HTML += myReject;
    }
}
const ex176 = (phrase) => {
    const dosSecs = new Promise(function (resolve, reject) {
        if (phrase == 'Hola') {
            reject('Està prohibit dir "Hola"');
        }
        setTimeout(function () {
            resolve(phrase);
        }, 2000)
    });
    const tresSecs = new Promise(function (resolve, reject) {
        if (phrase == 'Holis') {
            reject('Està prohibit dir "Holis"');
        }
        setTimeout(function () {
            resolve(phrase);
        }, 3000)
    });
    Promise.all([dosSecs, tresSecs]).then(
        (values) => {
            e176HTML += values
        },
        (error) => {
            e176HTML += error;
        }
    )
}





window.addEventListener(
    "load",
    () => {
        //1.1 Arrow Functions
        add(2, 3);
        randomNumber();
        greet('Vania');
        printNumbers([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        ex115("Aqui va un missatge 3 segons tard");
        //1.2 Operadors Ternaris
        potConduir(17);
        ex122(5, 10);
        ex123(1);
        ex123(-1);
        ex123(0);
        trobarMaxim(1, 2, 3);
        parOImpar([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        //1.3 Callbacks
        processar(potConduir, 18);
        calculadora(2, 2, add);
        esperarISaludar('Vania', greet);
        processarElements(printNumbers, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        processarCadena("Vania", ex115);
        //1.4 Rest & Spread operators
        ex141([2, 3, 5, 7, 11, 13, 17, 19, 23, 29].reverse());
        suma(2, 5, 8, 10);
        ex143();
        ex144([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
        ex145([2, 3, 5]);
        ex146();
        //1.5: Array transformations
        ex151([1, 2, 3, 4]);
        ex152([1, 2, 3, 4]);
        ex153([1, 10, 8, 11]);
        ex154([13, 7, 8, 21]);
        ex155([1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9]);
        ex156([11, 12, 13, 14]);
        //1.6: Array loops
        ex161(['Anna', 'Bernat', 'Clara']);
        ex162(['Anna', 'Bernat', 'Clara']);
        ex163([1, 2, 3, 4, 5, 6]);
        ex164({ 'nom': 'Ona', 'edat': 25, 'ciutat': 'Barcelona' });
        ex165([1, 2, 3, 4, 5, 6]);
        ex166(['Anna', 'Bernat', 'Clara']);
        //Exercici 1.7: Promises & Async/Await
        ex171('Hola món');
        ex172('Hola món');
        ex173('Hola');
        ex174('Holis');
        ex175('Hola');
        ex176('Holis');
    },
    { once: true }
);
