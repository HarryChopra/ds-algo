import { largestOfFour } from '../largest-number';

describe('Return Largest Numbers in Arrays', () => {
	test('largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return an array.', () => {
		expect(
			Array.isArray(
				largestOfFour([
					[4, 5, 1, 3],
					[13, 27, 18, 26],
					[32, 35, 37, 39],
					[1000, 1001, 857, 1],
				])
			)
		).toBe(true);
	});
	test('largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) should return [27, 5, 39, 1001].', () => {
		expect(
			largestOfFour([
				[13, 27, 18, 26],
				[4, 5, 1, 3],
				[32, 35, 37, 39],
				[1000, 1001, 857, 1],
			])
		).toEqual([27, 5, 39, 1001]);
	});
	test('largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) should return [9, 35, 97, 1000000]', () => {
		expect(
			largestOfFour([
				[4, 9, 1, 3],
				[13, 35, 18, 26],
				[32, 35, 97, 39],
				[1000000, 1001, 857, 1],
			])
		).toEqual([9, 35, 97, 1000000]);
	});
	test('largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]) should return [25, 48, 21, -3]', () => {
		expect(
			largestOfFour([
				[17, 23, 25, 12],
				[25, 7, 34, 48],
				[4, -10, 18, 21],
				[-72, -3, -17, -10],
			])
		).toEqual([25, 48, 21, -3]);
	});
});
