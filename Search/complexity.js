function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return console.log("target found att ", i);
    }
  }
  console.log("target not found ");
}

const arr = [1, 2, 3];
const target = 2;

linearSearch(arr, target);
