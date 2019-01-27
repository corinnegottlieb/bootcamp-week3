// class Animal {
//     constructor(name, numLegs) {
//         this.name = name
//         this.numLegs = numLegs
//         this.children = []
//     }
//     giveBirth(name) {
//         this.children.push(name)
//     }
// }

// const dog = new Animal("dog", 4)
// const cat = new Animal("Puss", 4)
// cat.giveBirth("Dolly")
// console.log(cat.children)

// class Human {
//     constructor(name, age, isFriendly){
//     this.name = name
//     this.age = age
//     this.isFriendly = isFriendly
//     }
// }

// const me = new Human ("Corinne", 28, true)
// console.log(`${me.name} is ${me.age} years old and is ${me.isFriendly ? `friendly` : `not friendly`}`)

// class Vehicle {
//     constructor(x, y, speed, fuel) {
//         this.x = x;
//         this.y = y;
//         this._speed = speed;
//         this._fuel = fuel;
//         Vehicle.carsSold++;
        

//     }

//     set speed(speed) {
//         if (speed < 0) {
//             return console.log("Speed must be positive")
//         }
//         this._speed = speed
//     }
//     set fuel(fuel) {
//         if (fuel < 0 || fuel > 150) {
//             return console.log("fuel must be between 0 and 150")
//         }
//         this._fuel = fuel
//     }
    
//     get speed() {
//         return this._speed
//     }
//     get fuel(){
//         console.log("someone is accessing this property")
//         return this._fuel
//     }
//     static getInfo() {
//         console.log("We've sold " + Vehicle.carsSold + " vehicles.");
//     }
//     static calculateMoney() {
//         let revenue = Vehicle.carsSold * 30000
//         console.log("We made " + revenue + " dollars")
//     }
    
// }
// Vehicle.carsSold = 0;
// Vehicle.calculateMoney

// const car1 = new Vehicle("bently", 300000, 200)
// const car2 = new Vehicle("GTR", 200000, 300)
// Vehicle.getInfo()
// Vehicle.calculateMoney()

// const c = new Vehicle()
// c.x = 3
// c.y = 1
// c.speed = 10
// c.fuel = 100
// console.log(c.fuel)


class Animal {
    constructor(name, type, feeder) {
        this.name = name
        this.type = type
        this.feeder = feeder //dependency injection!
    }

    _consume(food) {
        console.log("Just consumed " + food + ". Feels good.")
    }

    eat() {
        const food = this.feeder.getFood(this.type)
        this._consume(food)
    }
}

class LuxuryFeeder {
    getFood(animalType) {
        if (animalType == "lion") {
            return "chia seeds"
        }
        if (animalType == "elephant") {
            return "peanuts"
        }

        return "scraps"
    }
}

class CheapFeeder {
    getFood(animalType) {
        return "scraps"
    }
}

const luxuryFeeder = new LuxuryFeeder()
const cheapFeeder = new CheapFeeder()
let weArePoor = true
let relevantFeeder

if(weArePoor){
    relevantFeeder = cheapFeeder
}
else {
    relevantFeeder = luxuryFeeder
}

const bisma = new Animal("Bisma", "lion", relevantFeeder)
bisma.eat()