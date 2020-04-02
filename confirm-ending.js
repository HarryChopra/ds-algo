export const confirmEnding = (str, target) => {
	return str.substring(str.length - target.length, str.length) === target;
};

// export const confirmEnding = (str, target) => str.endsWith(target);
