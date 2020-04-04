export const mutation = (arr) => {
	let fArr = arr[0].toLowerCase().split('');
	let sArr = arr[1].toLowerCase().split('');
	//outer loop - 2nd string
	for (let letter of sArr) {
		if (fArr.indexOf(letter) < 0) return false;
	}
	return true;
};
