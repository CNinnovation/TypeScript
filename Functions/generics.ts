function identity<T>(arg : T) : T {
  return arg;
}

let output = identity<string>("sample");
console.log(output);

// type argument inference
let output1 = identity("sample2");
console.log(output1);

let output2 = identity<number>(33);
console.log(output2);
