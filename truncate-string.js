export const truncateString = (str, num) => {
	let strArray = Array.from(String(str));
	if (num < strArray.length) {
		return strArray.slice(0, num).join('') + '...';
	}
	return str;
};
