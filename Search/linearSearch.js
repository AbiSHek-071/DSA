function linearSearch(arr, target, index = 0) {
  if (arr.length <= index) {
    console.log("Target not found");
    return;
  }
  if (arr[index] === target) {
    console.log("Target found at ", index);
    return;
  }
  return linearSearch(arr, target, index + 1);
}

const arr = [1, 2, 3, 4, 5, 6, 7];
let target = 7;

linearSearch(arr, target);
