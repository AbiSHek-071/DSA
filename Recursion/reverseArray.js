const arr = [71, 72, 73, 74, 75];

function reversArray(arr, start = 0, end = arr.length - 1) {
  if (start > end) {
    return [];
  }
  return [arr[end], ...reversArray(arr, (start = 0), end - 1)];
}

console.log(reversArray(arr));
