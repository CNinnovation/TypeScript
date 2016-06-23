var add;
add = function (x, y, z) {
    var result = x + y;
    if (z !== undefined) {
        result += z;
    }
    return result;
};
console.log(add(3, 4, 5));
console.log(add(2, 3));
