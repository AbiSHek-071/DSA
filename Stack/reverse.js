function reverseString(str) {
  const strS = str.split(" ");

  const stack = [];
  for (i of strS) {
    stack.push(i);
  }
  let res = "";
  while (stack.length) {
    const current = stack.pop();
    res += " " + current;
  }
  return res.trim();
}

console.log(reverseString("I AM THE BOSS"));
