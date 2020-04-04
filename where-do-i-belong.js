export const getIndexToIns = (arr, num) => {
	// sort the array
	arr.sort((a, b) => a - b);
	// Return the lowest index at which num should be inserted into the array
	for (let i = 0; i < arr.length; i++) {
		if (num <= arr[i]) {
			return i;
		}
	}
	return arr.length;
};
