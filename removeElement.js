function removeElement(str, start, end, target, newstr) {
  if (start > end) {
    return newstr;
  }
  if (str[start] !== target) {
    newstr += str[start];
  }
  return removeElement(str, start + 1, end, target, newstr);
}

let str = "With great power comes great responsibility";
let target = "p";
let newstr = "";

console.log(removeElement(str, 0, str.length - 1, target, newstr));
