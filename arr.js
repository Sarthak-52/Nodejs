let arr = [1, 2, 3, 4];
let newElement = 10;

arr.length = arr.length + 1;

for (let i = arr.length - 1; i > 0; i--) {
  arr[i] = arr[i - 1];
}

arr[0] = newElement;
console.log(arr);