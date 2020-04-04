export const chunkArrayInGroups = (arr, size) => {
	let storage = [];
	for (let i = 0; i < arr.length; i += size) {
		storage.push(arr.slice(i, i + size));
	}
	return storage;
};
