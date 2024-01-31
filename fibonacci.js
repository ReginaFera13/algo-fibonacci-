function fibonacci(num) {
  let prev = 0;
  let curr = 1;
  let result = 0;
  for (i = 1; i <= num; i++) {
    result = curr;
    curr += prev;
    prev = curr - prev;
  }
  
  return result;
}

console.log(fibonacci(7))

module.exports = fibonacci;
