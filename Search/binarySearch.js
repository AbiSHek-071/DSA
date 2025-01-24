const arr = [1, 2, 3, 4, 5, 6, 7];

// function binarySearch(arr, target, start, end = arr.length) {
//   if (start > end) {
//     return console.log("Target not found");
//   }

//   let middle = Math.floor((start + end) / 2);
//   if (arr[middle] === target) {
//     console.log("Target found at ", middle);
//   } else if (arr[middle] < target) {
//     return binarySearch(arr, target, middle + 1, end);
//   } else {
//     return binarySearch(arr, target, start, middle - 1);
//   }
// }

// binarySearch(arr, 4, 0, arr.length);

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (target == arr[middle]) {
      return console.log("found at ", middle);
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return console.log("not found");
}

binarySearch(arr, 2);
