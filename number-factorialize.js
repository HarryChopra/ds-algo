export const factorialize = (num) => {
	if (num > 1) {
		return num * factorialize(num - 1);
	}
	return 1;
};
