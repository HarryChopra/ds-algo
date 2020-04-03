export const titleCase = (str) => {
	let strArray = str.toLowerCase().split(' ');
	for (let i = 0; i < strArray.length; i++) {
		strArray[i] = strArray[i][0].toUpperCase() + strArray[i].slice(1);
	}
	return strArray.join(' ');
};
