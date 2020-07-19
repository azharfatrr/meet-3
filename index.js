class Person {
    constructor(personData) {
        this.name = personData.name;
        this.age = personData.age;
    }

    printName = (greeting) => {
        document.getElementById("my-name").innerHTML = greeting + ", " + this.name + ", " + this.age;
    }

    //printName in arrow function
}

let myData = {
    name: "ardy",
    age: "15"
}
let person = (new Person(myData))
person.printName("Hello");

// document.getElementById("my-name").innerHTML = ""
