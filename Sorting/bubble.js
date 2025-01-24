const arr = [54, 2, 14, 5, 35, 71, 2];

function bubbleSort(arr) {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

console.log("arr:::>", arr);
const sort = bubbleSort(arr);
console.log("sort::>", sort);

//Best Time Complexity = > O(n)
//Worst Time Complexity = > O(n^2)
//Average Time Complexity = > O(n^2)
