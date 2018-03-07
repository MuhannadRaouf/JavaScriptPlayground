// alert("External JavaScript Message");
// Numbers:
var numInt1 = 1;
var numInt2 = 6;
var numFloat1 = 5.5;
var numFloat2 = 7.2;
    // Operations:
    print("numInt1 + numInt2 ="+ numInt1 + numInt2)
    print("numInt1 * numInt2 ="+ numInt1 * numInt2)
    print("numInt1 / numInt2 ="+ numInt1 / numInt2)
    numInt1 ++;
    numInt2 += numInt1;
    numInt1 *= numInt2;
    numInt1 /= numInt2;
    numInt2 %= numInt1;

// NULLS:
var emptyVar = null;

// Booleans:
var itsTrue = true;
var itsFalse = false;
if(itsTrue){
    print(itsTrue);
}
if(itsFalse){
    print(itsFalse);
}
else{
    print(itsFalse);
}


// Strings:
var Message = "This is a string"
print(Message.toLowerCase());
print(Message.toUpperCase());

// Arrays:
var Movies = ["Hebta", "Hunger games", "Harry Potter"];
Movies[0] = "Predestination"
Movies.push("The Maze Runner");
print(Movies.pop());

for(var i =0; i <= Movies.length;i++){
    print(Movies[i]);
}

// Constants:
const unchanged = 5;


// Functions: Reuse Your Code:

// Using print to print anything instead of console.log() 
function print(message){
    console.log(message);
}




// Objects: Methods and Properties

var human = {
    name: "Muhannad",
    age: 21,
    talk: function (name, age){
        print("Hello, How are you today?");
        print('My Name is '+ name);
        print("i'm "+ age +" Years old");
    }
}
human.talk(human.name, human.age);
human.weight = 70;
print("My weight is " + human.weight);
print(human.hasOwnProperty("birthdate"));
print(human.hasOwnProperty("name"));
print(Object.keys(human)); // ["name", "age", "talk", "weight"]
print(Object.values(human)); // ["Muhannad", 21, ƒ, 70]
print(Object.entries(human));   


// Classes:
class Human{
    // Constructors
    constructor(name, age, weight){
        this.name = name;
        this.age = age;
        this.weight = weight;
    }
    // Methods
    getinfo(){
        print("My name is " + this.name +
             ". I'm " + this.age +" years old." 
            + "My weight is " + this.weight);
    }
}

// Inheritance
class Germany extends Human{
    constructor(name, age, weight, nationality){
        // calling the constructor of the super class
        super(name, age, weight)
        this.nationality = nationality;
    }
    // override method
    getinfo(){
        print(
            "My name is " + this.name + ". I'm " + this.age +
            " years old." + "My weight is "+ this.weight + " kg and i'm "
            + this.nationality
        );
    }
}


var person1 = new Human("Muhannad Raouf", 21, 70);
person1.getinfo();
var person2 = new Germany("Muhannad Raouf", 21, 70, "German");
person2.getinfo();