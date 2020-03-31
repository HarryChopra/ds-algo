function countdown(n) {
	if (n > 0) {
		const temp = countdown(n - 1);
		temp.push(n);
		return temp;
	}
	return [];
}

console.log(countdown(-1));
