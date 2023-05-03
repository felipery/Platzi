// Así se hace de manera sencilla
/* function revertirArray(arr) {
  return arr.reverse();
} */

function revertirArray(arr) {
  const newarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newarr.push(arr[i]);
  }
  return newarr;
}

console.log(revertirArray(['A', 'B', 'C']));

let valorArray = [1, 2, 3, 4, 5];

function revertirArrayEnSuLugar(arr) {
  const length = arr.length / 2;
  if (length % 2 === 0) {
    for (let i = 0; i < length; i++) {
      l;
    }
  } else {
    for (let i = 0; i < Math.floor(length); i++) {}
  }
}

console.log(revertirArrayEnSuLugar(valorArray));
