// fibonacci sequence

function fib(n) {
	while (n > 1) {
		return fib(n - 1) + fib(n - 2);
	}
	return n;
}

console.log(fib(8)); //21
