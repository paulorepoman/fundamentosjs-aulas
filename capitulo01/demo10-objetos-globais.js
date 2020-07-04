/*console.log( 'keys', Object.keys({ nome: 'Erick'}))
console.log( 'values', Object.values({ nome: 'Erick'}))
console.log('now', Date.now())
console.log('random', Math.random())*/

// global
//console.log('global', global)

// Quiz
/*animal = {
    _id: '123', 
    get id() {
        return this._id 
    } 
}
console.log(animal.id)*/

animal = {
    _idade: '123', 
    set idade(valor) {
        this._idade = valor 
    }
    
}

animal.idade = 10

console.log(animal.idade)


/*
Resultado desse Quiz é:
'123'
undefined

e eu respondi
123
undefined

Porra é essa?*/

