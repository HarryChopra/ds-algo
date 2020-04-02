export const findLongestWordLength = (str) => {
	let strArr = str.split(' ');
	for (let i = 0; i < strArr.length - 1; i++) {
		if (strArr[i].length > strArr[i + 1].length) {
			[strArr[i], strArr[i + 1]] = [strArr[i + 1], strArr[i]];
		}
	}
	return strArr[strArr.length - 1].length;
};

findLongestWordLength('The quick brown fox jumped over the lazy dog');
