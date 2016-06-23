function test(value) {
    switch (typeof value) {
        case "string":
            return "it's a string";
        case "number":
            return "it's a number";
        case "boolean":
            return "bool";
        default:
            console.log("invalid");
    }
}
console.log(test("a string"));
console.log(test(4212));
console.log(test(false));
