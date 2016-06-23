
function add(...x : number[]) : number {
  var result = 0;
  for (var i = 0; i < x.length; i++) {
    result += x[i];
  }
  return result;
}


console.log(add(3, 4, 5, 11, 15, 22, 33));
console.log(add(2, 3));