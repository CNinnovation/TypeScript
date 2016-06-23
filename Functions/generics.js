function identity(arg) {
    return arg;
}
var output = identity("sample");
console.log(output);
// type argument inference
var output1 = identity("sample2");
console.log(output1);
var output2 = identity(33);
console.log(output2);
