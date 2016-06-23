var Character = (function () {
    function Character(firstname, lastname) {
        this.fullname = firstname + " " + lastname;
    }
    Character.prototype.greet = function (name) {
        if (name) {
            return "Hi " + name + "! my name is " + this.fullname;
        }
        else {
            return "Hi! My name is " + this.fullname;
        }
    };
    return Character;
}());
var spark = new Character("Stephanie", "Nagel");
var msg = spark.greet();
console.log(msg);
var msg1 = spark.greet("Tom");
console.log(msg1);
