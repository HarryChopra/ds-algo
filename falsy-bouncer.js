export const bouncer = (arr) => {
	let storage = [];
	for (let val of arr) {
		if (val) storage.push(val);
	}
	return storage;
};

console.log(bouncer([7, 'ate', '', false, 9]));
