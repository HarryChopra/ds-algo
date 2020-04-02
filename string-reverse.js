function reverseString(str) {
	let storage = '';
	for (let i = str.length - 1; i >= 0; i--) {
		storage += str[i];
	}
	return storage;
}

console.log(reverseString('hello'));
console.log(reverseString('Howdy'));
console.log(reverseString('Greetings from Earth'));
