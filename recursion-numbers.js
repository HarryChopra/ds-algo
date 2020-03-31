function rangeOfNumbers(startNum, endNum) {
	if (endNum > startNum) {
		const temp = rangeOfNumbers(startNum, endNum - 1);
		temp.push(endNum);
		return temp;
	}

	return [startNum];
}

rangeOfNumbers(2, 10);
