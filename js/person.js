"use strict"

class Person {
    constructor(name) {
        this._name = name;
    }
    get name() {
        return this._name;
    }
    greet = () => document.getElementById("e1.1.3").innerHTML += `Hola ${this.name}`
}