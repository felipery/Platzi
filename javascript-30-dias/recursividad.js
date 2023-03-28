//fibonacci

/*
 const fibonacci = n => {
  const fib = [0, 1]
  for (let i = 2; i <= n ; i++){
    fib [i] = fib[i - 2] + fib[i - 1]
  }
  return fib[n]
}
 

*/

const fibonacci = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
};

console.log(fibonacci(8));
