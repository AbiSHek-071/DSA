function validParanthesis(input) {
  const check = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  const stack = [];
  for (let value of input) {
    if (value === "(" || value === "[" || value === "{") {
      stack.push(value);
    } else {
      if (check[value] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log("correct:>", validParanthesis("{}[]()"));
console.log("incorrect:>", validParanthesis("{}[)(]"));
console.log("correct:>", validParanthesis("([]{})"));
console.log("correct:>", validParanthesis("([]{}[))"));
