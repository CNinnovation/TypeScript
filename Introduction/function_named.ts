function greet(name? : string) : string {
    if (name) {
        return "Hello, " + name;
    }
    else {
        return "Hello!";
    }
}

var greeting = greet("Matthias");
console.log(greeting);