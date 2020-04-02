export const findElement = (arr, func) => {
	for (let n of arr) {
		if (func(n)) return n;
	}
	return undefined;
};
