let str = "MALAYALAM";

function isPalindrom(str, start, end) {
  if (start > end) {
    console.log(str, "is a palindrom");

    return true;
  }
  if (str[start] !== str[end]) {
    console.log(str, "is not a Palindrom");
    return false;
  }
  return isPalindrom(str, start + 1, end - 1);
}
console.log(isPalindrom(str, 0, str.length - 1));
