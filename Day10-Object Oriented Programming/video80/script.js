let obj = {
    a: 1,
    b: "Harsh"
}
console.log(obj)

let animal = {
    eats: true
};

let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // it will set rabbit.[[Prototype]]= animal
// animal.__proto__= rabbit;

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats() {
        console.log("Kha raha hoon")
    }

    jumps() {
        console.log("Kood raha hoon")
    }

}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is a lion...")
    }

}

let a = new Animal("Bunny");
console.log(a)

let l = new Animal("Shera");
console.log(l)

