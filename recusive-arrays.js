// returns the sum of the first n elements of an array arr

function sumOfArrayC(arr, n) {
	while (n > 0) {
		return arr[n - 1] + sumOfArrayC(arr, n - 1);
	}
	return 0;
}

// returns the sum of the elements to n index of an array arr

function sumOfArrayN(arr, n) {
	while (n > 0) {
		return arr[n] + sumOfArrayN(arr, n - 1);
	}
	return arr[0];
}
