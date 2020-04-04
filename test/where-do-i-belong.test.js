import { getIndexToIns } from '../where-do-i-belong';

describe('Where do I Belong', () => {
	test('getIndexToIns([10, 20, 30, 40, 50], 35) should return a number', () => {
		expect(typeof getIndexToIns([10, 20, 30, 40, 50], 35)).toBe('number');
	});
	test('getIndexToIns([10, 20, 30, 40, 50], 35) should return 3', () => {
		expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toBe(3);
	});
	test('getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.', () => {
		expect(typeof getIndexToIns([10, 20, 30, 40, 50], 30)).toBe('number');
	});
	test('getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.', () => {
		expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toBe(2);
	});
	test('getIndexToIns([40, 60], 50) should return 1', () => {
		expect(getIndexToIns([40, 60], 50)).toBe(1);
	});
	test('getIndexToIns([40, 60], 50) should return a number.', () => {
		expect(typeof getIndexToIns([40, 60], 50)).toBe('number');
	});
	test('getIndexToIns([], 1) should return 0', () => {
		expect(getIndexToIns([], 1)).toBe(0);
	});
	test('getIndexToIns([], 1) should return a number', () => {
		expect(typeof getIndexToIns([], 1)).toBe('number');
	});
});
