export const repeatStringNumTimes = (str, num) => {
	let storage = '';
	while (num > 0) {
		storage += str;
		num--;
	}
	return storage;
};
