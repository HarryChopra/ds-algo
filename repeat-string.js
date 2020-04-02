export const repeatStringNumTimes = (str, num) => {
	if (num > 0) {
		return str + repeatStringNumTimes(str, num - 1);
	}
	return '';
};

// export const repeatStringNumTimes = (str, num) => {
// 	let storage = '';
// 	while (num > 0) {
// 		storage += str;
// 		num--;
// 	}
// 	return storage;
// };
