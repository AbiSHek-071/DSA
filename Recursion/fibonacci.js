function fibonnacci(n) {
  if (n <= 1) return n;

  return fibonnacci(n - 2) + fibonnacci(n - 1);
}

console.log(fibonnacci(7));
