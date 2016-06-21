var add : (x : number, y : number, z? : number) => number;

add = function(x : number, y : number, z : number = 0) : number {
    return x + y + z;

}

console.log(add(3, 4, 5));
console.log(add(2, 3));