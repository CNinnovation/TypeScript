class Character {
    fullname : string;

    constructor(firstname : string, lastname : string) {
        this.fullname = firstname + " " + lastname;
    }

    greet(name? : string) : string {
        if (name) {
            return "Hi " + name + "! my name is " + this.fullname;
        }
        else {
            return "Hi! My name is " + this.fullname;            
        }
    }
}

var spark = new Character("Stephanie", "Nagel");
var msg = spark.greet();
console.log(msg);

var msg1 = spark.greet("Tom");
console.log(msg1);