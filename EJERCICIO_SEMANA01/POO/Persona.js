class Persona{
    constructor(nombres, edad){
        this.nombres = nombres;
        this.edad = edad;
    }
    saludar(){
        return `Hola, soy ${this.nombres} y tengo ${this.edad} años`;
    }
}
const persona1 = new Persona("Leonardo",100)
const persona2 = new Persona("Axel",55)

console.log(persona1)
console.log(persona2)