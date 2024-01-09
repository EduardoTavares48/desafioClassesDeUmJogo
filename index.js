class Hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    atacar() {
        switch (this.type) {
            case "Guerreiro":
                console.log(`O ${this.type} atacou usando a espada`)
                break
            case "Mago":
                console.log(`O ${this.type} atacou usando magia`)
                break
            case "Ninja":
                console.log(`O ${this.type} atacou usando shuriken`)
                break
            case "Monge":
                console.log(`O ${this.type} atacou usando artes maciais`)
                break
        }
    }
}

let heroGuerreiro = new Hero("Eduardo", 22, "Guerreiro")
let heroMonge = new Hero("Carlos", 23, "Monge")

console.log(heroGuerreiro.atacar())
console.log(heroMonge.atacar())