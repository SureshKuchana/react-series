const sum = (a,b) => a + b;
const subtract = (a,b) => a - b;

let result = sum(3,7);
let expect = 10;

if(result !== expect){
  throw new Error(`${result} is not equal to ${expect}`)
}

result = subtract(7,3)
expect = 4

if(result !== expect){
  throw new Error(`${result} is not equal to ${expect}`)
}