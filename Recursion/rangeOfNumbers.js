function rangeOfNumebrs(start, end) {
  if (end < start) {
    return [];
  } else {
    const number = rangeOfNumebrs(start, end - 1);
    number.push(end);
    return number;
  }
}
console.log(rangeOfNumebrs(1, 5));
