export const largestOfFour = (arr) => {
	let storage;
	let largestArr = [];
	for (let fl = 0; fl < arr.length; fl++) {
		//this allows us to skip one loop iteration
		//Also resolves last case test error
		storage = arr[fl][0];
		//loop can start at 1 instead of 0, because of the step above
		for (let sl = 1; sl < arr[fl].length; sl++) {
			if (arr[fl][sl] > storage) storage = arr[fl][sl];
		}
		largestArr[fl] = storage;
	}
	return largestArr;
};
