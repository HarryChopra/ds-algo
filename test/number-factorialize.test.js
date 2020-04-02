import { factorialize } from '../number-factorialize';

describe('Factorialize a Number', () => {
	test('factorialize(5) should return a number.', () => {
		expect(typeof factorialize(5)).toBe('number');
	});
	test('factorialize(5) should return 120.', () => {
		expect(factorialize(5)).toBe(120);
	});
	test('factorialize(10) should return 3628800.', () => {
		expect(factorialize(10)).toBe(3628800);
	});
	test('factorialize(20) should return 2432902008176640000', () => {
		expect(factorialize(20)).toBe(2432902008176640000);
	});
	test('factorialize(0) should return 1', () => {
		expect(factorialize(0)).toBe(1);
	});
});
