import { booWho } from '../boo-who';

describe('Boo who', () => {
	test('booWho(true) should return true', () => {
		expect(booWho(true)).toBe(true);
	});
	test('booWho(false) should return true.', () => {
		expect(booWho(false)).toBe(true);
	});
	test('booWho([1, 2, 3]) should return false.', () => {
		expect(booWho([1, 2, 3])).toBe(false);
	});
	test('booWho([].slice) should return false', () => {
		expect(booWho([].slice)).toBe(false);
	});
	test('booWho({ "a": 1 }) should return false.', () => {
		expect(booWho({ a: 1 })).toBe(false);
	});
	test('booWho(1) should return false.', () => {
		expect(booWho(1)).toBe(false);
	});
	test('booWho(NaN) should return false.', () => {
		expect(booWho(NaN)).toBe(false);
	});
	test('booWho("a") should return false.', () => {
		expect(booWho('a')).toBe(false);
	});
	test('booWho("true") should return false', () => {
		expect(booWho('true')).toBe(false);
	});
	test('booWho("false") should return false.', () => {
		expect(booWho('false')).toBe(false);
	});
});
