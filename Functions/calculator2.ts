var add : (x : number, y : number, z? : number) => number;

add = function(x : number, y : number, z? : number) : number {
    var result = x + y;
    if (z !== undefined) {
        result += z;
    }
    return result;
}

console.log(add(3, 4, 5));
console.log(add(2, 3));