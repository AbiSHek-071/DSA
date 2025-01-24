const arr = [29, 10, 14, 37, 14, 33, 8, 11];

function insertionSort(arr) {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    const key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
}
console.log(insertionSort(arr));

//Best case Time Complexity = O(n)

//Worst and Average Complexity = O(n^2)

//space complexity = O(1 )
