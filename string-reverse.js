export const reverseString = (str) => {
	let storage = '';
	for (let i = str.length - 1; i >= 0; i--) {
		storage += str[i];
	}
	return storage;
};
