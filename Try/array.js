let num = 12134;
const arr = [];

while (num > 0) {
  let digit = num % 10;
  arr.push(digit);
  num = Math.floor(num / 10);
}

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}

console.log(sum);
