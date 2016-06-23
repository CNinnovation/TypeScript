var greet = function(name? : string) : string {
    if (name) {
        return "Hello, " + name;
    }
    else {
        return "Hello!";
    }
}

var greeting = greet("Katharina");
console.log(greeting);