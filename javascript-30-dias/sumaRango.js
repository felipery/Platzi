function rango(a, b) {
  let arr = [];
  const lenght = b - a;
  for (let i = 0; i <= lenght; i++) {
    if (i === 0) {
      arr[i] = a;
    } else {
      a += 1;
      arr[i] = a;
    }
  }
  return arr;
}

function sum(arr) {
  const initialValue = 0;
  return arr.reduce((acc, currentValue) => acc + currentValue, initialValue);
}

console.log(sum(rango(1, 10)));
