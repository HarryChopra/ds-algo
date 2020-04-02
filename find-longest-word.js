export const findLongestWordLength = (str) => {
	let strArr = str.split(' ');
	let longest = 0;
	for (let i = 0; i < strArr.length; i++) {
		if (strArr[i].length > longest) {
			longest = strArr[i].length;
		}
	}
	return longest;
};

findLongestWordLength('The quick brown fox jumped over the lazy dog');
