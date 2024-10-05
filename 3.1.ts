{
    // make a object with class

    class Animal {
        // name: string;
        // sound: string;

        // use paramiter  
        constructor(public name: string, public sound: string) {
            // this.name = name;
            // this.sound = sound;
        }
        makeSound(){
            console.log(`the ${this.name} sound is ${this.sound}`);
        }
    
    }

    const dog = new Animal("naby rad","gaw gaw")
    // dog.makeSound()
    dog.name;
    console.log(dog.name);
}